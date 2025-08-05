'use client'

import Image from 'next/image'

const techStack = [
  {
    name: 'Dart',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
  },
  {
    name: 'Flutter',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  },
  {
    name: 'Firebase',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Pop!_OS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pop-os/pop-os-original.svg',
  },
  {
    name: 'Ubuntu',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg',
  },
]

export function TechStack() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing mobile applications
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white text-center">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
