import Link from 'next/link';
import {campaigns} from '@/data/campaigns';
import {EditorialImage} from '@/components/image';
export const metadata={title:'Campaigns'};
export default function Campaigns(){return <section className="section page-section"><p className="eyebrow">CREATIVE COLLABORATIONS</p><div className="page-heading"><h1>Ideas made<br/><span className="serif">visible.</span></h1><p>Thoughtful concepts, considered images, and stories built around a shared point of view.</p></div><p className="sample-note">Illustrative concept projects · Replace with your real collaborations.</p><div className="campaign-grid">{campaigns.map(c=><Link href={`/campaigns/${c.slug}`} className="group" key={c.slug}><EditorialImage src={c.image} alt={c.alt}/><div className="campaign-title"><h2>{c.title}</h2><span>↗</span></div><p>{c.client} / {c.year}</p></Link>)}</div></section>}
