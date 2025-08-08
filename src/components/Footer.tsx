'use client'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-black/40">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} ~csy. All rights reserved.</p>
        <a
          href="https://buymeacoffee.com/the__csy20"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-medium shadow transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M3 8a1 1 0 0 1 1-1h13a4 4 0 0 1 0 8H16.9a6 6 0 0 1-5.8 4H9a6 6 0 0 1-5.917-5.06A3 3 0 0 1 3 8Zm15 2H5a1 1 0 1 0 0 2h13a2 2 0 0 0 0-4ZM6 16a4 4 0 0 0 3.999 4h2.1A4 4 0 0 0 16 16H6Z" />
          </svg>
          Buy me a coffee
        </a>
      </div>
    </footer>
  )
}
