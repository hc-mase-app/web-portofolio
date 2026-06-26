import DictionaryBrowser from './dictionary'
import { ConsultingShell } from './site-shell'
import { ConsultationCta, PageHero } from './shared'

export default function DictionaryPage() {
  return (
    <ConsultingShell>
      <PageHero
        label="KAMUS HR"
        title="Temukan Istilah HR dengan Mudah"
        description="Kamus HR YM-ID untuk membantu memahami istilah Human Resources, organisasi, kepemimpinan, dan people development dalam bahasa yang sederhana."
      />
      <section className="bg-[#fbfaf7] px-5 py-16 text-[#07182c] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <DictionaryBrowser />
          <aside className="mt-10 rounded-xl border border-[#d99a22]/30 bg-[#d99a22]/5 p-5 text-sm leading-6 text-slate-600">
            <strong className="text-[#07182c]">Catatan:</strong> Kamus ini merupakan referensi edukasi umum.
            Untuk keputusan terkait hukum ketenagakerjaan, upah, pajak, atau hubungan industrial, selalu periksa
            peraturan terbaru dan konsultasikan dengan tenaga profesional yang sesuai.
          </aside>
        </div>
      </section>
      <ConsultationCta
        title="Ada Istilah atau Tantangan yang Perlu Dibahas?"
        description="Gunakan kamus sebagai referensi awal, lalu diskusikan penerapannya sesuai kebutuhan organisasi Anda."
      />
    </ConsultingShell>
  )
}
