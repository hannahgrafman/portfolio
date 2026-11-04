import Image from 'next/image';
export function EditorialImage({ src, alt, priority = false, className = '', sizes = '(max-width: 768px) 100vw, 50vw' }: { src: string; alt: string; priority?: boolean; className?: string; sizes?: string }) {
 return <div className={`image-wrap ${className}`}><Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" /></div>;
}
