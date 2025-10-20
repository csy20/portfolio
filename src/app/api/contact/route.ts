import { NextResponse } from 'next/server'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let payload: {
    name?: string
    email?: string
    message?: string
  }

  try {
    payload = await request.json()
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body. Please send JSON.' },
      { status: 400 }
    )
  }

  const name = payload.name?.trim()
  const email = payload.email?.trim().toLowerCase()
  const message = payload.message?.trim()

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and message are required.' },
      { status: 400 }
    )
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: 'Please provide a valid email address.' },
      { status: 400 }
    )
  }

  if (message.length < 20) {
    return NextResponse.json(
      { error: 'Please share a few more details about your project (20+ characters).' },
      { status: 400 }
    )
  }

  console.info('New contact message received', {
    name,
    email,
    message,
  })

  return NextResponse.json({ success: true })
}
