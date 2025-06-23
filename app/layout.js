import { Header, Footer } from '@/components/organisms'
import { Inter } from 'next/font/google'
import { createClient } from '@/prismicio'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Web Dev Kit",
  description: "",
  keywords: "",
  robots: "index, follow",
  openGraph: {
    siteName: "Web Dev Kit",
    title: "Web Dev Kit",
    description: "",
    image: "",
    locale: "en-us",
    type: "website",
  },
}
export default async function RootLayout({ children }) {
  const client = createClient();
  const header = await client.getSingle('site_navigation');
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header header={header} />
        {children}
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  )
}
