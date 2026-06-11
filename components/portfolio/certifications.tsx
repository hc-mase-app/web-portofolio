'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Award,
  ExternalLink,
  Eye,
  FileCheck2,
  LockKeyhole,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { portfolioData } from '@/lib/portfolio-data'

type Certification = (typeof portfolioData.certifications)[number]

const formatIssueDate = (issueDate: string) =>
  new Intl.DateTimeFormat('en', {
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${issueDate}T00:00:00`))

const Certifications = () => {
  const [selectedCertification, setSelectedCertification] =
    useState<Certification | null>(null)

  const sortedCertifications = useMemo(
    () =>
      [...portfolioData.certifications].sort(
        (a, b) =>
          new Date(`${b.issueDate}T00:00:00`).getTime() -
          new Date(`${a.issueDate}T00:00:00`).getTime(),
      ),
    [],
  )

  return (
    <section className="relative overflow-hidden bg-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300">
            <Award className="h-4 w-4" />
            Continuous professional development
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            CERTIFICATIONS
          </h2>
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-orange-500" />
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Professional credentials and continuous development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-card/65 shadow-2xl backdrop-blur-xl"
        >
          <div className="border-b border-white/10 px-5 py-4 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-400">
                Credential Library
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Ordered by issue date, newest first
              </p>
            </div>
            <span className="mt-2 block text-sm text-muted-foreground sm:mt-0">
              {sortedCertifications.length} credentials
            </span>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[840px]">
              <div className="grid grid-cols-[minmax(300px,1.45fr)_minmax(250px,1.15fr)_150px_180px] border-b border-white/10 bg-[#111]/95 px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-foreground/65">
                <span>Certificate Name</span>
                <span>Issuing Body</span>
                <span className="text-center">Date</span>
                <span className="text-right">View Credential</span>
              </div>

              <div className="credential-scrollbar max-h-[590px] overflow-y-auto">
                {sortedCertifications.map((certification, index) => {
                  const privacyProtected =
                    'privacyProtected' in certification &&
                    certification.privacyProtected

                  return (
                    <motion.div
                      key={certification.id}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.3) }}
                      className="grid min-h-[82px] grid-cols-[minmax(300px,1.45fr)_minmax(250px,1.15fr)_150px_180px] items-center border-b border-white/[0.07] px-6 py-4 transition-colors last:border-b-0 odd:bg-white/[0.012] hover:bg-orange-500/[0.045]"
                    >
                      <div className="flex min-w-0 items-center gap-3 pr-6">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-orange-500/20 bg-orange-500/10 text-orange-400">
                          <FileCheck2 className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold leading-snug text-foreground">
                            {certification.title}
                          </p>
                          {privacyProtected && (
                            <span className="mt-1 inline-flex items-center gap-1 text-xs text-sky-300">
                              <LockKeyhole className="h-3 w-3" />
                              Privacy protected
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="pr-6 text-sm leading-relaxed text-muted-foreground">
                        {certification.issuer}
                      </p>

                      <time
                        dateTime={certification.issueDate}
                        className="text-center text-sm font-medium text-foreground/75"
                      >
                        {formatIssueDate(certification.issueDate)}
                      </time>

                      <div className="flex justify-end">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setSelectedCertification(certification)}
                          className="border-orange-500/35 bg-orange-500/5 text-orange-300 hover:border-orange-500 hover:bg-orange-500 hover:text-black"
                        >
                          <Eye className="h-4 w-4" />
                          View Credential
                        </Button>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Dialog
        open={Boolean(selectedCertification)}
        onOpenChange={(open) => !open && setSelectedCertification(null)}
      >
        {selectedCertification && (
          <DialogContent className="max-h-[92vh] w-[calc(100%-1rem)] max-w-[calc(100%-1rem)] overflow-hidden border-white/10 bg-[#090909]/95 p-0 shadow-2xl backdrop-blur-2xl sm:max-w-5xl">
            <DialogHeader className="border-b border-white/10 px-6 py-5 pr-14">
              <DialogTitle className="text-xl leading-snug text-foreground">
                {selectedCertification.title}
              </DialogTitle>
              <DialogDescription className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>{selectedCertification.issuer}</span>
                <span aria-hidden="true">/</span>
                <span>{formatIssueDate(selectedCertification.issueDate)}</span>
              </DialogDescription>
            </DialogHeader>

            <div className="overflow-y-auto px-4 py-5 sm:px-6">
              <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/95 p-3 sm:min-h-[520px]">
                <Image
                  src={selectedCertification.preview}
                  alt={`${selectedCertification.title} credential preview`}
                  width={1600}
                  height={1200}
                  className="max-h-[62vh] w-auto max-w-full object-contain"
                  priority
                />
              </div>

              {'privacyProtected' in selectedCertification &&
                selectedCertification.privacyProtected && (
                  <div className="mt-4 flex items-start gap-3 rounded-xl border border-sky-500/20 bg-sky-500/10 p-4 text-sm text-sky-100">
                    <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
                    <p>
                      Personal birth details have been concealed. The original
                      document is intentionally not published.
                    </p>
                  </div>
                )}
            </div>

            <DialogFooter className="border-t border-white/10 px-6 py-4">
              <DialogClose asChild>
                <Button variant="ghost">Close</Button>
              </DialogClose>

              {'verificationUrl' in selectedCertification &&
                selectedCertification.verificationUrl && (
                  <Button asChild variant="outline">
                    <a
                      href={selectedCertification.verificationUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Verify Online
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}

              {'pdf' in selectedCertification && selectedCertification.pdf && (
                <Button asChild>
                  <a
                    href={selectedCertification.pdf}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Full Size
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </section>
  )
}

export default Certifications
