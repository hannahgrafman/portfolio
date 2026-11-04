import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { site } from '@/data/site';

export function Footer() {
  return <footer className="footer">
    <div className="footer-top">
      <h2>Like What You See?</h2>
      <p>Let’s talk projects, collaborations, or anything creative!</p>
      <a className="footer-email" href={`mailto:${site.email}`}>{site.email} <ArrowUpRight size={20} /></a>
      <div className="footer-socials">{site.socials.filter(s => s.label !== 'Instagram').map(s => <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label} ↗</a>)}<Link href="/contact">Send a Message ↗</Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span><span>Made with curiosity.</span></div>
  </footer>;
}
