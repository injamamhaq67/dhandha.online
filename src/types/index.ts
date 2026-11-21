export interface NavItem {
  label: string;
  href: string;
}

export interface ProblemCard {
  id: string;
  iconName: 'EyeOff' | 'Shuffle' | 'MessageSquareDashed';
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  iconName: 'Film' | 'Calendar' | 'MousePointerClick' | 'MapPin';
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  id: 'starter' | 'growth' | 'dominate';
  name: string;
  tagline: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface ReelCard {
  id: string;
  category: string;
  title: string;
  imageUrl: string;
  altText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FormData {
  name: string;
  businessName: string;
  phone: string;
  city: string;
  goal: string;
  selectedPlan?: string;
}
