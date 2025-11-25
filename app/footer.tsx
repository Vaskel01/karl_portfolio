'use client'
import { TextLoop } from '@/components/ui/text-loop'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <a>
          <TextLoop>
            <span>© 2025 Karl Palmares.</span>
            <span>Built with Next.js and React.</span>
            <span>Deployed using Vercel.</span>
          </TextLoop>
        </a>
        <div className="text-xs text-zinc-400">
        </div>
      </div>
    </footer>
  )
}
