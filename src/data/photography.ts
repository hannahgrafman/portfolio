import type { Photo } from '@/lib/types';
// DEMO IMAGES: Unsplash placeholders. Replace with your own files in public/images.
export const photoUrl = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2200&q=85`;
export const photos: Photo[] = [
 {id:'01', title:'Where the land meets the sea', location:'Big Sur, California', category:'Landscape', src:photoUrl('photo-1473448912268-2022ce9509d8'), alt:'Sunlight falling through a dense green forest'},
 {id:'02', title:'A slower kind of morning', location:'Joshua Tree, California', category:'Landscape', src:photoUrl('photo-1500534623283-312aade485b7'), alt:'Open landscape beneath a soft evening sky'},
 {id:'03', title:'The shape of quiet', location:'Studio study', category:'Still life', src:photoUrl('photo-1490312278390-ab64016e0aa9'), alt:'White ceramic vases and delicate flowers on a pale blue surface'},
 {id:'04', title:'In between places', location:'On the road', category:'People', src:photoUrl('photo-1506794778202-cad84cf45f1d'), alt:'Natural light portrait with a soft background'},
 {id:'05', title:'A little further', location:'Pacific Northwest', category:'Landscape', src:photoUrl('photo-1441974231531-c6227db76b6e'), alt:'A green forest filled with shafts of sunlight'},
 {id:'06', title:'Afternoon, unhurried', location:'Portrait study', category:'People', src:photoUrl('photo-1534528741775-53994a69daeb'), alt:'Portrait illuminated with blue and warm studio light'},
];
