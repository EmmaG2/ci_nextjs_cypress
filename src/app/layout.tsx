'use client'
import { Navbar } from '@/app_module/components/Navbar'
import '../global/styles.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      {/* <Navbar /> */}
      <body>{children}</body>
    </html>
  )
}
