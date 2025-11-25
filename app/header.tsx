import { TextEffect } from '@/components/ui/text-effect'

// Header component displayed at the top of the page
export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        {/* Name with a fade-in text effect, each character appears individually */}
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="font-medium text-black dark:text-white"
          delay={0.5} // starts fading in after 0.5s
        >
          Karl Adrian Palmares
        </TextEffect>

        {/* Subtitle / tagline with a fade-in effect, slightly delayed after the name */}
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={1} // starts fading in after 1s
        >
          Design Engineer | Avid Gamer
        </TextEffect>
      </div>
    </header>
  )
}
