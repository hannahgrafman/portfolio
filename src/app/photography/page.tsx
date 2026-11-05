import {Gallery} from '@/components/gallery';
export const metadata={title:'Photography',description:'Personal observations, quiet landscapes, and portraits in natural light.'};
export default function Photography(){return <section className="section page-section"><div className="page-heading"><h1 className="handwritten">My Gallery</h1><p>Places, people, and the poetry in between. A visual notebook of things that made me pause.</p></div><Gallery/></section>}
