'use client'

import { useMemo, useState } from 'react'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { ConsultingShell } from './site-shell'
import { PageHero, SectionHeading } from './shared'
import { ContactOrbit3D } from './three-d-visuals'
import { siteData } from '@/lib/site-data'

export default function ConsultingContactPage() {
  const [name, setName] = useState('')
  const [organization, setOrganization] = useState('')
  const [need, setNeed] = useState('Business & Organization Solutions')
  const [message, setMessage] = useState('')

  const whatsappUrl = useMemo(() => {
    const text = [
      'Halo Pak Yan, saya ingin mendiskusikan kebutuhan berikut:',
      `Nama: ${name || '-'}`,
      `Bisnis/Organisasi: ${organization || '-'}`,
      `Kebutuhan: ${need}`,
      `Pesan: ${message || '-'}`,
    ].join('\n')
    return `${siteData.whatsapp}?text=${encodeURIComponent(text)}`
  }, [message, name, need, organization])

  return (
    <ConsultingShell>
      <PageHero
        label="CONTACT"
        title="Mari Diskusikan Kebutuhan Anda"
        description="Ceritakan kondisi bisnis atau organisasi Anda. Percakapan awal membantu kita memahami kebutuhan dan menentukan langkah yang paling relevan."
        visual={<ContactOrbit3D />}
      />
      <section className="bg-[#fbfaf7] px-5 py-16 text-[#07182c] lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionHeading title="Hubungi Kami" description="Pilih cara yang paling nyaman untuk memulai percakapan." />
            <div className="mt-9 grid gap-4">
              {[
                [MessageCircle, 'WhatsApp', siteData.phoneDisplay, siteData.whatsapp],
                [Mail, 'Email', siteData.email, `mailto:${siteData.email}`],
                [Phone, 'Telepon', siteData.phoneDisplay, `tel:${siteData.phoneLink}`],
                [MapPin, 'Lokasi', 'Jakarta, Indonesia', '#'],
              ].map(([Icon, label, value, href]) => {
                const ContactIcon = Icon as typeof Mail
                return (
                  <a key={String(label)} href={String(href)} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:border-[#d99a22]">
                    <ContactIcon className="h-5 w-5 text-[#d99a22]" />
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">{String(label)}</span>
                      <span className="mt-1 block text-sm text-slate-700">{String(value)}</span>
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm lg:p-10">
            <h2 className="text-2xl font-semibold">Ceritakan Kebutuhan Anda</h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Formulir ini akan menyusun pesan dan membukanya di WhatsApp. Tidak ada data yang disimpan oleh website.
            </p>
            <div className="mt-8 grid gap-5">
              <label className="grid gap-2 text-sm text-slate-700">
                Nama
                <input value={name} onChange={(event) => setName(event.target.value)} className="rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#d99a22]" />
              </label>
              <label className="grid gap-2 text-sm text-slate-700">
                Nama Bisnis atau Organisasi
                <input value={organization} onChange={(event) => setOrganization(event.target.value)} className="rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#d99a22]" />
              </label>
              <label className="grid gap-2 text-sm text-slate-700">
                Kebutuhan
                <select value={need} onChange={(event) => setNeed(event.target.value)} className="rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#d99a22]">
                  <option>Business & Organization Solutions</option>
                  <option>Leadership & People Development</option>
                  <option>Website & Digital Solutions</option>
                  <option>Kebutuhan lainnya</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm text-slate-700">
                Pesan Singkat
                <textarea rows={5} value={message} onChange={(event) => setMessage(event.target.value)} className="resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#d99a22]" />
              </label>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-lg bg-[#d99a22] px-5 py-4 text-center text-sm font-bold text-white hover:bg-[#eba92e]">
                KIRIM MELALUI WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>
    </ConsultingShell>
  )
}
