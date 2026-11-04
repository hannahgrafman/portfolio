import Link from 'next/link';
import { site } from '@/data/site';
export function Footer(){return <footer className="footer"><div className="footer-top"><p>Have something in mind?</p><Link href="/contact" className="footer-cta">Let’s make it happen <span>↗</span></Link></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {site.name}</span><span>Photography & creative direction</span><div>{site.socials.map(s=><a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label} ↗</a>)}</div></div></footer>}
