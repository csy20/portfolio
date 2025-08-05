'use client'

import Image from 'next/image'

const githubNotes = [
  {
    title: 'Next.js',
    description: 'Complete Next.js learning notes and examples',
    link: 'https://github.com/csy20/01.Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    title: 'Dart',
    description: 'Dart language fundamentals and advanced concepts',
    link: 'https://github.com/csy20/02.dart_language',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
  },
  {
    title: 'Flutter',
    description: 'Flutter framework learning notes and projects',
    link: 'https://github.com/csy20/03.flutter',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  },
  {
    title: 'Go Lang',
    description: 'Go language for API development and backend',
    link: 'https://github.com/csy20/04.go_for_api',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
  },
]

export function GitHubNotes() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            GitHub Notes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My learning journey documented through GitHub repositories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {githubNotes.map((note, index) => (
            <a
              key={index}
              href={note.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full">
                <div className="relative w-10 h-10">
                  <Image
                    src={note.icon}
                    alt={note.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                {note.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                {note.description}
              </p>

              <div className="mt-4 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                View Repository
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
