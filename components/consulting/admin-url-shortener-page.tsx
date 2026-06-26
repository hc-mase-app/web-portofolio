'use client'

import { useCallback, useEffect, useState } from 'react'
import {
  Ban,
  CheckCircle2,
  Loader2,
  RefreshCw,
  Search,
  Shield,
  Trash2,
} from 'lucide-react'
import { ConsultingShell } from './site-shell'

type AdminLink = {
  id: string
  alias: string
  destinationUrl: string
  shortPath: string
  isActive: boolean
  clickCount: number
  createdAt: string
  lastClickedAt: string | null
}

type AdminStats = {
  totalLinks: number
  totalClicks: number
  activeLinks: number
  disabledLinks: number
}

function formatDate(value: string | null) {
  if (!value) {
    return '-'
  }

  return new Intl.DateTimeFormat('id-ID', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value))
}

export default function AdminUrlShortenerPage() {
  const [links, setLinks] = useState<AdminLink[]>([])
  const [stats, setStats] = useState<AdminStats | null>(null)
  const [search, setSearch] = useState('')
  const [token, setToken] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [savingId, setSavingId] = useState<string | null>(null)

  const loadLinks = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch(`/api/url-shortener?search=${encodeURIComponent(search)}`, {
        headers: token ? { 'x-url-shortener-admin-token': token } : undefined,
      })
      const payload = await response.json()

      if (!response.ok) {
        setError(payload.error || 'Gagal memuat data admin.')
        return
      }

      setLinks(payload.links)
      setStats(payload.stats)
    } catch {
      setError('Koneksi gagal. Coba ulang beberapa saat lagi.')
    } finally {
      setLoading(false)
    }
  }, [search, token])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const savedToken = window.localStorage.getItem('ym-id-url-shortener-admin-token')
      if (savedToken) {
        setToken(savedToken)
      }
    }, 0)

    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void loadLinks()
    }, 0)

    return () => window.clearTimeout(timer)
  }, [loadLinks])

  function saveToken() {
    window.localStorage.setItem('ym-id-url-shortener-admin-token', token)
    loadLinks()
  }

  async function updateStatus(link: AdminLink, isActive: boolean) {
    setSavingId(link.id)
    setError('')

    try {
      const response = await fetch(`/api/url-shortener/${link.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { 'x-url-shortener-admin-token': token } : {}),
        },
        body: JSON.stringify({ isActive }),
      })
      const payload = await response.json()

      if (!response.ok) {
        setError(payload.error || 'Gagal memperbarui status link.')
        return
      }

      await loadLinks()
    } catch {
      setError('Koneksi gagal. Coba ulang beberapa saat lagi.')
    } finally {
      setSavingId(null)
    }
  }

  async function deleteLink(link: AdminLink) {
    const confirmed = window.confirm(`Hapus short link /s/${link.alias}?`)
    if (!confirmed) {
      return
    }

    setSavingId(link.id)
    setError('')

    try {
      const response = await fetch(`/api/url-shortener/${link.id}`, {
        method: 'DELETE',
        headers: token ? { 'x-url-shortener-admin-token': token } : undefined,
      })
      const payload = await response.json()

      if (!response.ok) {
        setError(payload.error || 'Gagal menghapus link.')
        return
      }

      await loadLinks()
    } catch {
      setError('Koneksi gagal. Coba ulang beberapa saat lagi.')
    } finally {
      setSavingId(null)
    }
  }

  return (
    <ConsultingShell>
      <section className="bg-[radial-gradient(circle_at_70%_30%,#0b3554_0%,#06223a_35%,#06172a_75%)] px-5 pb-14 pt-28 text-white lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-wide text-[#e1a126]">Admin Tools</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
            URL Shortener Management
          </h1>
          <p className="mt-6 max-w-4xl text-base leading-8 text-white/80">
            Pantau performa tautan pendek, cari alias, nonaktifkan link, atau hapus data yang tidak digunakan.
          </p>
        </div>
      </section>

      <section className="bg-[#fbfaf7] px-5 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              ['Total Links', stats?.totalLinks ?? 0],
              ['Total Clicks', stats?.totalClicks ?? 0],
              ['Active Links', stats?.activeLinks ?? 0],
              ['Disabled', stats?.disabledLinks ?? 0],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</p>
                <p className="mt-3 text-3xl font-extrabold text-[#07182c]">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="grid gap-3 lg:grid-cols-[1fr_220px_130px]">
              <label className="relative">
                <Search className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Cari alias, original URL, atau campaign..."
                  className="w-full rounded-md border border-slate-300 bg-white py-3 pl-10 pr-3 text-sm text-[#07182c] outline-none transition placeholder:text-slate-400 focus:border-[#d99a22] focus:ring-2 focus:ring-[#d99a22]/20"
                />
              </label>
              <input
                value={token}
                onChange={(event) => setToken(event.target.value)}
                placeholder="Admin token"
                type="password"
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-3 text-sm text-[#07182c] outline-none transition placeholder:text-slate-400 focus:border-[#d99a22] focus:ring-2 focus:ring-[#d99a22]/20"
              />
              <button
                type="button"
                onClick={saveToken}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#d99a22] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#eba92e]"
              >
                <RefreshCw className="h-4 w-4" /> Filter
              </button>
            </div>
            {error ? (
              <div className="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                {error}
              </div>
            ) : null}
          </div>

          <div className="mt-6 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-[1fr_1.5fr_100px_115px_130px] gap-4 bg-slate-50 px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
              <span>Alias</span>
              <span>Destination</span>
              <span>Clicks</span>
              <span>Status</span>
              <span>Action</span>
            </div>

            {loading ? (
              <div className="flex items-center justify-center gap-2 px-5 py-12 text-sm font-semibold text-slate-500">
                <Loader2 className="h-4 w-4 animate-spin" /> Memuat data...
              </div>
            ) : links.length ? (
              links.map((link) => (
                <div
                  key={link.id}
                  className="grid grid-cols-[1fr_1.5fr_100px_115px_130px] gap-4 border-t border-slate-100 px-5 py-4 text-sm text-[#07182c]"
                >
                  <div>
                    <p className="font-bold">/s/{link.alias}</p>
                    <p className="mt-1 text-xs text-slate-500">{formatDate(link.createdAt)}</p>
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-slate-700">{link.destinationUrl}</p>
                    <p className="mt-1 text-xs text-slate-500">Last click: {formatDate(link.lastClickedAt)}</p>
                  </div>
                  <p className="font-extrabold">{link.clickCount}</p>
                  <span className={`inline-flex h-7 w-fit items-center rounded-full px-3 text-xs font-bold ${link.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {link.isActive ? 'Active' : 'Disabled'}
                  </span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      disabled={savingId === link.id}
                      onClick={() => updateStatus(link, !link.isActive)}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#d99a22]/45 bg-[#fff7ed] text-[#c88916] transition hover:bg-[#d99a22] hover:text-white disabled:opacity-50"
                      aria-label={link.isActive ? 'Disable link' : 'Enable link'}
                    >
                      {link.isActive ? <Ban className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
                    </button>
                    <button
                      type="button"
                      disabled={savingId === link.id}
                      onClick={() => deleteLink(link)}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-red-200 bg-red-50 text-red-600 transition hover:bg-red-600 hover:text-white disabled:opacity-50"
                      aria-label="Delete link"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-5 py-12 text-center text-sm text-slate-500">
                Belum ada short link yang cocok dengan pencarian.
              </div>
            )}
          </div>

          <div className="mt-6 flex gap-3 rounded-lg bg-[#f1eee6] px-5 py-4 text-sm leading-6 text-slate-700">
            <Shield className="mt-0.5 h-5 w-5 shrink-0 text-[#c88916]" />
            <p>
              Production sebaiknya mengisi <span className="font-bold">URL_SHORTENER_ADMIN_TOKEN</span>. Token ini menjaga operasi admin seperti delete dan disable agar tidak terbuka publik.
            </p>
          </div>
        </div>
      </section>
    </ConsultingShell>
  )
}
