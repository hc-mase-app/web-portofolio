import crypto from 'crypto'
import { Pool } from 'pg'

export type UrlShortLink = {
  id: string
  alias: string
  destinationUrl: string
  shortPath: string
  qrCodeSvg: string | null
  isActive: boolean
  clickCount: number
  createdAt: string
  updatedAt: string
  disabledAt: string | null
  lastClickedAt: string | null
}

export type UrlShortenerStats = {
  totalLinks: number
  totalClicks: number
  activeLinks: number
  disabledLinks: number
}

type LinkRow = {
  id: string
  alias: string
  destination_url: string
  short_path: string
  qr_code_svg: string | null
  is_active: boolean
  click_count: number
  created_at: Date
  updated_at: Date
  disabled_at: Date | null
  last_clicked_at: Date | null
}

type StatsRow = {
  total_links: string
  total_clicks: string
  active_links: string
  disabled_links: string
}

declare global {
  var ymIdUrlShortenerPool: Pool | undefined
  var ymIdUrlShortenerSchemaPromise: Promise<void> | undefined
}

function getPool() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL belum tersedia.')
  }

  if (!global.ymIdUrlShortenerPool) {
    global.ymIdUrlShortenerPool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
      max: 4,
    })
  }

  return global.ymIdUrlShortenerPool
}

async function ensureSchema() {
  if (!global.ymIdUrlShortenerSchemaPromise) {
    global.ymIdUrlShortenerSchemaPromise = getPool().query(`
      CREATE TABLE IF NOT EXISTS url_short_links (
        id text PRIMARY KEY,
        alias varchar(63) NOT NULL UNIQUE,
        destination_url text NOT NULL,
        short_path text NOT NULL,
        qr_code_svg text,
        is_active boolean NOT NULL DEFAULT true,
        click_count integer NOT NULL DEFAULT 0,
        created_at timestamptz NOT NULL DEFAULT now(),
        updated_at timestamptz NOT NULL DEFAULT now(),
        disabled_at timestamptz
      );

      CREATE TABLE IF NOT EXISTS url_short_link_clicks (
        id bigserial PRIMARY KEY,
        link_id text NOT NULL REFERENCES url_short_links(id) ON DELETE CASCADE,
        alias varchar(63) NOT NULL,
        clicked_at timestamptz NOT NULL DEFAULT now(),
        referrer text,
        user_agent text,
        ip_hash text
      );

      CREATE INDEX IF NOT EXISTS idx_url_short_links_alias ON url_short_links(alias);
      CREATE INDEX IF NOT EXISTS idx_url_short_links_created_at ON url_short_links(created_at DESC);
      CREATE INDEX IF NOT EXISTS idx_url_short_clicks_link_clicked ON url_short_link_clicks(link_id, clicked_at DESC);
      CREATE INDEX IF NOT EXISTS idx_url_short_clicks_alias_clicked ON url_short_link_clicks(alias, clicked_at DESC);
    `).then(() => undefined)
  }

  return global.ymIdUrlShortenerSchemaPromise
}

function mapLink(row: LinkRow): UrlShortLink {
  return {
    id: row.id,
    alias: row.alias,
    destinationUrl: row.destination_url,
    shortPath: row.short_path,
    qrCodeSvg: row.qr_code_svg,
    isActive: row.is_active,
    clickCount: row.click_count,
    createdAt: row.created_at.toISOString(),
    updatedAt: row.updated_at.toISOString(),
    disabledAt: row.disabled_at?.toISOString() ?? null,
    lastClickedAt: row.last_clicked_at?.toISOString() ?? null,
  }
}

export async function createShortLink(input: {
  alias: string
  destinationUrl: string
  shortPath: string
  qrCodeSvg: string
}) {
  await ensureSchema()

  const result = await getPool().query<LinkRow>(
    `
      INSERT INTO url_short_links (id, alias, destination_url, short_path, qr_code_svg)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *, NULL::timestamptz AS last_clicked_at
    `,
    [crypto.randomUUID(), input.alias, input.destinationUrl, input.shortPath, input.qrCodeSvg],
  )

  return mapLink(result.rows[0])
}

export async function listShortLinks(search = '') {
  await ensureSchema()

  const normalizedSearch = `%${search.trim().toLowerCase()}%`
  const result = await getPool().query<LinkRow>(
    `
      SELECT
        l.*,
        max(c.clicked_at) AS last_clicked_at
      FROM url_short_links l
      LEFT JOIN url_short_link_clicks c ON c.link_id = l.id
      WHERE
        $1 = '%%'
        OR lower(l.alias) LIKE $1
        OR lower(l.destination_url) LIKE $1
      GROUP BY l.id
      ORDER BY l.created_at DESC
      LIMIT 100
    `,
    [normalizedSearch],
  )

  return result.rows.map(mapLink)
}

export async function getShortenerStats(): Promise<UrlShortenerStats> {
  await ensureSchema()

  const result = await getPool().query<StatsRow>(`
    SELECT
      count(*)::text AS total_links,
      coalesce(sum(click_count), 0)::text AS total_clicks,
      count(*) FILTER (WHERE is_active)::text AS active_links,
      count(*) FILTER (WHERE NOT is_active)::text AS disabled_links
    FROM url_short_links
  `)

  const row = result.rows[0]

  return {
    totalLinks: Number(row.total_links),
    totalClicks: Number(row.total_clicks),
    activeLinks: Number(row.active_links),
    disabledLinks: Number(row.disabled_links),
  }
}

export async function getShortLinkByAlias(alias: string) {
  await ensureSchema()

  const result = await getPool().query<LinkRow>(
    `
      SELECT l.*, max(c.clicked_at) AS last_clicked_at
      FROM url_short_links l
      LEFT JOIN url_short_link_clicks c ON c.link_id = l.id
      WHERE l.alias = $1
      GROUP BY l.id
      LIMIT 1
    `,
    [alias],
  )

  return result.rows[0] ? mapLink(result.rows[0]) : null
}

export async function updateShortLinkStatus(id: string, isActive: boolean) {
  await ensureSchema()

  const result = await getPool().query<LinkRow>(
    `
      UPDATE url_short_links
      SET
        is_active = $2,
        disabled_at = CASE WHEN $2 THEN NULL ELSE now() END,
        updated_at = now()
      WHERE id = $1
      RETURNING *, NULL::timestamptz AS last_clicked_at
    `,
    [id, isActive],
  )

  return result.rows[0] ? mapLink(result.rows[0]) : null
}

export async function deleteShortLink(id: string) {
  await ensureSchema()

  const result = await getPool().query('DELETE FROM url_short_links WHERE id = $1', [id])
  return (result.rowCount ?? 0) > 0
}

export async function recordClick(input: {
  alias: string
  referrer: string | null
  userAgent: string | null
  ip: string
}) {
  await ensureSchema()

  const client = await getPool().connect()

  try {
    await client.query('BEGIN')

    const linkResult = await client.query<LinkRow>(
      `
        UPDATE url_short_links
        SET click_count = click_count + 1, updated_at = now()
        WHERE alias = $1 AND is_active = true
        RETURNING *, NULL::timestamptz AS last_clicked_at
      `,
      [input.alias],
    )

    const link = linkResult.rows[0]

    if (!link) {
      await client.query('ROLLBACK')
      return null
    }

    const ipSalt = process.env.URL_SHORTENER_IP_HASH_SALT || process.env.NEXTAUTH_SECRET || 'ym-id-url-shortener'
    const ipHash = crypto.createHash('sha256').update(`${ipSalt}:${input.ip}`).digest('hex')

    await client.query(
      `
        INSERT INTO url_short_link_clicks (link_id, alias, referrer, user_agent, ip_hash)
        VALUES ($1, $2, $3, $4, $5)
      `,
      [link.id, link.alias, input.referrer, input.userAgent, ipHash],
    )

    await client.query('COMMIT')
    return mapLink(link)
  } catch (error) {
    await client.query('ROLLBACK')
    throw error
  } finally {
    client.release()
  }
}
