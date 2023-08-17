import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
export const metadata = {
  title: 'فلکسیبل ',
  description: 'اکتشاف کن و پروژه های برنامه نویس هارو ببین',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
