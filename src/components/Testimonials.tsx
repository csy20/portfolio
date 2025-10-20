import { testimonials } from '@/data/siteContent'

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative" aria-labelledby="testimonials-heading">
      <div
        className="absolute inset-0"
        style={{
          background: 'var(--background)',
          opacity: 0.92,
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="testimonials-heading"
            className="text-4xl font-bold mb-4"
            style={{ color: 'var(--foreground)' }}
          >
            Testimonials
          </h2>
          <p
            className="text-lg opacity-70 max-w-2xl mx-auto"
            style={{ color: 'var(--foreground)' }}
          >
            A few kind words from collaborators who have shipped Flutter apps with me.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="h-full p-8 rounded-2xl border shadow-sm backdrop-blur-sm flex flex-col"
              style={{
                background: 'var(--card-bg)',
                borderColor: 'var(--border-color)',
                color: 'var(--foreground)',
              }}
            >
              <p className="text-base italic leading-relaxed opacity-80 mb-6">
                “{testimonial.quote}”
              </p>
              <footer className="mt-auto">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm opacity-70">{testimonial.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
