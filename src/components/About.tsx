export function About() {
  return (
    <section id="about" className="py-20 relative" aria-labelledby="about-heading">
      <div
        className="absolute inset-0"
        style={{
          background: 'var(--background)',
          opacity: 0.9,
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="space-y-8">
          <div>
            <h2
              id="about-heading"
              className="text-4xl font-bold mb-4 text-center"
              style={{ color: 'var(--foreground)' }}
            >
              About
            </h2>
            <p
              className="text-lg leading-relaxed text-center opacity-80"
              style={{ color: 'var(--foreground)' }}
            >
              I&apos;m a Flutter developer who obsesses over smooth animations, maintainable state
              management, and crafting apps that feel native on every device. From rapid
              prototypes to enterprise-ready products, I focus on DX (developer experience) and
              UX in equal measure.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2" aria-label="Highlights">
            <div
              className="p-6 rounded-xl border backdrop-blur-sm shadow-sm"
              style={{
                background: 'var(--card-bg)',
                borderColor: 'var(--border-color)',
                color: 'var(--foreground)',
              }}
            >
              <h3 className="text-xl font-semibold mb-3">How I Work</h3>
              <ul className="space-y-3 text-sm opacity-80 list-disc pl-5">
                <li>Design system driven UI with Material 3 and custom animation tooling.</li>
                <li>State management expertise with Riverpod, Provider, and BLoC.</li>
                <li>Integrate analytics, CI/CD, and monitoring from the first sprint.</li>
              </ul>
            </div>

            <div
              className="p-6 rounded-xl border backdrop-blur-sm shadow-sm"
              style={{
                background: 'var(--card-bg)',
                borderColor: 'var(--border-color)',
                color: 'var(--foreground)',
              }}
            >
              <h3 className="text-xl font-semibold mb-3">Currently Exploring</h3>
              <ul className="space-y-3 text-sm opacity-80 list-disc pl-5">
                <li>Flutter 3.27 performance APIs and background isolates.</li>
                <li>Clean architecture for modular feature delivery.</li>
                <li>Designing PWAs that complement native mobile builds.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
