'use client'

import { useMemo, useState } from 'react'
import {
  CheckCircle2,
  Copy,
  ExternalLink,
  Link2,
  Loader2,
  ShieldCheck,
} from 'lucide-react'
import { ConsultingShell } from './site-shell'
import { ToolsLink3DVisual } from './three-d-visuals'

type ShortLinkResult = {
  shortUrl: string
  link: {
    alias: string
    destinationUrl: string
    shortPath: string
    qrCodeSvg: string | null
    clickCount: number
    isActive: boolean
  }
}

function validateUrl(value: string) {
  try {
    const url = new URL(value)
    return ['http:', 'https:'].includes(url.protocol)
  } catch {
    return false
  }
}

export default function UrlShortenerPage() {
  const [url, setUrl] = useState('')
  const [alias, setAlias] = useState('')
  const [result, setResult] = useState<ShortLinkResult | null>(null)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)

  const aliasPreview = useMemo(() => {
    const normalized = alias.trim().toLowerCase()
    return normalized ? `/s/${normalized}` : '/s/auto'
  }, [alias])

  async function createShortLink() {
    setError('')
    setCopied(false)

    if (!validateUrl(url.trim())) {
      setError('Masukkan URL lengkap yang valid, misalnya https://ym-id.com/resources/cv-ats-generator.')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/url-shortener', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: url.trim(),
          alias: alias.trim() || undefined,
        }),
      })

      const payload = await response.json()

      if (!response.ok) {
        setError(payload.error || 'Gagal membuat short URL.')
        return
      }

      setResult(payload)
    } catch {
      setError('Koneksi gagal. Coba ulang beberapa saat lagi.')
    } finally {
      setLoading(false)
    }
  }

  async function copyShortUrl() {
    if (!result?.shortUrl) {
      return
    }

    await navigator.clipboard.writeText(result.shortUrl)
    setCopied(true)
  }

  return (
    <ConsultingShell>
      <section className="bg-[radial-gradient(circle_at_70%_30%,#0b3554_0%,#06223a_35%,#06172a_75%)] px-5 pb-16 pt-28 text-white lg:px-8 lg:pb-20 lg:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[#e1a126]">TOOLS</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              URL Shortener
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80">
              Buat tautan pendek YM-ID untuk kampanye, rekrutmen, dokumen HR, dan materi konsultasi. Alias bisa dibuat otomatis atau ditentukan manual.
            </p>
          </div>
          <div className="hidden justify-center lg:flex">
            <ToolsLink3DVisual />
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] px-5 py-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.46fr]">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-[#07182c]">Generate Short URL</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Masukkan URL panjang. Custom alias bersifat opsional dan harus unik.
                </p>
              </div>
              <span className="hidden rounded-full bg-[#f1eee6] px-3 py-1 text-xs font-bold text-[#c88916] sm:inline-flex">
                ym-id.com
              </span>
            </div>

            <div className="mt-6 grid gap-5">
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-wide text-slate-600">Long URL</span>
                <input
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                  placeholder="https://ym-id.com/resources/cv-ats-generator"
                  className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-3 text-sm text-[#07182c] outline-none transition placeholder:text-slate-400 focus:border-[#d99a22] focus:ring-2 focus:ring-[#d99a22]/20"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-[1fr_190px]">
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wide text-slate-600">Custom Alias Opsional</span>
                  <input
                    value={alias}
                    onChange={(event) => setAlias(event.target.value)}
                    placeholder="hr-manager"
                    className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-3 text-sm text-[#07182c] outline-none transition placeholder:text-slate-400 focus:border-[#d99a22] focus:ring-2 focus:ring-[#d99a22]/20"
                  />
                </label>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wide text-slate-600">Preview</span>
                  <div className="mt-2 flex min-h-11 items-center rounded-md border border-slate-300 bg-slate-50 px-3 text-sm font-bold text-[#07182c]">
                    {aliasPreview}
                  </div>
                </div>
              </div>

              {error ? (
                <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {error}
                </div>
              ) : null}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={createShortLink}
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#d99a22] px-6 py-3 text-sm font-bold text-white shadow transition hover:bg-[#eba92e] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Link2 className="h-4 w-4" />}
                  Generate Link
                </button>
                <p className="text-xs font-semibold text-slate-500">
                  Rate limit aktif untuk mencegah spam dan penyalahgunaan.
                </p>
              </div>
            </div>
          </div>

          <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#07182c]">Hasil Link</h2>
            {result ? (
              <div className="mt-5 grid gap-5">
                <div className="rounded-md border border-slate-300 bg-slate-50 px-3 py-3 text-sm font-bold text-[#07182c]">
                  {result.shortUrl}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={copyShortUrl}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-[#d99a22] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#eba92e]"
                  >
                    {copied ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                  <a
                    href={result.shortUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-[#d99a22] px-4 py-2.5 text-xs font-bold text-[#c88916] transition hover:bg-[#d99a22] hover:text-white"
                  >
                    Open <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                {result.link.qrCodeSvg ? (
                  <div
                    className="mx-auto rounded-lg border border-slate-200 bg-white p-3"
                    dangerouslySetInnerHTML={{ __html: result.link.qrCodeSvg }}
                  />
                ) : null}
              </div>
            ) : (
              <div className="mt-5 rounded-lg border border-dashed border-slate-300 p-6 text-center text-sm leading-6 text-slate-500">
                Short URL dan QR code akan muncul setelah link dibuat.
              </div>
            )}
          </aside>
        </div>

        <div className="mx-auto mt-6 grid max-w-7xl gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Total Clicks</p>
            <p className="mt-3 text-3xl font-extrabold text-[#07182c]">{result?.link.clickCount ?? 0}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Status</p>
            <span className="mt-4 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
              {result?.link.isActive ? 'Active' : 'Waiting'}
            </span>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 text-[#c88916]" />
              <div>
                <p className="text-sm font-bold text-[#07182c]">Security Guardrails</p>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  URL, alias, route reserved, dan request rate limit divalidasi di server.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ConsultingShell>
  )
}
