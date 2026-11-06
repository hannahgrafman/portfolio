import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { photos } from '@/data/photography';
import { campaigns } from '@/data/campaigns';
import { EditorialImage } from '@/components/image';

function CameraSketch() {
  return <svg className="camera-sketch" viewBox="0 0 220 190" fill="none" aria-hidden="true">
    <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M28 69 Q24 62 35 60 L67 58 L79 38 Q82 35 89 37 L135 39 L146 60 L185 64 Q195 64 194 76 L190 151 Q190 163 178 162 L38 158 Q23 157 25 144 Z"/>
      <path d="M31 74 Q99 66 186 76 M44 59 L44 48 L62 48 L63 58 M152 58 L154 48 L175 50 L174 62"/>
      <path d="M137 111 C139 148 83 155 77 118 C69 78 128 74 137 111 Z M126 110 C131 133 94 142 89 118 C83 92 121 87 126 110 Z"/>
      <path d="M151 87 L176 89 L175 104 L150 103 Z M46 92 L59 92 M45 100 L58 100 M48 139 L63 140"/>
      <path d="M183 158 Q215 191 210 112 Q211 55 191 51 M26 142 Q2 157 9 109 Q10 77 27 80"/>
      <path d="M25 27 L20 14 M43 25 L49 11 M13 40 L2 36 M174 21 L179 10 M192 29 L206 25"/>
    </g>
  </svg>;
}

export default function Home() {
  const previews = [
    { src: campaigns[0].image, alt: campaigns[0].alt, href: `/campaigns/${campaigns[0].slug}`, label: campaigns[0].title },
    { src: photos[8].src, alt: photos[8].alt, href: '/photography', label: 'Posed Shots' },
    { src: campaigns[1].image, alt: campaigns[1].alt, href: `/campaigns/${campaigns[1].slug}`, label: campaigns[1].title },
    { src: photos[0].src, alt: photos[0].alt, href: '/photography', label: 'Sports Photography' },
  ];
  return <>
    <section className="intro">
      <div className="intro-copy">
        <h1>Hi! I'm Hannah</h1>
        <p>I'm a <strong>designer &amp; photographer</strong> passionate in experiential marketing, story-telling, and bridging the gap between business objectives and consumer aesthetics.</p>
      </div>
      <CameraSketch />
    </section>
    <nav className="project-reel" aria-label="Explore selected projects">
      {previews.map((p, i) => <Link className="reel-item group" href={p.href} key={p.label}>
        <EditorialImage src={p.src} alt={p.alt} priority={i === 0} sizes="(max-width: 600px) 76vw, 30vw" />
        <span>{p.label} <ArrowUpRight size={16} /></span>
      </Link>)}
    </nav>
    <section id="works" className="featured-works">
      <h2>Featured Works</h2>
      <div className="featured-list">
        {campaigns.map((c, i) => <article className="featured-entry" key={c.slug}>
          <span className="work-index">0{i + 1} / CAMPAIGN</span>
          <Link href={`/campaigns/${c.slug}`} className="work-card group">
            <EditorialImage src={c.image} alt={c.alt} sizes="(max-width: 700px) 90vw, 600px" />
            <div className="work-card-heading"><h3>{c.title}</h3><ArrowUpRight size={24} /></div>
            <p>{c.overview}</p>
            <span className="discipline">{c.category}</span>
          </Link>
        </article>)}
        <article className="featured-entry">
          <span className="work-index">03 / PHOTOGRAPHY</span>
          <Link href="/photography" className="work-card group">
            <EditorialImage src={photos[0].src} alt={photos[0].alt} sizes="(max-width: 700px) 90vw, 600px" />
            <div className="work-card-heading"><h3>Through my lens</h3><ArrowUpRight size={24} /></div>
            <p>Softball action, team moments, and portraits that celebrate milestones.</p>
            <span className="discipline">Sports Photography / Posed Shots</span>
            
          </Link>
        </article>
      </div>
    </section>
  </>;
}
