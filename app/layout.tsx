import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Reform 908',
  description: 'Aplikasi Latihan Soal Olimpiade PSIAP',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{
          textAlign: "center",
          padding: "10px 0"
        }}>
          <h2>Latihan Olimpiade PSIAP 908</h2></div>
        {children}
      </body>
    </html>
  )
}
