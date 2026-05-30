export type BrandId = 'tempur' | 'maxdivani' | 'inart' | 'fermosa';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  description: string;
  specs: string[];
}

export interface BrandConfig {
  id: BrandId;
  name: string;
  englishName: string;
  tagline: string;
  description: string;
  imageUrl: string;
  luxuryTraits: string[];
  products: Product[];
}

export interface CustomizeState {
  logoText: string;
  shopName: string;
  goldAccentColor: string; // Hex color for gold accent representation e.g. '#D4AF37'
  goldAccentHover: string; // e.g. '#C5A028'
  fontStyle: 'sans' | 'serif' | 'mono' | 'gothic';
  heroTitle: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutText: string;
  contactAddress: string;
  contactPhone: string;
  contactHours: string;
  tempurDesc: string;
  tempurTag: string;
  tempurImg: string;
  tempurShowcaseImg: string;
  maxdivaniDesc: string;
  maxdivaniTag: string;
  maxdivaniImg: string;
  inartDesc: string;
  inartTag: string;
  inartImg: string;
  fermosaDesc: string;
  fermosaTag: string;
  fermosaImg: string;
}

export interface SeoState {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  author: string;
  ogType: string;
  ogUrl: string;
}

export interface SocialState {
  instagramUrl: string;
  youtubeUrl: string;
  kakaoUrl: string;
  blogUrl: string;
}
