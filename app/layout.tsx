import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UKT 908',
  description: 'Aplikasi Latihan Soal UKT 2024',
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
          <h2>Latihan UKT Tabanan</h2></div>
        {children}
      </body>
    </html>
  )
}
