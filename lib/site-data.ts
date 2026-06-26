import {
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  Code2,
  Compass,
  GraduationCap,
  Handshake,
  Laptop,
  Lightbulb,
  MessageCircle,
  Network,
  Search,
  Users,
} from 'lucide-react'

export const siteData = {
  brand: 'YM-ID',
  descriptor: 'Business, People & Digital Solutions',
  email: 'yan@ym-id.com',
  phoneDisplay: '+62 817-393-994',
  phoneLink: '+62817393994',
  whatsapp: 'https://wa.me/62817393994',
  linkedin: 'https://linkedin.com/in/yanfirdaus',
  taxCalculator: '/resources/salary-tax-calculator',
}

export const services = [
  {
    slug: 'business-organization',
    title: 'Business & Organization Solutions',
    description:
      'Membantu bisnis dan organisasi membangun struktur, proses, dan sistem kerja yang lebih jelas dan efektif.',
    icon: Building2,
    items: [
      'Struktur organisasi',
      'Job description dan pembagian tanggung jawab',
      'SOP dan alur kerja',
      'Evaluasi proses bisnis',
      'Sistem pengelolaan karyawan',
      'Pendampingan pengembangan organisasi',
    ],
  },
  {
    slug: 'leadership-people',
    title: 'Leadership & People Development',
    description:
      'Mengembangkan kemampuan pemimpin dan tim agar mampu bekerja, berkomunikasi, dan bertumbuh secara lebih efektif.',
    icon: GraduationCap,
    items: [
      'Empowering Leadership Program',
      'Coaching and Counseling',
      'Supervisory Development',
      'Communication Skills',
      'Team Development',
      'Performance Management',
    ],
  },
  {
    slug: 'recruitment-talent',
    title: 'Recruitment & Talent Solutions',
    description:
      'Membantu perusahaan menemukan kandidat terbaik untuk posisi strategis maupun operasional melalui proses sourcing, screening, assessment, dan executive search.',
    icon: ClipboardCheck,
    ctaLabel: 'REQUEST TALENT',
    ctaHref: '/services/recruitment-executive-search',
    itemColumns: [
      ['Executive Search', 'Recruitment Support', 'Talent Mapping'],
      ['Candidate Assessment', 'Talent Acquisition Portal', 'Recruitment Process Outsourcing'],
    ],
    items: [
      'Executive Search',
      'Recruitment Support',
      'Talent Mapping',
      'Candidate Assessment',
      'Talent Acquisition Portal',
      'Recruitment Process Outsourcing',
    ],
  },
  {
    slug: 'website-digital',
    title: 'Website & Digital Solutions',
    description:
      'Membantu bisnis membangun kehadiran digital profesional dan menyederhanakan proses kerja melalui teknologi.',
    icon: Laptop,
    items: [
      'Company Profile Website',
      'Professional Portfolio Website',
      'Consulting and Service Website',
      'Landing Page',
      'Website Maintenance',
      'Digital form dan workflow sederhana',
    ],
  },
]

export const principles = [
  {
    title: 'Practical',
    description: 'Solusi mudah dipahami dan dapat diterapkan.',
    icon: Compass,
  },
  {
    title: 'Relevant',
    description: 'Pendekatan disesuaikan dengan kebutuhan nyata.',
    icon: Lightbulb,
  },
  {
    title: 'Sustainable',
    description: 'Fondasi dirancang agar dapat terus dikembangkan.',
    icon: Network,
  },
]

export const workSteps = [
  {
    number: '01',
    title: 'Memahami',
    description: 'Mendengarkan kebutuhan dan tantangan.',
    icon: MessageCircle,
  },
  {
    number: '02',
    title: 'Menganalisis',
    description: 'Menentukan akar masalah dan prioritas.',
    icon: Search,
  },
  {
    number: '03',
    title: 'Mengembangkan',
    description: 'Menyusun solusi yang relevan.',
    icon: BriefcaseBusiness,
  },
  {
    number: '04',
    title: 'Mendampingi',
    description: 'Membantu penerapan dan evaluasi.',
    icon: Handshake,
  },
]

export const expertise = [
  { label: 'Organization Development', icon: Building2 },
  { label: 'Leadership Development', icon: Users },
  { label: 'Human Capital', icon: BriefcaseBusiness },
  { label: 'Digital Solutions', icon: Code2 },
]

export const leadershipInsights = [
  {
    slug: 'super-leader-vs-empowering-leader',
    title: 'Super Leader vs Empowering Leader',
    category: 'Leadership',
    pdf: '/resources/insights/super-leader-vs-empowering-leader.pdf',
    summary:
      'Memahami perbedaan pemimpin yang menjadi pusat semua keputusan dengan pemimpin yang membangun kemandirian tim.',
  },
  {
    slug: 'empat-pendekatan-situational-leadership',
    title: 'Empat Pendekatan dalam Situational Leadership',
    category: 'People Development',
    pdf: '/resources/insights/empat-pendekatan-situational-leadership.pdf',
    summary:
      'Kapan seorang pemimpin perlu mengarahkan, mengajarkan, memotivasi, atau menggali potensi anggota tim.',
  },
  {
    slug: 'membangun-trust-sebelum-coaching',
    title: 'Membangun Trust Sebelum Melakukan Coaching',
    category: 'Coaching',
    pdf: '/resources/insights/membangun-trust-sebelum-melakukan-coaching.pdf',
    summary:
      'Percakapan coaching yang bermakna dimulai dari rasa aman, keterbukaan, dan hubungan profesional yang sehat.',
  },
  {
    slug: 'feedback-yang-mendorong-perubahan',
    title: 'Memberikan Feedback yang Mendorong Perubahan',
    category: 'Leadership',
    pdf: '/resources/insights/memberikan-feedback-yang-mendorong-perubahan.pdf',
    summary:
      'Feedback yang efektif berfokus pada perilaku, dampak, dan langkah perbaikan, bukan pada penilaian pribadi.',
  },
]

export const generalInsights = [
  {
    title: 'Cara Menyusun Struktur Organisasi untuk Bisnis yang Berkembang',
    category: 'Organization',
  },
  {
    title: 'Kapan Bisnis Membutuhkan SOP?',
    category: 'Business',
  },
  {
    title: 'Hal yang Perlu Disiapkan Sebelum Membuat Website Bisnis',
    category: 'Digital',
  },
]
