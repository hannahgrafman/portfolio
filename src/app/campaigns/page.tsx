import Link from 'next/link';
import {campaigns} from '@/data/campaigns';
import {EditorialImage} from '@/components/image';
export const metadata={title:'Campaigns'};
export default function Campaigns(){return <section className="section page-section"><div className="page-heading"><h1 className="handwritten">Campaigns and Projects</h1></div><div className="campaign-grid">{campaigns.map(c=><Link href={`/campaigns/${c.slug}`} className="group" key={c.slug}><EditorialImage src={c.image} alt={c.alt}/><div className="campaign-title"><h2>{c.title}</h2><span>↗</span></div><p>{c.client} / {c.year}</p></Link>)}</div></section>}
