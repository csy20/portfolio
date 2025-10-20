'use client'

import { ChangeEvent, FormEvent, useState } from 'react'

const initialFormState = {
  name: '',
  email: '',
  message: '',
}

type FormState = typeof initialFormState

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error'

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>(initialFormState)
  const [status, setStatus] = useState<SubmissionStatus>('idle')
  const [feedback, setFeedback] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')
    setFeedback('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error ?? 'Something went wrong')
      }

      setStatus('success')
      setFeedback('Thanks for reaching out! I will get back to you shortly.')
      setFormState(initialFormState)
    } catch (error) {
      setStatus('error')
      setFeedback(
        error instanceof Error
          ? error.message
          : 'Unable to send your message right now. Please try again later.'
      )
    }
  }

  const isSubmitting = status === 'loading'
  const isMessageVisible = feedback.length > 0

  return (
    <section id="contact" className="py-20 relative" aria-labelledby="contact-heading">
      <div
        className="absolute inset-0"
        style={{
          background: 'var(--background)',
          opacity: 0.95,
        }}
      />
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            id="contact-heading"
            className="text-4xl font-bold mb-4"
            style={{ color: 'var(--foreground)' }}
          >
            Let&apos;s build something
          </h2>
          <p
            className="text-lg opacity-70"
            style={{ color: 'var(--foreground)' }}
          >
            Ready to collaborate on your next Flutter idea? Drop a note and I&apos;ll respond within 48
            hours.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-8 rounded-2xl border shadow-lg backdrop-blur-sm"
          style={{
            background: 'var(--card-bg)',
            borderColor: 'var(--border-color)',
          }}
          noValidate
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formState.name}
                onChange={handleChange}
                className="rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  background: 'var(--background-solid)',
                  borderColor: 'var(--border-color)',
                }}
                aria-describedby="name-help"
              />
              <span id="name-help" className="mt-1 text-xs opacity-70">
                Your full name or the team you represent.
              </span>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formState.email}
                onChange={handleChange}
                className="rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  background: 'var(--background-solid)',
                  borderColor: 'var(--border-color)',
                }}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2" htmlFor="message">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formState.message}
              onChange={handleChange}
              className="rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{
                background: 'var(--background-solid)',
                borderColor: 'var(--border-color)',
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending…' : 'Send message'}
          </button>

          {isMessageVisible && (
            <p
              role="status"
              aria-live="polite"
              className={`text-sm ${status === 'error' ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}
            >
              {feedback}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
