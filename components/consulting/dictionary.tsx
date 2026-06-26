'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { dictionaryTerms } from '@/lib/hr-dictionary-data'

const categories = ['Semua', ...Array.from(new Set(dictionaryTerms.map((item) => item.category)))]
const letters = ['Semua', ...Array.from(new Set(dictionaryTerms.map((item) => item.term.charAt(0).toUpperCase())))]

export default function DictionaryBrowser() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Semua')
  const [letter, setLetter] = useState('Semua')

  const terms = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return dictionaryTerms.filter((item) => {
      const matchesCategory = category === 'Semua' || item.category === category
      const matchesLetter = letter === 'Semua' || item.term.toUpperCase().startsWith(letter)
      const matchesQuery =
        !normalized ||
        item.term.toLowerCase().includes(normalized) ||
        item.definition.toLowerCase().includes(normalized) ||
        item.related.some((related) => related.toLowerCase().includes(normalized))
      return matchesCategory && matchesLetter && matchesQuery
    })
  }, [category, letter, query])

  return (
    <div>
      <div className="relative">
        <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Cari istilah, misalnya: Coaching, Feedback, atau Situational Leadership..."
          className="w-full rounded-xl border border-slate-300 bg-white py-4 pl-14 pr-5 text-sm text-[#07182c] outline-none placeholder:text-slate-400 focus:border-[#d99a22]"
        />
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`rounded-full border px-4 py-2 text-xs transition ${
              category === item
                ? 'border-[#d99a22] bg-[#d99a22]/10 text-[#b67910]'
                : 'border-slate-300 bg-white text-slate-600 hover:border-[#d99a22]'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-6 border-y border-slate-200 py-4">
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">Telusuri berdasarkan huruf</p>
        <div className="flex flex-wrap gap-1.5">
          {letters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setLetter(item)}
              aria-label={item === 'Semua' ? 'Tampilkan semua huruf' : `Tampilkan istilah berawalan ${item}`}
              className={`min-w-9 rounded-md border px-2.5 py-2 text-xs font-semibold transition ${
                letter === item
                  ? 'border-[#d99a22] bg-[#d99a22] text-white'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-[#d99a22]'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-500">
          Menampilkan {terms.length} dari {dictionaryTerms.length} istilah
        </p>
        {(query || category !== 'Semua' || letter !== 'Semua') && (
          <button
            type="button"
            onClick={() => {
              setQuery('')
              setCategory('Semua')
              setLetter('Semua')
            }}
            className="text-sm font-semibold text-[#b67910] hover:underline"
          >
            Hapus semua filter
          </button>
        )}
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {terms.map((item) => (
          <article key={item.term} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-[#c88916]">{item.category}</p>
            <h3 className="mt-3 text-xl font-semibold">{item.term}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{item.definition}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.related.map((related) => (
                <span key={related} className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] text-slate-500">{related}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      {!terms.length && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-8 text-center text-slate-500">
          Istilah belum ditemukan. Coba gunakan kata kunci, kategori, atau huruf lain.
        </div>
      )}
    </div>
  )
}
