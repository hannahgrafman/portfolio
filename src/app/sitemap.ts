import type {MetadataRoute} from 'next';
import {campaigns} from '@/data/campaigns';
export default function sitemap():MetadataRoute.Sitemap{const base=process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000';return ['','/photography','/campaigns','/about','/contact',...campaigns.map(c=>`/campaigns/${c.slug}`)].map(path=>({url:base+path}))}
