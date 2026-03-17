import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Script from 'next/script'

export const metadata = { title: process.env.NEXT_PUBLIC_APP_URL || 'MyApp' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "3e9d5c5d7ee34739839d3795a0fccc1c"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
