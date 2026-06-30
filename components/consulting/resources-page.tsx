import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, GraduationCap, Info, Laptop, Search } from 'lucide-react'
import { ConsultingShell } from './site-shell'
import { ConsultationCta, PageHero } from './shared'
import { ResourcesHero3D } from './three-d-visuals'
import { leadershipInsights } from '@/lib/site-data'

const insightCards = [
  ['/consulting/insight-organization.png', 'ORGANIZATION', 'Cara Menyusun Struktur Organisasi untuk Bisnis yang Berkembang', 'Panduan praktis menyusun struktur organisasi agar lebih jelas, efektif, dan siap mendukung pertumbuhan bisnis.'],
  ['/consulting/insight-process.png', 'PROCESS', 'Kapan Bisnis Membutuhkan SOP?', 'Memahami manfaat SOP, waktu yang tepat menerapkannya, dan langkah awal untuk membuatnya.'],
  ['/consulting/insight-digital.png', 'DIGITAL SOLUTIONS', 'Hal yang Perlu Disiapkan Sebelum Membuat Website Bisnis', 'Checklist penting sebelum membuat website agar proses lebih terarah dan hasilnya sesuai kebutuhan.'],
]

export default function ConsultingResourcesPage() {
  return (
    <ConsultingShell>
      <PageHero
        label="RESOURCES"
        title="Sumber Daya Praktis untuk Bisnis, Organisasi, dan Pemimpin"
        description="Temukan wawasan pilihan untuk membantu Anda memahami pengelolaan bisnis, pengembangan manusia, kepemimpinan, dan solusi digital."
        visual={<ResourcesHero3D />}
      />

      <section id="insights" className="scroll-mt-24 bg-[radial-gradient(circle_at_50%_20%,#0b3554_0%,#06172a_72%)] px-5 py-10 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.28fr]">
          <div>
            <h2 className="text-2xl font-bold">Empowering Leadership Insights</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/75">Cuplikan wawasan untuk membantu pemimpin membangun tim yang mandiri, bertanggung jawab, dan mampu memberikan kinerja terbaik.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {leadershipInsights.map((insight, index) => {
                const icons = [GraduationCap, Laptop, BookOpen, Search]
                const Icon = icons[index]
                return (
                  <article key={insight.slug} className="overflow-hidden rounded-md bg-[#fbfaf7] text-[#07182c]">
                    <div className="relative flex h-28 items-center justify-center overflow-hidden bg-[#f1eee6]">
                      {index === 0 ? (
                        <Image src="/consulting/yan-leadership-training.png" alt="Yan Firdaus membawakan pelatihan leadership" fill className="object-cover" />
                      ) : index === 1 ? (
                        <Image src="/consulting/yan-professional-speaking.png" alt="Yan Firdaus berbicara dalam kegiatan profesional" fill className="object-cover object-center" />
                      ) : (
                        <Icon className="h-16 w-16 text-[#0b3554]" />
                      )}
                    </div>
                    <div className="p-3">
                      <span className="rounded bg-[#07182c] px-2 py-1 text-[9px] font-bold text-white">{insight.category}</span>
                      <h3 className="mt-3 min-h-16 text-xs font-bold leading-5">{insight.title}</h3>
                      <Link href={insight.pdf} target="_blank" className="mt-2 flex items-center justify-between rounded border border-[#d99a22] px-3 py-2 text-[10px] font-bold text-[#c88916] transition hover:bg-[#d99a22] hover:text-white">
                        BACA INSIGHT <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
          <aside className="border-l border-white/30 pl-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d99a22] text-[#d99a22]"><GraduationCap className="h-8 w-8" /></div>
            <h3 className="mt-5 text-xl font-bold">Materi Pembelajaran Terpilih</h3>
            <p className="mt-4 text-sm leading-6 text-white/75">Insights menampilkan sebagian konsep untuk tujuan edukasi. Modul lengkap, studi kasus, latihan, model percakapan, dan worksheet tersedia secara eksklusif dalam program pelatihan.</p>
            <Link href="/services#leadership-people" className="mt-5 inline-flex rounded border border-[#d99a22] px-4 py-2.5 text-xs font-bold text-[#e1a126]">LIHAT PROGRAM TRAINING</Link>
          </aside>
        </div>
      </section>

      <section className="bg-[#fbfaf7] px-5 pb-8 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {insightCards.map(([image, category, title, description]) => (
            <article key={title} className="overflow-hidden rounded-md border border-slate-200 bg-white">
              <div className="relative h-36"><Image src={image} alt="" fill className="object-cover" /></div>
              <div className="p-5"><p className="text-[10px] font-bold text-[#c88916]">{category}</p><h3 className="mt-2 text-lg font-bold leading-6">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-600">{description}</p><span className="mt-4 inline-flex items-center gap-8 rounded border border-[#d99a22] px-4 py-2 text-[10px] font-bold text-[#c88916]">BACA ARTIKEL <ArrowRight className="h-3 w-3" /></span></div>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-8 flex max-w-7xl items-center gap-5 rounded-xl bg-[#f1eee6] px-7 py-5">
          <Info className="h-12 w-12 shrink-0 text-[#07182c]" />
          <div><h3 className="font-bold">Informasi yang Bertanggung Jawab</h3><p className="mt-1 text-xs leading-5 text-slate-700">Konten disediakan sebagai referensi umum. Untuk keputusan pajak, hukum, dan ketenagakerjaan, gunakan sumber resmi atau konsultasikan dengan tenaga profesional yang sesuai.</p></div>
        </div>
      </section>

      <ConsultationCta title="Ingin Membawa Empowering Leadership ke Organisasi Anda?" description="Diskusikan kebutuhan program leadership, coaching, mentoring, dan pengembangan tim yang sesuai dengan kondisi organisasi Anda." button="DISKUSIKAN PROGRAM TRAINING" />
    </ConsultingShell>
  )
}
