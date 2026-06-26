export type DictionaryTerm = {
  term: string
  category: string
  definition: string
  related: string[]
}

export const dictionaryTerms: DictionaryTerm[] = [
  {
    term: 'Absensi',
    category: 'HR Operations',
    definition:
      'Pencatatan kehadiran, keterlambatan, izin, cuti, dan ketidakhadiran karyawan sebagai dasar administrasi serta evaluasi kedisiplinan.',
    related: ['Attendance', 'Leave', 'Payroll'],
  },
  {
    term: 'Active Listening',
    category: 'Leadership',
    definition:
      'Kemampuan mendengarkan dengan perhatian penuh untuk memahami pesan, emosi, dan kebutuhan yang disampaikan lawan bicara.',
    related: ['Coaching', 'Communication', 'Feedback'],
  },
  {
    term: 'Assessment',
    category: 'Talent Management',
    definition:
      'Proses terstruktur untuk mengukur kompetensi, potensi, perilaku, atau kesesuaian seseorang terhadap kebutuhan peran tertentu.',
    related: ['Competency', 'Recruitment', 'Talent Mapping'],
  },
  {
    term: 'Benefit',
    category: 'Compensation & Benefit',
    definition:
      'Imbalan selain gaji pokok yang diberikan organisasi, misalnya jaminan kesehatan, tunjangan, fasilitas, atau program kesejahteraan.',
    related: ['Compensation', 'Gross Salary', 'Total Reward'],
  },
  {
    term: 'Budaya Organisasi',
    category: 'Organization',
    definition:
      'Nilai, kebiasaan, norma, dan cara bekerja yang dianut bersama serta memengaruhi perilaku anggota organisasi.',
    related: ['Employee Experience', 'Organization Development', 'Values'],
  },
  {
    term: 'Career Path',
    category: 'Talent Management',
    definition:
      'Gambaran tahapan perkembangan jabatan atau keahlian yang dapat ditempuh seseorang di dalam organisasi.',
    related: ['Development Plan', 'Job Grading', 'Succession Planning'],
  },
  {
    term: 'Change Management',
    category: 'Organization',
    definition:
      'Pendekatan terencana untuk membantu organisasi dan manusia beralih dari kondisi saat ini menuju cara kerja yang baru.',
    related: ['Communication', 'Organization Development', 'Stakeholder'],
  },
  {
    term: 'Coaching',
    category: 'Learning & Development',
    definition:
      'Percakapan terarah yang membantu seseorang menggali pemikiran, menemukan pilihan, dan membangun komitmen tindakannya sendiri.',
    related: ['Active Listening', 'Mentoring', 'Open-Ended Question'],
  },
  {
    term: 'Compensation',
    category: 'Compensation & Benefit',
    definition:
      'Keseluruhan imbalan finansial yang diterima karyawan sebagai penghargaan atas kontribusi dan tanggung jawab pekerjaannya.',
    related: ['Benefit', 'Payroll', 'Salary Structure'],
  },
  {
    term: 'Competency',
    category: 'Talent Management',
    definition:
      'Gabungan pengetahuan, keterampilan, sikap, dan perilaku yang diperlukan untuk menghasilkan kinerja sesuai standar.',
    related: ['Assessment', 'Competency Mapping', 'Training Needs Analysis'],
  },
  {
    term: 'Competency Mapping',
    category: 'Talent Management',
    definition:
      'Proses memetakan kompetensi yang dibutuhkan suatu peran dan membandingkannya dengan kompetensi yang dimiliki individu.',
    related: ['Assessment', 'Competency', 'Development Plan'],
  },
  {
    term: 'Counseling',
    category: 'Learning & Development',
    definition:
      'Pendampingan untuk membantu seseorang memahami dan menangani persoalan yang memengaruhi kondisi atau pekerjaannya.',
    related: ['Active Listening', 'Coaching', 'Employee Assistance'],
  },
  {
    term: 'Delegation',
    category: 'Leadership',
    definition:
      'Pemberian tanggung jawab dan wewenang kepada anggota tim untuk menyelesaikan pekerjaan dengan batas serta hasil yang jelas.',
    related: ['Empowering Leadership', 'Accountability', 'Coaching'],
  },
  {
    term: 'Disciplinary Action',
    category: 'Employee Relations',
    definition:
      'Tindakan korektif yang diterapkan secara bertahap dan terdokumentasi ketika terjadi pelanggaran aturan atau standar perilaku kerja.',
    related: ['HR Policy', 'Grievance', 'Industrial Relations'],
  },
  {
    term: 'Diversity, Equity, and Inclusion',
    category: 'Human Capital',
    definition:
      'Prinsip membangun lingkungan kerja yang menghargai perbedaan, memberikan kesempatan yang adil, dan melibatkan setiap individu.',
    related: ['Culture', 'Employee Engagement', 'Workforce Diversity'],
  },
  {
    term: 'Effective Feedback',
    category: 'Performance',
    definition:
      'Umpan balik yang spesifik, seimbang, tepat waktu, dan diarahkan untuk memperkuat perilaku efektif atau mendorong perbaikan.',
    related: ['Coaching', 'Performance Management', 'Communication'],
  },
  {
    term: 'Employee Engagement',
    category: 'Human Capital',
    definition:
      'Tingkat keterikatan emosional, komitmen, dan kemauan karyawan untuk memberikan kontribusi terbaik bagi organisasi.',
    related: ['Employee Experience', 'Retention', 'Culture'],
  },
  {
    term: 'Employee Experience',
    category: 'Human Capital',
    definition:
      'Keseluruhan pengalaman karyawan saat berinteraksi dengan pekerjaan dan organisasi, sejak menjadi kandidat hingga meninggalkan perusahaan.',
    related: ['Employee Engagement', 'Onboarding', 'Exit Interview'],
  },
  {
    term: 'Employee Handbook',
    category: 'HR Operations',
    definition:
      'Panduan ringkas bagi karyawan yang menjelaskan kebijakan, tata tertib, fasilitas, serta ekspektasi perilaku di organisasi.',
    related: ['HR Policy', 'Induction', 'SOP'],
  },
  {
    term: 'Employee Retention',
    category: 'Human Capital',
    definition:
      'Kemampuan organisasi mempertahankan karyawan yang dibutuhkan melalui pengalaman kerja, kepemimpinan, dan penghargaan yang tepat.',
    related: ['Employee Engagement', 'Employee Turnover', 'Talent Management'],
  },
  {
    term: 'Employee Turnover',
    category: 'HR Analytics',
    definition:
      'Perbandingan jumlah karyawan yang keluar dengan rata-rata jumlah karyawan dalam periode tertentu.',
    related: ['Employee Retention', 'Exit Interview', 'Workforce Analytics'],
  },
  {
    term: 'Employer Branding',
    category: 'Recruitment',
    definition:
      'Citra dan reputasi organisasi sebagai tempat bekerja yang dibentuk melalui pengalaman karyawan serta komunikasi kepada kandidat.',
    related: ['Employee Experience', 'Recruitment', 'Talent Acquisition'],
  },
  {
    term: 'Empowering Leadership',
    category: 'Leadership',
    definition:
      'Pendekatan kepemimpinan yang memberi arah, kepercayaan, tantangan, dan ruang bagi anggota tim untuk bertanggung jawab serta menemukan solusi.',
    related: ['Coaching', 'Delegation', 'Self Leadership'],
  },
  {
    term: 'Exit Interview',
    category: 'Employee Relations',
    definition:
      'Wawancara dengan karyawan yang akan meninggalkan organisasi untuk memahami alasan keluar dan memperoleh masukan perbaikan.',
    related: ['Employee Turnover', 'Resignation', 'Retention'],
  },
  {
    term: 'Flexible Working Arrangement',
    category: 'HR Operations',
    definition:
      'Pengaturan kerja yang memberi fleksibilitas pada waktu, lokasi, atau pola kerja dengan tetap menjaga kebutuhan operasional.',
    related: ['Hybrid Work', 'Remote Work', 'Work-Life Balance'],
  },
  {
    term: 'Full-Time Equivalent (FTE)',
    category: 'Workforce Planning',
    definition:
      'Satuan untuk menyetarakan total jam kerja menjadi jumlah tenaga kerja penuh waktu yang dibutuhkan atau digunakan.',
    related: ['Manpower Planning', 'Workforce Planning', 'Workload Analysis'],
  },
  {
    term: 'Goal Setting',
    category: 'Performance',
    definition:
      'Proses menetapkan sasaran kerja yang jelas, terukur, relevan, dan memiliki batas waktu sebagai arah pelaksanaan pekerjaan.',
    related: ['Key Performance Indicator', 'Performance Management', 'Target'],
  },
  {
    term: 'Grievance',
    category: 'Employee Relations',
    definition:
      'Keluhan resmi karyawan mengenai kondisi kerja, perlakuan, kebijakan, atau keputusan yang dianggap merugikan atau tidak adil.',
    related: ['Disciplinary Action', 'HR Policy', 'Industrial Relations'],
  },
  {
    term: 'Gross Salary',
    category: 'Compensation & Benefit',
    definition:
      'Jumlah penghasilan kotor sebelum dikurangi pajak, iuran, potongan ketidakhadiran, atau potongan lain yang berlaku.',
    related: ['Net Salary', 'Payroll', 'Tax'],
  },
  {
    term: 'HR Analytics',
    category: 'HR Analytics',
    definition:
      'Penggunaan data tenaga kerja untuk menemukan pola, mengukur hasil, dan mendukung keputusan pengelolaan manusia.',
    related: ['Employee Turnover', 'HR Metric', 'Workforce Planning'],
  },
  {
    term: 'HR Audit',
    category: 'HR Governance',
    definition:
      'Pemeriksaan sistematis atas kebijakan, dokumen, proses, dan praktik HR untuk menilai kepatuhan serta efektivitasnya.',
    related: ['HR Compliance', 'HR Policy', 'SOP'],
  },
  {
    term: 'HR Compliance',
    category: 'HR Governance',
    definition:
      'Upaya memastikan kebijakan dan praktik ketenagakerjaan mengikuti peraturan, perjanjian, serta ketentuan internal yang berlaku.',
    related: ['HR Audit', 'Industrial Relations', 'HR Policy'],
  },
  {
    term: 'HR Information System (HRIS)',
    category: 'HR Technology',
    definition:
      'Sistem digital untuk menyimpan data karyawan dan mengelola proses HR seperti absensi, cuti, payroll, serta pelaporan.',
    related: ['HR Analytics', 'Payroll', 'Employee Self-Service'],
  },
  {
    term: 'HR Policy',
    category: 'HR Governance',
    definition:
      'Ketentuan tertulis yang menjadi pedoman organisasi dalam mengambil keputusan dan menjalankan praktik pengelolaan karyawan.',
    related: ['Employee Handbook', 'HR Compliance', 'SOP'],
  },
  {
    term: 'Human Capital',
    category: 'Human Capital',
    definition:
      'Pengetahuan, keterampilan, pengalaman, dan potensi manusia yang memberikan nilai bagi organisasi.',
    related: ['Human Resources', 'People Development', 'Talent Management'],
  },
  {
    term: 'Induction',
    category: 'HR Operations',
    definition:
      'Pengenalan awal mengenai organisasi, aturan, keselamatan, lingkungan kerja, dan informasi dasar bagi karyawan baru.',
    related: ['Employee Handbook', 'Onboarding', 'Orientation'],
  },
  {
    term: 'Industrial Relations',
    category: 'Employee Relations',
    definition:
      'Hubungan antara pengusaha, pekerja, serikat pekerja, dan pemerintah dalam pelaksanaan hak serta kewajiban ketenagakerjaan.',
    related: ['Collective Labor Agreement', 'Grievance', 'Labor Union'],
  },
  {
    term: 'Internship',
    category: 'Recruitment',
    definition:
      'Program pembelajaran kerja dalam jangka waktu tertentu yang memberi peserta pengalaman praktis dengan pendampingan.',
    related: ['Learning', 'Recruitment', 'Work Experience'],
  },
  {
    term: 'Job Analysis',
    category: 'Organization',
    definition:
      'Proses mengumpulkan dan mengkaji informasi tentang tujuan, tugas, tanggung jawab, serta kompetensi suatu pekerjaan.',
    related: ['Job Description', 'Job Evaluation', 'Workload Analysis'],
  },
  {
    term: 'Job Description',
    category: 'Organization',
    definition:
      'Dokumen yang menjelaskan tujuan jabatan, tugas utama, tanggung jawab, wewenang, hubungan kerja, dan persyaratan peran.',
    related: ['Job Analysis', 'Organization Design', 'Responsibility'],
  },
  {
    term: 'Job Evaluation',
    category: 'Organization',
    definition:
      'Proses menilai bobot relatif suatu jabatan berdasarkan tanggung jawab, kompleksitas, dampak, dan faktor pekerjaan lainnya.',
    related: ['Job Analysis', 'Job Grading', 'Salary Structure'],
  },
  {
    term: 'Job Grading',
    category: 'Compensation & Benefit',
    definition:
      'Pengelompokan jabatan ke dalam tingkatan berdasarkan hasil evaluasi untuk mendukung struktur karier dan remunerasi yang konsisten.',
    related: ['Career Path', 'Job Evaluation', 'Salary Structure'],
  },
  {
    term: 'Key Performance Indicator (KPI)',
    category: 'Performance',
    definition:
      'Ukuran utama yang digunakan untuk menilai kemajuan terhadap sasaran kerja atau tujuan organisasi.',
    related: ['Goal Setting', 'Performance Management', 'Target'],
  },
  {
    term: 'Knowledge Management',
    category: 'Learning & Development',
    definition:
      'Proses menangkap, menyimpan, membagikan, dan menggunakan pengetahuan agar tidak hilang serta dapat dimanfaatkan organisasi.',
    related: ['Learning', 'Mentoring', 'Succession Planning'],
  },
  {
    term: 'Labor Union',
    category: 'Employee Relations',
    definition:
      'Organisasi yang dibentuk oleh pekerja untuk mewakili dan memperjuangkan kepentingan anggotanya dalam hubungan industrial.',
    related: ['Collective Labor Agreement', 'Industrial Relations', 'Negotiation'],
  },
  {
    term: 'Leadership Development',
    category: 'Learning & Development',
    definition:
      'Program terencana untuk membangun kemampuan memimpin diri, orang lain, pekerjaan, dan perubahan organisasi.',
    related: ['Coaching', 'Empowering Leadership', 'Succession Planning'],
  },
  {
    term: 'Learning Management System (LMS)',
    category: 'HR Technology',
    definition:
      'Platform digital untuk mengelola materi, peserta, jadwal, penyelesaian, dan hasil program pembelajaran.',
    related: ['Learning', 'Training', 'HR Information System'],
  },
  {
    term: 'Manpower Planning',
    category: 'Workforce Planning',
    definition:
      'Perencanaan jumlah, jenis, waktu, dan penempatan tenaga kerja berdasarkan kebutuhan kegiatan serta kemampuan organisasi.',
    related: ['Full-Time Equivalent', 'Workforce Planning', 'Workload Analysis'],
  },
  {
    term: 'Mentoring',
    category: 'Learning & Development',
    definition:
      'Proses berbagi pengetahuan dan pengalaman dari mentor untuk mendukung perkembangan kemampuan seorang mentee.',
    related: ['Coaching', 'Knowledge Management', 'Mentee'],
  },
  {
    term: 'Minimum Wage',
    category: 'Compensation & Benefit',
    definition:
      'Batas upah minimum yang ditetapkan pemerintah dan berlaku sesuai wilayah atau sektor berdasarkan ketentuan yang berlaku.',
    related: ['Compensation', 'Payroll', 'Salary'],
  },
  {
    term: 'Net Salary',
    category: 'Compensation & Benefit',
    definition:
      'Penghasilan bersih yang diterima karyawan setelah gaji kotor dikurangi pajak, iuran, dan potongan yang sah.',
    related: ['Gross Salary', 'Payroll', 'Take-Home Pay'],
  },
  {
    term: 'Notice Period',
    category: 'Employee Relations',
    definition:
      'Jangka waktu pemberitahuan sebelum hubungan kerja diakhiri sesuai perjanjian kerja, kebijakan, atau ketentuan yang berlaku.',
    related: ['Resignation', 'Termination', 'Employment Contract'],
  },
  {
    term: 'Onboarding',
    category: 'HR Operations',
    definition:
      'Proses terencana untuk membantu karyawan baru memahami pekerjaan, budaya, sistem, dan lingkungan organisasinya.',
    related: ['Employee Experience', 'Induction', 'Probation'],
  },
  {
    term: 'Organization Design',
    category: 'Organization',
    definition:
      'Proses menyusun struktur, peran, hubungan pelaporan, dan mekanisme koordinasi agar strategi dapat dijalankan dengan efektif.',
    related: ['Job Description', 'Organization Development', 'Span of Control'],
  },
  {
    term: 'Organization Development',
    category: 'Organization',
    definition:
      'Upaya terencana untuk meningkatkan efektivitas organisasi melalui pengembangan struktur, proses, budaya, dan manusia.',
    related: ['Change Management', 'Organization Design', 'Culture'],
  },
  {
    term: 'Payroll',
    category: 'HR Operations',
    definition:
      'Proses menghitung dan membayarkan penghasilan karyawan beserta pajak, iuran, tunjangan, dan potongan terkait.',
    related: ['Gross Salary', 'HR Information System', 'Net Salary'],
  },
  {
    term: 'Performance Appraisal',
    category: 'Performance',
    definition:
      'Penilaian berkala untuk membandingkan hasil dan perilaku kerja karyawan dengan sasaran atau standar yang ditetapkan.',
    related: ['Effective Feedback', 'Key Performance Indicator', 'Performance Management'],
  },
  {
    term: 'Performance Management',
    category: 'Performance',
    definition:
      'Siklus penetapan sasaran, pemantauan, umpan balik, evaluasi, dan pengembangan untuk meningkatkan kinerja individu serta organisasi.',
    related: ['Goal Setting', 'Performance Appraisal', 'Key Performance Indicator'],
  },
  {
    term: 'Perjanjian Kerja Waktu Tertentu (PKWT)',
    category: 'Employee Relations',
    definition:
      'Perjanjian kerja untuk jangka waktu atau pekerjaan tertentu yang pelaksanaannya harus mengikuti ketentuan ketenagakerjaan yang berlaku.',
    related: ['Employment Contract', 'Notice Period', 'PKWTT'],
  },
  {
    term: 'Perjanjian Kerja Waktu Tidak Tertentu (PKWTT)',
    category: 'Employee Relations',
    definition:
      'Perjanjian kerja yang tidak dibatasi jangka waktu tertentu dan mengatur hubungan kerja tetap sesuai ketentuan yang berlaku.',
    related: ['Employment Contract', 'PKWT', 'Probation'],
  },
  {
    term: 'Probation',
    category: 'HR Operations',
    definition:
      'Masa awal untuk menilai kesesuaian dan kinerja karyawan pada hubungan kerja yang memperbolehkan penerapannya menurut aturan.',
    related: ['Onboarding', 'Performance Appraisal', 'PKWTT'],
  },
  {
    term: 'Recruitment',
    category: 'Recruitment',
    definition:
      'Proses menarik, menyaring, menilai, dan memilih kandidat yang sesuai dengan kebutuhan pekerjaan serta organisasi.',
    related: ['Assessment', 'Employer Branding', 'Talent Acquisition'],
  },
  {
    term: 'Resignation',
    category: 'Employee Relations',
    definition:
      'Pengakhiran hubungan kerja atas permintaan karyawan melalui pemberitahuan dan proses administrasi sesuai ketentuan.',
    related: ['Exit Interview', 'Notice Period', 'Offboarding'],
  },
  {
    term: 'Reward and Recognition',
    category: 'Compensation & Benefit',
    definition:
      'Penghargaan finansial atau nonfinansial untuk mengakui kontribusi, perilaku, pencapaian, atau dampak positif karyawan.',
    related: ['Benefit', 'Employee Engagement', 'Performance'],
  },
  {
    term: 'Self Leadership',
    category: 'Leadership',
    definition:
      'Kemampuan mengelola pikiran, emosi, ucapan, dan tindakan diri sebelum memengaruhi atau memimpin orang lain.',
    related: ['Empowering Leadership', 'Integrity', 'Self-Growth'],
  },
  {
    term: 'Situational Leadership',
    category: 'Leadership',
    definition:
      'Pendekatan kepemimpinan yang menyesuaikan cara memimpin dengan tingkat kemampuan dan motivasi anggota tim.',
    related: ['Coaching', 'Directing', 'Supporting'],
  },
  {
    term: 'Standard Operating Procedure (SOP)',
    category: 'HR Governance',
    definition:
      'Instruksi tertulis yang menjelaskan urutan, tanggung jawab, standar, dan kontrol dalam menjalankan suatu proses kerja.',
    related: ['HR Audit', 'HR Policy', 'Workflow'],
  },
  {
    term: 'Succession Planning',
    category: 'Talent Management',
    definition:
      'Proses menyiapkan kandidat penerus untuk posisi penting agar kesinambungan kepemimpinan dan operasi tetap terjaga.',
    related: ['Career Path', 'Leadership Development', 'Talent Management'],
  },
  {
    term: 'Talent Acquisition',
    category: 'Recruitment',
    definition:
      'Pendekatan strategis dan jangka panjang untuk menemukan, menarik, serta membangun sumber kandidat yang dibutuhkan organisasi.',
    related: ['Employer Branding', 'Recruitment', 'Workforce Planning'],
  },
  {
    term: 'Talent Management',
    category: 'Talent Management',
    definition:
      'Sistem terpadu untuk menarik, mengembangkan, menempatkan, mempertahankan, dan menyiapkan talenta bagi kebutuhan organisasi.',
    related: ['Employee Retention', 'Succession Planning', 'Talent Acquisition'],
  },
  {
    term: 'Training Needs Analysis (TNA)',
    category: 'Learning & Development',
    definition:
      'Proses mengidentifikasi kesenjangan kompetensi dan menentukan kebutuhan pembelajaran berdasarkan tuntutan organisasi, pekerjaan, dan individu.',
    related: ['Competency Mapping', 'Learning', 'Training'],
  },
  {
    term: 'Tunjangan Hari Raya (THR)',
    category: 'Compensation & Benefit',
    definition:
      'Pendapatan non-upah yang wajib diberikan menjelang hari raya keagamaan sesuai syarat dan ketentuan ketenagakerjaan yang berlaku.',
    related: ['Benefit', 'Payroll', 'Religious Holiday Allowance'],
  },
  {
    term: 'Work-Life Balance',
    category: 'Human Capital',
    definition:
      'Kondisi ketika tuntutan pekerjaan dan kehidupan pribadi dapat dikelola secara sehat tanpa mengorbankan fungsi penting keduanya.',
    related: ['Employee Experience', 'Flexible Working Arrangement', 'Wellbeing'],
  },
  {
    term: 'Workforce Diversity',
    category: 'Human Capital',
    definition:
      'Keberagaman karakteristik, latar belakang, pengalaman, cara berpikir, dan kemampuan yang terdapat dalam tenaga kerja.',
    related: ['Diversity, Equity, and Inclusion', 'Culture', 'Employee Engagement'],
  },
  {
    term: 'Workforce Planning',
    category: 'Workforce Planning',
    definition:
      'Proses memperkirakan kebutuhan tenaga kerja masa depan dan menyiapkan strategi untuk menutup kesenjangan jumlah maupun kompetensi.',
    related: ['HR Analytics', 'Manpower Planning', 'Talent Acquisition'],
  },
  {
    term: 'Workload Analysis',
    category: 'Workforce Planning',
    definition:
      'Pengukuran volume dan waktu pekerjaan untuk menilai kapasitas, pembagian tugas, serta kebutuhan jumlah tenaga kerja.',
    related: ['Full-Time Equivalent', 'Job Analysis', 'Manpower Planning'],
  },
]
