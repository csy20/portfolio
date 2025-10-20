'use client'

import Image from 'next/image'
import Link from 'next/link'

import { resumeUrl } from '@/data/siteContent'
import { ThemeToggle } from './ThemeToggle'

export function Hero() {
  return (
    <div className="min-h-screen w-full relative" style={{ background: 'var(--background)' }}>
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-40 transition-opacity duration-500"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 80%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)
            `,
          }}
        />
      </div>
      <HeroContent />
    </div>
  )
}

function HeroContent() {
  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pb-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="flex-shrink-0 order-1 lg:order-2">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full animate-pulse" />
            <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full overflow-hidden">
              <Image
                src="/pfp.jpeg"
                alt="Portrait of Chitresh Yadav"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex-1 text-center lg:text-left order-2 lg:order-1 space-y-6">
          <div className="absolute top-4 right-4 lg:top-8 lg:right-8">
            <ThemeToggle />
          </div>

          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400">
              Flutter • Dart • Firebase
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white">
              Hi, I&apos;m Chitresh Yadav (~csy)
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600 dark:text-blue-400">
              Building immersive mobile experiences with Flutter
            </h2>
          </div>

          <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            <p>
              I craft production-ready Flutter apps with a focus on performance, accessibility,
              and polished interaction design. My workflow blends design systems, strong typing,
              and CI/CD automation to keep teams shipping with confidence.
            </p>

            <p>
              Recently, I&apos;ve been experimenting with background isolates, adaptive layouts, and
              integrating AI-assisted workflows into design handoffs. I love collaborating with
              teams that value thoughtful UX and reliable delivery.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-4 pt-4">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3a1 1 0 011 1v8.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L11 12.586V4a1 1 0 011-1z" />
                <path d="M5 15a1 1 0 011 1v2h12v-2a1 1 0 112 0v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3a1 1 0 012 0v2h12v-2a1 1 0 011-1z" />
              </svg>
              Download Résumé
            </a>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 font-semibold transition-colors"
            >
              Let&apos;s Collaborate
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M12.293 3.293a1 1 0 011.414 0L18 7.586a1 1 0 010 1.414l-4.293 4.293a1 1 0 01-1.414-1.414L14.586 9H4a1 1 0 110-2h10.586l-2.293-2.293a1 1 0 010-1.414z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
