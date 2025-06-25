import { Header, Footer } from '@/components/organisms'
import { Oswald, Open_Sans } from 'next/font/google'
import { createClient } from '@/prismicio'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'
import './globals.scss'

const oswald = Oswald({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'] })

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
      <body className={`${oswald.className} ${openSans.className}`}>
        <Header header={header} />
        {children}
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  )
}

