const RESERVED_ALIASES = new Set([
  'admin',
  'api',
  'about',
  'contact',
  'cv',
  'favicon.ico',
  'home',
  'resources',
  's',
  'services',
  'tools',
  'yanfirdaus',
  '_next',
  'robots.txt',
  'sitemap.xml',
])

const ALIAS_PATTERN = /^[a-z0-9][a-z0-9-]{2,62}$/

export function normalizeAlias(alias: string) {
  return alias.trim().toLowerCase()
}

export function validateAlias(alias: string) {
  const normalized = normalizeAlias(alias)

  if (!normalized) {
    return { ok: false, message: 'Alias wajib diisi.' }
  }

  if (!ALIAS_PATTERN.test(normalized)) {
    return {
      ok: false,
      message: 'Alias harus 3-63 karakter, memakai huruf kecil, angka, atau tanda hubung.',
    }
  }

  if (RESERVED_ALIASES.has(normalized)) {
    return { ok: false, message: 'Alias ini dilindungi karena bentrok dengan route YM-ID.' }
  }

  return { ok: true, alias: normalized }
}

export function validateDestinationUrl(value: string) {
  try {
    const url = new URL(value.trim())

    if (!['http:', 'https:'].includes(url.protocol)) {
      return { ok: false, message: 'URL harus memakai http atau https.' }
    }

    if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') {
      return { ok: false, message: 'URL lokal tidak boleh digunakan sebagai destination.' }
    }

    return { ok: true, url: url.toString() }
  } catch {
    return { ok: false, message: 'Format URL belum valid.' }
  }
}

export function generateAlias() {
  const alphabet = 'abcdefghjkmnpqrstuvwxyz23456789'
  const bytes = crypto.getRandomValues(new Uint8Array(7))

  return Array.from(bytes, (byte) => alphabet[byte % alphabet.length]).join('')
}
