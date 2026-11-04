import localFont from 'next/font/local';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { site } from '@/data/site';
import './globals.css';
const sans = localFont({ src: [{ path: '../../public/fonts/funnel.ttf', weight: '400', style: 'normal' }, { path: '../../public/fonts/funnel-semibold.ttf', weight: '600', style: 'normal' }], variable: '--font-sans', display: 'swap' });
const handwriting = localFont({ src: '../../public/fonts/cedarville.ttf', weight: '400', variable: '--font-handwriting', display: 'swap' });

export const metadata: Metadata = { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'), title: {default:`${site.name} — Photography & Creative Direction`,template:`%s | ${site.name}`}, description:site.description, openGraph:{title:site.name,description:site.description,type:'website'} };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en" className={`${sans.variable} ${handwriting.variable}`}><body><a href="#main" className="skip-link">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>}
