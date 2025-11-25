import './globals.css'
import { Header } from './header'
import { Footer } from './footer'

// Metadata for the website (default browser tab title)
export const metadata = {
  title: 'Karl - Website Portfolio',
}

// Root layout component wrapping all pages
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        {/* Background gradient outside of the content box */}
        <div className="fixed inset-0 z-0 bg-gradient-to-t from-gray-500 via-gray-200 to-white" />

        {/* Main content wrapper */}
        <div className="relative z-10 flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
          <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
            {/* Header component at the top */}
            <Header />

            {/* Children + footer with fade-in animation */}
            <div className="opacity-0 animate-fadeIn animation-delayin">
              {children}
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
