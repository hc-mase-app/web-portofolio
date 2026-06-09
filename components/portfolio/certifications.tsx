'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Award,
  CalendarDays,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Eye,
  FileCheck2,
  LockKeyhole,
  ShieldCheck,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
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

type CredentialStatus = {
  label: 'Active' | 'Expired' | 'Expires Soon' | 'Verified'
  className: string
  icon: typeof CheckCircle2
}

const getCredentialStatus = (certification: Certification): CredentialStatus => {
  if (!('expiresAt' in certification) || !certification.expiresAt) {
    return {
      label: 'Verified',
      className: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
      icon: ShieldCheck,
    }
  }

  const today = new Date()
  const expiryDate = new Date(`${certification.expiresAt}T23:59:59`)
  const daysRemaining = Math.ceil(
    (expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
  )

  if (daysRemaining < 0) {
    return {
      label: 'Expired',
      className: 'border-red-500/30 bg-red-500/10 text-red-300',
      icon: Clock3,
    }
  }

  if (daysRemaining <= 180) {
    return {
      label: 'Expires Soon',
      className: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
      icon: Clock3,
    }
  }

  return {
    label: 'Active',
    className: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    icon: CheckCircle2,
  }
}

const formatExpiryDate = (expiresAt: string) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(`${expiresAt}T00:00:00`))

const Certifications = () => {
  const [selectedCertification, setSelectedCertification] =
    useState<Certification | null>(null)

  const featuredCertifications = useMemo(
    () =>
      portfolioData.certifications
        .filter((certification) => 'featured' in certification && certification.featured)
        .slice(0, 4),
    [],
  )

  const activeCredentials = portfolioData.certifications.filter((certification) => {
    const status = getCredentialStatus(certification)
    return status.label === 'Active' || status.label === 'Verified'
  }).length

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
          className="mx-auto mb-14 max-w-3xl text-center"
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
            Professional credentials across human capital, leadership, mining
            operations, safety, communication, and digital capability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {featuredCertifications.map((certification) => (
            <button
              key={certification.id}
              type="button"
              onClick={() => setSelectedCertification(certification)}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5 text-left backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_16px_50px_rgba(249,115,22,0.12)]"
            >
              <div className="mb-5 flex items-start justify-between gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400 transition-colors group-hover:bg-orange-500 group-hover:text-black">
                  <FileCheck2 className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold text-orange-400">
                  {certification.year}
                </span>
              </div>
              <h3 className="mb-2 line-clamp-2 text-base font-semibold leading-snug text-foreground">
                {certification.title}
              </h3>
              <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                {certification.issuer}
              </p>
            </button>
          ))}
        </motion.div>

        <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-orange-400">
              Credential Library
            </p>
            <h3 className="text-2xl font-bold text-foreground">
              Verified learning and qualifications
            </h3>
          </div>
          <div className="flex gap-3 text-sm text-muted-foreground">
            <span>{portfolioData.certifications.length} credentials</span>
            <span aria-hidden="true">/</span>
            <span>{activeCredentials} active or verified</span>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.06 },
            },
          }}
          className="grid gap-4 lg:grid-cols-2"
        >
          {portfolioData.certifications.map((certification) => {
            const status = getCredentialStatus(certification)
            const StatusIcon = status.icon
            const privacyProtected =
              'privacyProtected' in certification && certification.privacyProtected

            return (
              <motion.article
                key={certification.id}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.45 }}
                className="group flex flex-col justify-between gap-5 rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-orange-500/35 hover:bg-card/90 sm:flex-row sm:items-center"
              >
                <div className="min-w-0 flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <Badge
                      variant="outline"
                      className="border-orange-500/25 bg-orange-500/10 text-orange-300"
                    >
                      {certification.category}
                    </Badge>
                    <Badge variant="outline" className={status.className}>
                      <StatusIcon className="h-3 w-3" />
                      {status.label}
                    </Badge>
                    {privacyProtected && (
                      <Badge
                        variant="outline"
                        className="border-sky-500/30 bg-sky-500/10 text-sky-300"
                      >
                        <LockKeyhole className="h-3 w-3" />
                        Privacy Protected
                      </Badge>
                    )}
                  </div>

                  <h4 className="mb-1 text-lg font-semibold leading-snug text-foreground">
                    {certification.title}
                  </h4>
                  <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                    {certification.issuer}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-foreground/60">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5 text-orange-400" />
                      Issued {certification.year}
                    </span>
                    {'expiresAt' in certification && certification.expiresAt && (
                      <span>Valid until {formatExpiryDate(certification.expiresAt)}</span>
                    )}
                    {'credentialId' in certification && certification.credentialId && (
                      <span>ID: {certification.credentialId}</span>
                    )}
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setSelectedCertification(certification)}
                  className="shrink-0 border-orange-500/35 bg-orange-500/5 text-orange-300 hover:border-orange-500 hover:bg-orange-500 hover:text-black"
                >
                  <Eye className="h-4 w-4" />
                  View Credential
                </Button>
              </motion.article>
            )
          })}
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
                <span>{selectedCertification.year}</span>
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
