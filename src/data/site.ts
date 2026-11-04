import type { Experience } from '@/lib/types';

// Replace all sample biography, email, and profile links before publishing.
export const site = {
  name: 'Hannah Grafman', initials: 'HG', tagline: 'Finding the extraordinary in the everyday.',
  description: 'Photography, art direction, and considered stories. A selection of personal observations and creative collaborations.',
  email: 'hannahgrafman@gmail.com', location: 'Based in California · Available worldwide',
  bio: "I'm currently a Business Economics and Cognitive Science student at the University of California San Diego",
  biography: "I'm a multidisciplinary creative with a love for experiential marketing and photography. My goal is to bridge communities together through creative activations and artwork.",
  personalBio: "In my freetime I love to stay active by gymming, running, or playing pickleball, doing gel-x on myself or friends, and going to concerts + festivals!",
  skills: ["Outlook", "Excel", "Lightroom", "Indesign", "Illustrator", "Photoshop", "Figma", "Capcut", "Premiere Pro"],
  interests: ['Long walks with a camera', 'Independent magazines', 'Architecture & everyday objects', 'The changing California light'],
  experience: [
    {
        "year": "January 2026 – June 2026",
        "title": "Associated Students Concerts and Events",
        "role": "Marketing Intern",
        "location": "La Jolla, CA",
        "highlights": [
            "Ideate and execute marketing campaigns for 2 UCSD music festivals, driving attendance of 40,000+ students.",
            "Coordinate artist relations, student meet-and-greets, and day-of-show logistics for Dominic Fike, Grent Perez, and more.",
            "Research viral trends and create Instagram content, maintaining a 7 million viewer average over a two-month period."
        ]
    },
    {
        "year": "June 2026 – August 2026",
        "title": "Weber Logistics",
        "role": "Supply Chain Logistics Intern",
        "location": "Santa Fe Springs, CA",
        "highlights": [
            "Managed contract and partnership data for 300+ client companies in Excel, maintaining up-to-date records.",
            "Improved partnership record accuracy by 15% by maintaining a centralized contract tracking system.",
            "Communicated product updates to clients through PowerPoint presentations and addressed client questions."
        ]
    },
    {
        "year": "June 2026 – Present",
        "title": "Triton Outfitters",
        "role": "Made to Order Sales Associate",
        "location": "La Jolla, CA",
        "highlights": [
            "Serve as liaison between organizations and production companies to produce bulk orders of customized merchandise.",
            "Manage and track $60,000 worth of merchandise orders across platforms like Wave and Outlook.",
            "Provide attentive, customer-focused service by accommodating special requests and attending to clients."
        ]
    },
    {
        "year": "September 2025 – Present",
        "title": "Triton Softball",
        "role": "Social Media Coordinator",
        "location": "La Jolla, CA",
        "highlights": [
            "Create growth strategies that grew Instagram from 13k to 20k followers while maintaining 150k average views.",
            "Produce engaging videos and photos to showcase highlights of a 28-member team across social media platforms.",
            "Collaborate with UCSD sports and coaches to coordinate and continuously improve social media strategies."
        ]
    }
] satisfies Experience[],
  socials: [{label: 'Instagram', href: 'https://instagram.com/'}, {label: 'LinkedIn', href: 'https://www.linkedin.com/in/hannahgrafman/'}],
};
