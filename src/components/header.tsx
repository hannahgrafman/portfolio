'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { site } from '@/data/site';

const links = [
  { href: '/#works', label: 'work', path: '/campaigns' },
  { href: '/photography', label: 'photography', path: '/photography' },
  { href: '/about', label: 'about', path: '/about' },
  { href: '/contact', label: 'contact', path: '/contact' },
];

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <Link className="wordmark" href="/" onClick={() => setOpen(false)} aria-label={`${site.name}, home`}>{site.name}</Link>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="navigation" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
    <nav id="navigation" aria-label="Main navigation" className={open ? 'nav open' : 'nav'} onKeyDown={e => { if (e.key === 'Escape') { setOpen(false); (e.currentTarget.previousElementSibling as HTMLButtonElement)?.focus(); } }}>
      {links.map(({ href, label, path: activePath }) => <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={path.startsWith(activePath) ? 'page' : undefined}>{label}</Link>)}
    </nav>
  </header>;
}
