export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  timeline: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'business',
    number: '01',
    title: 'Business & Enterprise Platforms',
    category: 'Corporate & B2B',
    tagline: 'Defensible digital presence that converts high-value prospects and commands market authority.',
    description: 'We construct authoritative web platforms tailored for established companies, technology ventures, and professional consultancies. We replace slow, generic templates with high-performance architectures featuring custom calculators, client portals, and seamless CRM integrations.',
    deliverables: [
      'Multi-page responsive architecture',
      'Lead capture & CRM automation integration',
      'Technical SEO architecture & structured Schema markup',
      'High-converting landing pages & case study systems',
      'Security hardening & lightning-fast global CDN delivery'
    ],
    idealFor: 'B2B companies, tech startups, legal & financial firms, professional services',
    timeline: '2 – 4 weeks'
  },
  {
    id: 'creative',
    number: '02',
    title: 'Creative & Studio Showcases',
    category: 'Design & Culture',
    tagline: 'Art-directed digital galleries that celebrate nuance, negative space, and sensory typography.',
    description: 'For architects, interior ateliers, industrial design studios, and creative agencies whose work speaks through spatial harmony. Every layout is calibrated like an exhibition monograph, with buttery transitions and uncompressed visual fidelity.',
    deliverables: [
      'Curated case study & project monograph layout',
      'High-fidelity image optimization & zoom inspection',
      'Bespoke typography pairings & custom cursor cues',
      'Fluid project filtering by discipline or year',
      'Media kit & press download packages'
    ],
    idealFor: 'Architects, interior designers, creative studios, fashion labels, cinematographers',
    timeline: '3 – 5 weeks'
  },
  {
    id: 'gaming',
    number: '03',
    title: 'Gaming & Esports Brand Portals',
    category: 'Gaming & Entertainment',
    tagline: 'Tactical, high-octane web hubs built for esports franchises, content creators, and guilds.',
    description: 'Gaming brands require raw visual impact combined with live tournament schedules, athlete rosters, community gateways, and merchandise drops. We craft immersive dark-mode web experiences that command respect from both fans and corporate sponsors.',
    deliverables: [
      'Athlete, player & creator roster showcase',
      'Tournament schedules with live match countdowns',
      'Twitch / YouTube live stream and social integration',
      'Merchandise drop and ecommerce connectivity',
      'Sponsor showcase & partnership pitch portal'
    ],
    idealFor: 'Esports organizations, gaming creators, streaming guilds, tournament organizers',
    timeline: '2 – 4 weeks'
  },
  {
    id: 'restaurant',
    number: '04',
    title: 'Artisanal Restaurant & Hospitality',
    category: 'Hospitality & Culinary',
    tagline: 'Sensory gastronomic experiences that drive high-ticket reservations and private events.',
    description: 'Move beyond clumsy PDF menus. We build tantalizing culinary destinations that evoke your dining room atmosphere, showcase seasonal provenance, and streamline table reservations through direct integrations with Resy, OpenTable, or custom booking engines.',
    deliverables: [
      'Interactive seasonal menus with dietary filtering',
      'Direct table reservation & private dining booking flow',
      'Sensory photography layouts & sommelier wine lists',
      'Local Google Maps & OpenHours schema optimization',
      'Mobile-first responsive ordering / catering links'
    ],
    idealFor: 'Bespoke restaurants, wine bars, boutique hotels, artisan bakeries, cocktail lounges',
    timeline: '2 – 3 weeks'
  },
  {
    id: 'portfolio',
    number: '05',
    title: 'Executive & Designer Portfolios',
    category: 'Personal Brand',
    tagline: 'Distinctive digital homes for industry leaders, advisors, speakers, and solo visionaries.',
    description: 'Your personal website should reflect decades of expertise without feeling self-indulgent. We architect quiet, confident digital monographs featuring your essays, advisory criteria, keynote topics, and direct communication channels.',
    deliverables: [
      'Editorial long-form reading experience',
      'Keynote speaking topic cards with download riders',
      'Advisory scope & client engagement framework',
      'Substack, podcast, or newsletter syndicate integration',
      'Executive vetting questionnaire'
    ],
    idealFor: 'Founders, fractional C-suite, keynote speakers, authors, venture partners',
    timeline: '1 – 3 weeks'
  },
  {
    id: 'custom',
    number: '06',
    title: 'Custom Digital Experiences & Web Apps',
    category: 'Full-Stack & Special Projects',
    tagline: 'Bespoke interactive tools, product launch rooms, and immersive 3D/WebGL experiences.',
    description: 'When standard website paradigms cannot contain your ambition, our studio engineers bespoke frontends with custom shaders, real-time calculators, interactive maps, audio tactile cues, and micro-applications that win industry acclaim.',
    deliverables: [
      'Tailored interactive canvas or stateful workflows',
      'Custom API integrations & database backends',
      'High-performance WebGL / canvas micro-interactions',
      'Internationalization (i18n) multi-currency capabilities',
      'Continuous maintenance & performance SLA'
    ],
    idealFor: 'Product launches, venture studios, experiential marketing, progressive web apps',
    timeline: '4 – 8 weeks'
  }
];
