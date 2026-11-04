export type Category = 'Landscape' | 'People' | 'Still life';
export interface Photo { id: string; title: string; location: string; category: Category; src: string; alt: string; }
export interface Campaign { slug: string; title: string; client: string; category: string; year: string; role: string; overview: string; approach: string; results: string; image: string; alt: string; images: string[]; }
