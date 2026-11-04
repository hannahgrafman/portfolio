import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { site } from '@/data/site';
import './globals.css';
export const metadata: Metadata = { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'), title: {default:`${site.name} — Photography & Creative Direction`,template:`%s | ${site.name}`}, description:site.description, openGraph:{title:site.name,description:site.description,type:'website'} };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body><a href="#main" className="skip-link">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>}
