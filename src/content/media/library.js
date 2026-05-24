export const mediaCategories = {
  national_recognition: {
    label: 'National Recognition',
    slug: 'national-recognition',
    description: 'National presence and media recognition',
    heroImage: '/assets/media/hero-default.webp'
  },
  broadcasting_history: {
    label: 'Broadcasting History',
    slug: 'broadcasting-history',
    description: 'Radio, TV, and media career documentation',
    heroImage: '/assets/media/hero-default.webp'
  },
  public_speaking: {
    label: 'Public Speaking',
    slug: 'public-speaking',
    description: 'Speeches, addresses, and public engagements',
    heroImage: '/assets/media/hero-default.webp'
  },
  constituency_presence: {
    label: 'Constituency Presence',
    slug: 'constituency-presence',
    description: 'Ideato community engagement',
    heroImage: '/assets/media/hero-default.webp'
  },
  candid_humanization: {
    label: 'Candid Moments',
    slug: 'candid-moments',
    description: 'Human moments, family, informal settings',
    heroImage: '/assets/media/hero-default.webp'
  },
  media_appearances: {
    label: 'Media Appearances',
    slug: 'media-appearances',
    description: 'Press, interviews, and media coverage',
    heroImage: '/assets/media/hero-default.webp'
  },
  event_presence: {
    label: 'Event Presence',
    slug: 'event-presence',
    description: 'Events, galas, ceremonies attended',
    heroImage: '/assets/media/hero-default.webp'
  },
  interviews: {
    label: 'Interviews',
    slug: 'interviews',
    description: 'Television and radio interviews',
    heroImage: '/assets/media/hero-default.webp'
  },
  podcasts: {
    label: 'Podcasts',
    slug: 'podcasts',
    description: 'Podcast appearances',
    heroImage: '/assets/media/hero-default.webp'
  },
  trust_signals: {
    label: 'Trust Signals',
    slug: 'trust-signals',
    description: 'Images that build credibility and trust',
    heroImage: '/assets/media/hero-default.webp'
  }
}

export const trustMediaAssets = [
  {
    id: 'trust-001',
    filename: 'EJike_agbada_01.jpeg',
    source: 'Photos/EJike_agbada_01.jpeg',
    category: 'trust_signals',
    tags: ['formal', 'agbada', 'traditional', 'leadership'],
    alt: 'Ejike Ibedilo in formal agbada attire',
    displayContext: 'hero, about, trust sections'
  }
]

export const heroImage = {
  primary: {
    filename: 'EJike_agbada_01.jpeg',
    source: 'Photos/EJike_agbada_01.jpeg',
    alt: 'Ejike Ibedilo — The Voice You Already Know',
    fallback: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=80'
  }
}

export const galleryDefaults = {
  aspectRatios: {
    thumbnail: '4/3',
    portrait: '3/4',
    hero: '16/9',
    square: '1/1'
  },
  loading: 'lazy',
  formats: ['webp', 'jpeg'],
  quality: {
    thumbnail: 80,
    medium: 85,
    full: 90
  }
}

export default {
  mediaCategories,
  trustMediaAssets,
  heroImage,
  galleryDefaults
}