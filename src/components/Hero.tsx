'use client'

import Image from 'next/image'
import { ThemeToggle } from './ThemeToggle'

export function Hero() {
  return (
    <>
      {/* Light Theme Background */}
      <div className="min-h-screen w-full relative bg-white dark:hidden">
        {/* Cool Blue Glow Top */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "#ffffff",
            backgroundImage: `
              radial-gradient(
                circle at top center,
                rgba(70, 130, 180, 0.5),
                transparent 70%
              )
            `,
            filter: "blur(80px)",
            backgroundRepeat: "no-repeat",
          }}
        />
        <HeroContent />
      </div>

      {/* Dark Theme Background */}
      <div className="min-h-screen w-full bg-black relative hidden dark:block">
        {/* Midnight Mist */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
              radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
              radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
            `,
          }}
        />
        <HeroContent />
      </div>
    </>
  )
}

function HeroContent() {
  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pb-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="absolute top-8 right-8">
            <ThemeToggle />
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            ~csy
          </h1>
          
          <h2 className="text-2xl lg:text-4xl font-semibold text-blue-600 dark:text-blue-400 mb-8">
            Flutter Developer
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
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

        {/* Right Side - Profile Image */}
        <div className="flex-shrink-0">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
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
      </div>
    </div>
  )
}
