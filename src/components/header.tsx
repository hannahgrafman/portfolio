'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { site } from '@/data/site';
const links = [['/', 'Home'], ['/photography','Photography'], ['/campaigns','Campaigns'], ['/about','About'], ['/contact','Contact']];
export function Header() { const path = usePathname(); const [open,setOpen] = useState(false);
 return <header className="site-header"><Link className="wordmark" href="/" onClick={()=>setOpen(false)} aria-label={`${site.name}, home`}>{site.name}<span className="brand-dot">.</span></Link><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="navigation" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X/> : <Menu/>}</button><nav id="navigation" aria-label="Main navigation" className={open ? 'nav open' : 'nav'}>{links.map(([href,label])=><Link key={href} href={href} onClick={()=>setOpen(false)} aria-current={(href==='/' ? path==='/' : path.startsWith(href))?'page':undefined}>{label}</Link>)}</nav></header>;
}
