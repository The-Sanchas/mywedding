import type { Metadata, Viewport } from 'next'
import { Cormorant, Lora } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant-var',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-lora-var',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Аліса & Олександр · 19 вересня 2026',
  description: 'Запрошення на весілля Аліси та Олександра — 19 вересня 2026 року',
  icons: {
    icon: '/favicon-32.png',
    apple: '/favicon-180.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={`${cormorant.variable} ${lora.variable}`}>
      <body>
        {/* Paper texture overlay: mix-blend-mode overlay on cream bg creates visible parchment grain */}
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            backgroundImage: "url('/paper-texture.jpg')",
            backgroundSize: 'cover',
            mixBlendMode: 'overlay',
          }}
        />
        {children}
      </body>
    </html>
  )
}
