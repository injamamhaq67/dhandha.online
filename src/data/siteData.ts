import {
  NavItem,
  ProblemCard,
  ServiceItem,
  ProcessStep,
  PricingPlan,
  ReelCard,
  FaqItem,
} from '../types';

/**
 * =============================================================================
 * SITE CONFIGURATION & PLACEHOLDERS
 * =============================================================================
 * Replace these placeholder values with your production business details.
 */
export const SITE_CONFIG = {
  brandName: 'Dhandha.online',
  hindiBrandMark: 'धंधा',
  // Verified WhatsApp Business number in international format without '+' or spaces
  whatsappNumber: '917869817961',
  whatsappPrefilledMessage: 'Hi Dhandha.online, I want to grow my business online.',
  get whatsappLink() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappPrefilledMessage)}`;
  },
  // PLACEHOLDER: Replace with your support / sales inquiry email
  email: 'hello@dhandha.online',
  // PLACEHOLDER: Remote URL of the supplied Hindi 'धंधा' typography logo from Stitch.
  // Can be replaced with a local SVG or PNG file path inside /public/
  logoImageUrl:
    'https://lh3.googleusercontent.com/aida/ALJJyrCD5dvtlphlPYT_IfjAe3uZUpe0Io4X4RLi7qy5FOosoFMcAv3FlJWgaxo05vT__sO3BdL5zQhnlYYXme1vI8s_fZBXR9GhF3Of_Fvm1Sdiv8q7g2Tm7d14GDXu_HxnKIcYiFui2xVgBD_LJBrpc1YFYSq0eJaxa2sAP0WL0BLhrPW4GKO_sk5SiNn9uMrsNGr9RfD2kOT_qqGNTGr5z8w2ZB7JrlSJj7xzIg08Kxopkdhh0JQhwOrH1xe9p465UDyyF-7a',
  locations: 'Mumbai • Bengaluru • Delhi NCR',
  tagline: 'Local businesses, online growth.',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Plans', href: '#plans' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const PROBLEM_CARDS: ProblemCard[] = [
  {
    id: 'low-visibility',
    iconName: 'EyeOff',
    title: 'Low Visibility',
    description: 'Great business, but not enough people know it exists.',
  },
  {
    id: 'random-content',
    iconName: 'Shuffle',
    title: 'Random Content',
    description: 'Posting without a clear strategy or consistency.',
  },
  {
    id: 'no-enquiries',
    iconName: 'MessageSquareDashed',
    title: 'No Enquiries',
    description: 'Likes are coming, but customers are not taking action.',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'reels-content',
    number: '01',
    title: 'Reels & Content',
    description: 'Content that makes local customers stop scrolling.',
    tags: ['Hook-driven shoots', 'Local storytelling'],
    iconName: 'Film',
  },
  {
    id: 'social-media-management',
    number: '02',
    title: 'Social Media Management',
    description: 'Consistent posts, captions, stories, and strategy.',
    tags: ['Instagram & Facebook', 'Consistent calendar'],
    iconName: 'Calendar',
  },
  {
    id: 'meta-ads',
    number: '03',
    title: 'Meta Ads',
    description: 'Targeted campaigns built for local awareness and enquiries.',
    tags: ['Hyper-local radius', 'WhatsApp lead ads'],
    iconName: 'MousePointerClick',
  },
  {
    id: 'google-business-growth',
    number: '04',
    title: 'Google Business Growth',
    description: 'Help nearby customers find and choose your business.',
    tags: ['Maps visibility', 'Profile & review flow'],
    iconName: 'MapPin',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand Your Dhandha',
    description:
      'We learn your customers, neighbourhood, and what brings people through your door.',
  },
  {
    number: '02',
    title: 'Build the Strategy',
    description:
      'A clear monthly Reel calendar, ad angles, and Google plan built for your city.',
  },
  {
    number: '03',
    title: 'Create, Post & Promote',
    description:
      'Scroll-stopping Reels, consistent stories, and local Meta ads that spark WhatsApp DMs.',
  },
  {
    number: '04',
    title: 'Track, Learn & Optimise',
    description:
      'Clear monthly reporting on reach, enquiries, and what to scale next month.',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Foundation',
    price: '₹12,000',
    period: '/month',
    features: [
      '5 Reels',
      '4 Posts',
      'Profile optimisation',
      'Content calendar',
      'Monthly report',
    ],
    isPopular: false,
    ctaText: 'Let’s Grow Your Dhandha',
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Recommended',
    price: '₹15,000',
    period: '/month',
    features: [
      '12 Reels',
      '6 Posts',
      'Stories',
      'Instagram + Facebook management',
      'Promotional creative',
      'Monthly report',
    ],
    isPopular: true,
    ctaText: 'Let’s Grow Your Dhandha',
  },
  {
    id: 'dominate',
    name: 'Dominate',
    tagline: 'Full-Stack Local Scale',
    price: '₹20,000',
    period: '/month',
    features: [
      '20 Reels',
      '8 Posts',
      'Stories',
      'Full social management',
      'Meta ad management',
      'Google Business support',
      'Detailed reporting',
    ],
    isPopular: false,
    ctaText: 'Let’s Grow Your Dhandha',
  },
];

export const REELS_PORTFOLIO: ReelCard[] = [
  {
    id: 'cafe',
    category: 'CAFÉS & DINING',
    title: 'Your business could be the next growth story.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrBNstDTH8CedYLHk8wn0BLm80Aj2CluJWL026yDVeKFA-Yjs2iuJ0o6TPiWLg6u4AykDxujkOzQ3x_EiMe1jsZdKNbE7KRMz4MQfO9vL0SjTQG9WY0vUhD8Tmz4ERdhEjiDtQUv7Zt_Stid5CEuCW-m9dXsKyFh53lpu4XO8oS9hsRgPwZGUnM5kjkdJA8VCv7pv_MLs647tGVfZPQ9vQsKGHhbLEYixYzLOyMw4krGEA-6kipOzlbqeaQEO1eKRMTcEA',
    altText: 'Local specialty café Reel preview',
  },
  {
    id: 'gym',
    category: 'GYMS & COACHES',
    title: 'Your business could be the next growth story.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrBGRKRCWdoLu_2cx5rxtkHPyX7jeVbdrKBZHDea04ObAEtfS1cSLrd8R7dAYLyr_dWYSrW9lp2hdOFPbcPaHBFfrUu2KIvC9p3KkWsTwQnLxPGavW8_3bVGpbSxIBWZdWEtHUcneob_vht5IVkXOU7E407FqnXqXlz9XPVBVlLgONx-Q_WRl3aKK8bqcNy15P5a5tvdkNB4aVTvCCLcsJfeMiNReSpwbkgu6zbDB1BnodusL03WD6II7LbRBeliEr5MsDS_Gg',
    altText: 'Local fitness studio Reel preview',
  },
  {
    id: 'salon',
    category: 'SALONS & STUDIOS',
    title: 'Your business could be the next growth story.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrDP1BlNICHy75LUk3uoEB3hgo11_BeIg2lCN_8ofa0MbXaxOwi8As0kui9wmqz-EZ8AqseVCQjdGchI8E5vTAcWsjjQ6ovTjX0NwHx5OM6jXi4PJruLrE1OQQsDouAuCbU4GrDgHVrkHRMViHIq5cJ5qrsdFQAqJnVtBqOo8lYVl5-38zXY1ZoQZH4v0rHmi0kaOQV_Tgh9Z2sfwC5vw-WKTNOOViQANA7vooLErS6V--h3ic1R48hVPV3eZIWWTNI3CJ26QcY',
    altText: 'Hair and grooming studio Reels placeholder',
  },
  {
    id: 'clinic',
    category: 'CLINICS & SERVICES',
    title: 'Your business could be the next growth story.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrAcnl6buC1whH80vicRbyyXZwzVO1CuBZRbZIrYx4HqxFnb8FA8tx8clTbVTo1kKjm3d1KLheDuEGN6LZ8bdWpZUw22z0MlWnBkJlcPpxPS1ynAXcPpKcg6ZV72RVa_mnJYYUlQ7GqhbiqY429knxbUiCJBTlM21NoSyBBp3LYOe0D7mQFNQvUn4fCrqyqZuMkssxGY2I86w122-AXSiiJglxE-Ybx_eRM_GetVWxodPxOfQwHj2lofGR5GZyGiof-g6oBTZcfk',
    altText: 'Dental and skin clinic Reels placeholder',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Do I or my staff need to dance or act in Reels?',
    answer:
      'Bilkul nahi (Not at all). We showcase your actual craft, product prep, food, workout routines, patient consultations, or client transformations. Genuine behind-the-scenes and problem-solving content builds far more local trust than trendy dances.',
  },
  {
    id: 'faq-2',
    question: 'How soon can we expect real customer enquiries?',
    answer:
      'Organic momentum through Reels and Google Maps optimization typically compounds over 2 to 4 weeks. When combined with Meta hyper-local lead ads, direct customer WhatsApp inquiries often begin within the first 48 to 72 hours of campaign launch.',
  },
  {
    id: 'faq-3',
    question: 'How does video recording and content collection work?',
    answer:
      'Depending on your location, we either schedule on-site video shoots or provide your staff with crystal-clear, 1-page shot lists and phone-recording guides. You send the raw clips over WhatsApp or Drive, and our editing team transforms them into high-retention Reels.',
  },
  {
    id: 'faq-4',
    question: 'Is the Meta / Instagram ad budget included in the plan price?',
    answer:
      'No. Ad spend is paid directly by you to Meta (Facebook/Instagram) via your own ad account. This ensures you maintain 100% transparency, control, and GST invoicing for your marketing spend. We recommend a starting ad budget of ₹3,000 to ₹10,000/month.',
  },
  {
    id: 'faq-5',
    question: 'Are there any lock-in contracts or setup fees?',
    answer:
      'No long-term lock-in. Our retainers are simple month-to-month partnerships. If your business season changes or you wish to pause, you can modify or pause your plan with 7 days notice before the next monthly cycle.',
  },
  {
    id: 'faq-6',
    question: 'What happens during the Free Growth Audit?',
    answer:
      'We conduct a deep dive into your current Instagram profile, Google Business listing, competitor presence within a 5 km radius, and your enquiry flow. Within 24-48 hours, we share actionable feedback and a tailored game plan for your city.',
  },
];
