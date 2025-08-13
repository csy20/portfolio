'use client'

import Image from 'next/image'
import { ThemeToggle } from './ThemeToggle'

export function Hero() {
  return (
    <div className="min-h-screen w-full relative" style={{ background: 'var(--background)' }}>
      {/* Enhanced atmospheric gradients */}
      <div className="absolute inset-0 z-0">
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
        {/* Profile Image - Shows first on mobile */}
        <div className="flex-shrink-0 order-1 lg:order-2">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full overflow-hidden">
              <Image
                src="/pfp.jpeg"
                alt="CSY - Chitresh Yadav"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Content - Shows second on mobile */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          <div className="absolute top-4 right-4 lg:top-8 lg:right-8">
            <ThemeToggle />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            ~csy
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-blue-600 dark:text-blue-400 mb-6 lg:mb-8">
            Flutter Developer
          </h2>
          
          <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            <p>
              My name is ~csy (Chitresh Yadav), just a Flutter developer building some cool stuff.
              Skilled in designing modern Material3 UI and scalable applications using
              Riverpod/BLoC.
            </p>
            
            <p>
              I love creating intuitive interfaces and solving complex problems with clean, efficient
              code. Always exploring the latest technologies and best practices in mobile
              development.
            </p>
            
            <p>
              I&apos;m open to work, freelance, or collaborate.{' '}
              <a 
                href="mailto:chitreshy20@gmail.com" 
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                Contact Me
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
