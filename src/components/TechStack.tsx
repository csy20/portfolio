import Image from 'next/image'

import { techStack } from '@/data/siteContent'

export function TechStack() {
  return (
    <section id="tech" className="py-20 relative" aria-labelledby="tech-stack-heading">
      <div
        className="absolute inset-0"
        style={{
          background: 'var(--background)',
          opacity: 0.95,
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="tech-stack-heading"
            className="text-4xl font-bold mb-4"
            style={{ color: 'var(--foreground)' }}
          >
            Tech Stack
          </h2>
          <p
            className="text-lg opacity-70 max-w-2xl mx-auto"
            style={{ color: 'var(--foreground)' }}
          >
            The tools, frameworks, and services I rely on to ship responsive, accessible mobile
            applications at scale.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03] backdrop-blur-sm border"
              style={{
                background: 'var(--card-bg)',
                borderColor: 'var(--border-color)',
                color: 'var(--foreground)',
              }}
            >
              <div className="relative w-16 h-16 mb-4" aria-hidden="true">
                <Image src={tech.icon} alt={tech.name} fill className="object-contain" />
              </div>
              <h3
                className="text-sm font-semibold text-center"
                style={{ color: 'var(--foreground)' }}
              >
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
