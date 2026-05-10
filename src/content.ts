import type { Chapter, ChapterVideo, MediaItem, ModuleCard, SalesPath } from './types';

export const propertyName = 'The Dubai Mall';

export const heroFacts = [
  { label: 'Annual visitors', value: '100M+' },
  { label: 'Retail outlets', value: '1,200+' },
  { label: 'Dining experiences', value: '200+' },
  { label: 'Luxury brands', value: '150+' }
] as const;

export const chapters: Chapter[] = [
  {
    id: 'opening',
    label: 'Intro',
    navTitle: 'Launch story',
    title: 'A sales deck that feels like a destination launch.',
    copy: 'Built for screen-shares and standalone links, this deck compresses the property story into a cinematic, non-linear experience that moves prospects toward a leasing, sponsorship, or booking conversation.'
  },
  {
    id: 'scale',
    label: 'Scale',
    navTitle: 'Access + reach',
    title: 'Downtown Dubai. Global reach. Massive daily gravity.',
    copy: 'The Dubai Mall sits at the heart of Downtown Dubai and presents itself as a city-scale platform, not a conventional shopping center.'
  },
  {
    id: 'retail',
    label: 'Retail',
    navTitle: 'Retail mix',
    title: '1,200+ outlets with category depth across every consumer tier.',
    copy: 'Retail is the anchor story: flagship labels, premium brands, and an audience that can be segmented by intent, frequency, and spend.'
  },
  {
    id: 'luxury',
    label: 'Luxury',
    navTitle: 'Fashion Avenue',
    title: 'Fashion Avenue frames the property as a luxury address.',
    copy: 'The luxury layer is where brand partners and high-value tenants feel immediate prestige: curated service, premium adjacency, and a visual language that supports luxury positioning.'
  },
  {
    id: 'dining',
    label: 'Dining',
    navTitle: 'Lifestyle dining',
    title: 'Dining as dwell time, not filler.',
    copy: 'More than 200 dining experiences turn visits into longer stays, bigger baskets, and more opportunities for partnership storytelling.'
  },
  {
    id: 'entertainment',
    label: 'Entertainment',
    navTitle: 'Attractions',
    title: 'Attractions that change the role of the property.',
    copy: 'Aquarium, ice rink, VR, museums, kids attractions, and adjacent icons make the mall feel like a ticketed destination every day of the week.'
  },
  {
    id: 'events',
    label: 'Events',
    navTitle: 'Booking platform',
    title: 'A platform for launch moments, exhibitions, and brand heat.',
    copy: 'The Exhibition Center and surrounding event ecosystem make the deck expandable into deeper venue, sponsorship, and activation modules without a rewrite.'
  }
];

export const mediaReel: MediaItem[] = [
  {
    id: 'luxury-reel',
    title: 'Luxury motion',
    eyebrow: 'Fashion Avenue',
    description: 'A refined brand environment that primes luxury tenants and high-end sponsors.',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    poster: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="1600" viewBox="0 0 1280 1600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1a1b22"/><stop offset="55%" stop-color="#4e3522"/><stop offset="100%" stop-color="#c79a46"/></linearGradient><radialGradient id="r" cx="50%" cy="28%" r="70%"><stop offset="0%" stop-color="#f7e7c8" stop-opacity="0.8"/><stop offset="100%" stop-color="#f7e7c8" stop-opacity="0"/></radialGradient></defs><rect width="1280" height="1600" fill="url(#g)"/><circle cx="950" cy="260" r="420" fill="url(#r)" opacity="0.75"/><path d="M120 1240 C 380 1000, 800 1080, 1160 790" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="3"/><path d="M120 1280 C 380 1040, 800 1120, 1160 830" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="3"/><text x="96" y="300" fill="#f5ead4" font-family="Manrope,Arial,sans-serif" font-size="76" letter-spacing="10">FASHION AVENUE</text><text x="96" y="382" fill="#fff" font-family="Fraunces,Georgia,serif" font-size="82">Luxury as a destination</text><text x="96" y="460" fill="#f8e8c6" font-family="Manrope,Arial,sans-serif" font-size="34" letter-spacing="4">PRIVATE SERVICE  •  FLAGSHIP ENERGY  •  HIGH-SPEND AUDIENCE</text><rect x="96" y="1360" width="360" height="2" fill="#f7e7c8" opacity="0.85"/></svg>`),
    accent: '#d8b56a',
    stats: ['150+ luxury brands', 'VIP service cues', 'High-intent dwell time']
  },
  {
    id: 'attraction-reel',
    title: 'Attraction scale',
    eyebrow: 'Entertainment',
    description: 'The mix of aquarium, ice rink, VR, and family experiences keeps the property in daily rotation.',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="1600" viewBox="0 0 1280 1600"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#071822"/><stop offset="100%" stop-color="#14384c"/></linearGradient><radialGradient id="r1" cx="20%" cy="18%" r="52%"><stop offset="0%" stop-color="#69d5ff" stop-opacity="0.6"/><stop offset="100%" stop-color="#69d5ff" stop-opacity="0"/></radialGradient><radialGradient id="r2" cx="80%" cy="72%" r="44%"><stop offset="0%" stop-color="#8dd7c0" stop-opacity="0.55"/><stop offset="100%" stop-color="#8dd7c0" stop-opacity="0"/></radialGradient></defs><rect width="1280" height="1600" fill="url(#g)"/><circle cx="260" cy="240" r="360" fill="url(#r1)"/><circle cx="1000" cy="1060" r="360" fill="url(#r2)"/><path d="M160 1200 Q 640 820 1120 1280" stroke="rgba(255,255,255,0.18)" stroke-width="4" fill="none"/><text x="96" y="300" fill="#d6f3ff" font-family="Manrope,Arial,sans-serif" font-size="76" letter-spacing="10">ENTERTAINMENT</text><text x="96" y="382" fill="#fff" font-family="Fraunces,Georgia,serif" font-size="82">A reason to visit again</text><text x="96" y="460" fill="#bceeff" font-family="Manrope,Arial,sans-serif" font-size="34" letter-spacing="4">AQUARIUM  •  ICE RINK  •  VR  •  FAMILY ATTRACTIONS</text></svg>`),
    accent: '#69d5ff',
    stats: ['33,000+ animals', '22-screen cinema', 'Year-round family draw']
  },
  {
    id: 'events-reel',
    title: 'Events platform',
    eyebrow: 'Exhibition Center',
    description: 'The venue story scales from brand activations to conferences and large-format launches.',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    poster: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="1600" viewBox="0 0 1280 1600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#110f14"/><stop offset="50%" stop-color="#281c2c"/><stop offset="100%" stop-color="#5f4a1f"/></linearGradient><radialGradient id="r" cx="70%" cy="18%" r="55%"><stop offset="0%" stop-color="#f4c97a" stop-opacity="0.55"/><stop offset="100%" stop-color="#f4c97a" stop-opacity="0"/></radialGradient></defs><rect width="1280" height="1600" fill="url(#g)"/><circle cx="980" cy="260" r="380" fill="url(#r)"/><rect x="120" y="980" width="1040" height="220" rx="28" fill="rgba(255,255,255,0.06)"/><path d="M140 1110 H1140" stroke="rgba(255,255,255,0.24)" stroke-width="4"/><text x="96" y="300" fill="#f7d8aa" font-family="Manrope,Arial,sans-serif" font-size="76" letter-spacing="10">EXHIBITION CENTER</text><text x="96" y="382" fill="#fff" font-family="Fraunces,Georgia,serif" font-size="82">Built for the moment of launch</text><text x="96" y="460" fill="#f8e1bf" font-family="Manrope,Arial,sans-serif" font-size="34" letter-spacing="4">EXHIBITIONS  •  CONFERENCES  •  BRAND ACTIVATIONS  •  VIP FLOW</text></svg>`),
    accent: '#f4c97a',
    stats: ['9,446 sq. m', '4 flexible halls', '6,000 guest capacity']
  }
];

export const moduleCards: ModuleCard[] = [
  {
    id: 'events-module',
    title: 'Events module',
    eyebrow: 'Expandable',
    summary: 'Dedicated venue story for exhibitions, conferences, launches, and VIP hospitality.',
    details: [
      'Showcase the Exhibition Center as a premium event engine with arrival flow, BOH access, and branded environments.',
      'Use the module for booking conversations with production teams, agencies, and corporate marketing leads.',
      'Surface capacity, room configurations, and hospitality adjacency without overwhelming the primary deck.'
    ],
    cta: 'Open event booking path',
    accent: '#f4c97a'
  },
  {
    id: 'sponsorship-module',
    title: 'Sponsorship module',
    eyebrow: 'Expandable',
    summary: 'Audience-first partner story with activation ideas and sponsorship tiers.',
    details: [
      'Frame sponsorship around audience scale, repeated visits, and high-value lifestyle dwell time.',
      'Show how brands can own seasonal moments, family programming, and iconic photo opportunities.',
      'Package sponsorship as a media-plus-experience product rather than a logo placement.'
    ],
    cta: 'Open brand partnership path',
    accent: '#8dd7c0'
  },
  {
    id: 'leasing-module',
    title: 'Leasing paths',
    eyebrow: 'Expandable',
    summary: 'Segmented pitches for luxury, flagship, pop-up, and food & beverage tenants.',
    details: [
      'Tailor copy for high-end, mid-tier, and temporary retail using the same underlying data model.',
      'Map each pitch to the right audience, footfall intent, and dwell-time behavior.',
      'Keep the structure modular so new categories can be added without redesigning the page.'
    ],
    cta: 'Open leasing segments',
    accent: '#d8b56a'
  },
  {
    id: 'venue-module',
    title: 'Venue-specific modules',
    eyebrow: 'Expandable',
    summary: 'Dedicated storytelling for expo halls, cultural venues, and performance layers.',
    details: [
      'Use the deck as a gateway into deeper venue pages for performing arts, expo, and event spaces.',
      'Support future additions with a data-driven content system instead of static slides.',
      'Allow the commercial team to sell the property as a multi-venue platform.'
    ],
    cta: 'Open venue platform path',
    accent: '#69d5ff'
  }
];

export const sources = [
  'The Dubai Mall official site: About Dubai Mall, Entertainment, and Exhibition Center pages.',
  'Public leasing and contact pathways from the official Dubai Mall site.',
  'Official Dubai Mall public social and media entry points.'
] as const;

export const salesPaths: SalesPath[] = [
  {
    id: 'leasing',
    label: 'Leasing',
    title: 'Pitch the property as a retail engine.',
    copy: 'Lead with scale, tenant mix, and repeat visitation. Ideal for luxury flagships, premium retail, and pop-up conversations.',
    bullets: ['High footfall and premium dwell time', 'Luxury and mid-tier leasing paths', 'Strong shopper intent across categories'],
    cta: 'Open leasing path',
    chapterId: 'retail',
    mediaId: 'luxury-reel'
  },
  {
    id: 'sponsorship',
    label: 'Sponsorship',
    title: 'Position the mall as a brand platform.',
    copy: 'Show how partners can own audience attention through seasonal campaigns, iconic visuals, and lifestyle moments.',
    bullets: ['Brand heat with repeat exposure', 'Activation-friendly public spaces', 'Audience-first partnership story'],
    cta: 'Open sponsorship path',
    chapterId: 'events',
    mediaId: 'attraction-reel'
  },
  {
    id: 'events',
    label: 'Events',
    title: 'Sell launches, conferences, and exhibitions.',
    copy: 'Move the conversation toward booking the venue layer: the Exhibition Center, hospitality adjacency, and premium logistics.',
    bullets: ['Venue-ready event infrastructure', 'Conference and exhibition potential', 'Direct booking CTA'],
    cta: 'Open event path',
    chapterId: 'events',
    mediaId: 'events-reel'
  }
];

export const chapterVideos: ChapterVideo[] = [
  {
    chapterId: 'scale',
    title: 'At the heart of Downtown Dubai',
    eyebrow: 'Scale & access',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  },
  {
    chapterId: 'retail',
    title: 'Retail at destination scale',
    eyebrow: 'Retail mix',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
  },
  {
    chapterId: 'luxury',
    title: 'Luxury environment and service cues',
    eyebrow: 'Fashion Avenue',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
  },
  {
    chapterId: 'dining',
    title: 'Dining-led lifestyle dwell time',
    eyebrow: 'Dining & lifestyle',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
  },
  {
    chapterId: 'entertainment',
    title: 'Entertainment that drives repeat visits',
    eyebrow: 'Attractions',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  },
  {
    chapterId: 'events',
    title: 'Event platform ready for bookings',
    eyebrow: 'Events & venue',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4'
  }
];