export interface TemplateItem {
  id: string;
  name: string;
  category: 'Business' | 'Gaming' | 'Restaurant' | 'Creative' | 'Portfolio' | 'Agency';
  tagline: string;
  description: string;
  image: string;
  accentColor: string;
  palette: string;
  featured: boolean;
  pages: string[];
  techStack: string[];
  mockContent: {
    heroTitle: string;
    heroSubtitle: string;
    keyMetric: string;
    features: string[];
    sampleStory: string;
  };
}

export const TEMPLATES_DATA: TemplateItem[] = [
  {
    id: 'nexus',
    name: 'NEXUS',
    category: 'Business',
    tagline: 'Enterprise Cloud & Intelligence Platform',
    description: 'A high-impact digital platform engineered for B2B SaaS, tech startups, and consultancies requiring architectural authority, data visualization, and streamlined onboarding.',
    image: '/src/assets/images/template_nexus_preview_1790173130086.jpg',
    accentColor: '#38BDF8',
    palette: 'Obsidian & Electric Cyan',
    featured: true,
    pages: ['Overview', 'Architecture', 'Solutions', 'Security', 'Book Demo'],
    techStack: ['Next.js / Vite', 'Tailwind', 'Interactive Charts', 'SOC-2 Ready UI'],
    mockContent: {
      heroTitle: 'Deterministic Infrastructure for Global Scale',
      heroSubtitle: 'Coordinate distributed intelligence, observe telemetry in sub-milliseconds, and enforce zero-trust security across all cloud deployments.',
      keyMetric: '< 12ms global latency threshold',
      features: [
        'Interactive real-time telemetry visualizer',
        'Multi-region compliance and audit logging tables',
        'Single-click lead capture and enterprise calendar sync',
        'Custom interactive ROI calculator'
      ],
      sampleStory: 'Designed for enterprise tech brands that must communicate unshakeable stability and technological superiority to institutional CTOs and investors.'
    }
  },
  {
    id: 'vintage',
    name: 'VINTAGE',
    category: 'Restaurant',
    tagline: 'Artisanal Culinary & Cellar Experience',
    description: 'An editorial gastronomic destination for Michelin-starred dining, artisanal wine cellars, and boutique culinary experiences with sensory layout and instant table reservation.',
    image: '/src/assets/images/template_vintage_preview_1790173141815.jpg',
    accentColor: '#E2B170',
    palette: 'Charcoal & Burnished Bronze',
    featured: true,
    pages: ['Story', 'Seasonal Menu', 'Wine Cellar', 'Private Dining', 'Reserve Table'],
    techStack: ['Responsive Imagery', 'OpenTable / Resy Link', 'Dynamic Menu CMS', 'SEO Microdata'],
    mockContent: {
      heroTitle: 'Culinary Heritage, Unhurried Elegance',
      heroSubtitle: 'Seasonal tasting menus harvested daily from biodynamic family orchards and paired with rare vintage cellars.',
      keyMetric: 'Bespoke Table Reservation Flow',
      features: [
        'Seasonal tasting menu with dietary filters',
        'Interactive Sommelier wine pairing index',
        'Private banquet and tasting room inquiry flow',
        'Photographic storytelling with sensory pacing'
      ],
      sampleStory: 'Transforms restaurant discovery from a static PDF menu into an intoxicating culinary invitation that drives high-ticket bookings.'
    }
  },
  {
    id: 'lumi',
    name: 'LUMI',
    category: 'Creative',
    tagline: 'Architectural Design & Spatial Lighting Studio',
    description: 'A minimalist, gallery-calibrated digital showroom for avant-garde architects, industrial product designers, and creative practices that treat whitespace as an art form.',
    image: '/src/assets/images/template_lumi_preview_1790173154102.jpg',
    accentColor: '#A3E635',
    palette: 'Graphite & Muted Lime',
    featured: true,
    pages: ['Works', 'Philosophy', 'Monographs', 'Studio', 'Inquire'],
    techStack: ['Spatial Asymmetry', 'High-Res Curated Lightbox', 'Editorial Typography', 'Fast Load'],
    mockContent: {
      heroTitle: 'Form Follows Light: Spatial Explorations',
      heroSubtitle: 'Documenting architectural structures, bespoke luminaire installations, and tactile material studies across North America and Europe.',
      keyMetric: 'Zero-Lag Spatial Image Architecture',
      features: [
        'Editorial monograph layout with project notes',
        'Fluid image gallery with fullscreen inspection',
        'Studio manifesto and architectural credential timeline',
        'Direct project acquisition enquiry modal'
      ],
      sampleStory: 'Created for creative directors and architectural innovators who refuse standard grid templates and insist on museum-level digital poise.'
    }
  },
  {
    id: 'monarch',
    name: 'MONARCH',
    category: 'Gaming',
    tagline: 'Esports Championship Brand & Gaming Guild',
    description: 'An electrifying, tactical digital headquarters for professional esports teams, gaming creators, streaming guilds, and competitive tournament franchises.',
    image: '/src/assets/images/template_monarch_preview_1790173166644.jpg',
    accentColor: '#F59E0B',
    palette: 'Carbon & Tactical Amber',
    featured: true,
    pages: ['Roster', 'Tournaments', 'Merchandise', 'Sponsors', 'Join Academy'],
    techStack: ['Stream Integration', 'Roster Stats Table', 'Shopify Ready', 'Match Schedules'],
    mockContent: {
      heroTitle: 'Dominate the Competitive Arena',
      heroSubtitle: 'World championship rosters across tactical FPS, Battle Royale, and MOBA disciplines. Defining the future of competitive gaming culture.',
      keyMetric: 'Live Tournament Schedule & Stream Feed',
      features: [
        'Athlete and streamer roster cards with career stats',
        'Live tournament schedule with countdown clocks',
        'Exclusive merchandise drop showcase preview',
        'Sponsorship pitch deck and corporate partnership gateway'
      ],
      sampleStory: 'Engineered with relentless kinetic energy to command respect from gaming audiences, corporate brand sponsors, and tournament organizers.'
    }
  },
  {
    id: 'orbit',
    name: 'ORBIT',
    category: 'Agency',
    tagline: 'Modern Venture Studio & Growth Lab',
    description: 'A bold, future-facing agency showcase built for growth consultancies, venture builders, and innovation studios that ship category-defining products.',
    image: '/src/assets/images/template_orbit_venture_1790174945206.jpg',
    accentColor: '#34D399',
    palette: 'Obsidian & Emerald Jade',
    featured: false,
    pages: ['Ventures', 'Capabilities', 'Thesis', 'Press', 'Collaborate'],
    techStack: ['Venture Portfolio Filter', 'Pitch Submission Form', 'Interactive Timeline', 'Clean Motion'],
    mockContent: {
      heroTitle: 'Accelerating Category Leaders from Day Zero',
      heroSubtitle: 'We partner with visionary founders to engineer defensible software moats, strategic brand identities, and high-velocity distribution.',
      keyMetric: '42+ Venture Studio Deployments',
      features: [
        'Interactive venture portfolio filter with milestone tags',
        'Step-by-step incubation methodology showcase',
        'Founder discovery submission portal with file upload',
        'Executive partner bios and published theses'
      ],
      sampleStory: 'Provides venture studios and elite consultancies with a prestigious front door that attracts institutional deal flow.'
    }
  },
  {
    id: 'nova',
    name: 'NOVA',
    category: 'Portfolio',
    tagline: 'Executive Advisory & Solo Creator Monograph',
    description: 'A distinguished personal website for founders, keynote speakers, fractional executives, and prolific creators seeking to establish unquestioned personal brand authority.',
    image: '/src/assets/images/template_nova_executive_1790174960554.jpg',
    accentColor: '#E2E8F0',
    palette: 'Titanium & Crisp Silver',
    featured: false,
    pages: ['Bio', 'Essays', 'Speaking', 'Advisory', 'Contact'],
    techStack: ['Substack / RSS Sync', 'Speaking Rider Kit', 'Media Kit Downloads', 'Podcast Player UI'],
    mockContent: {
      heroTitle: 'Thinking in Decades. Operating in Sprints.',
      heroSubtitle: 'Advising Series B+ leadership teams on product strategy, organizational design, and high-stakes capital allocation.',
      keyMetric: 'Curated Essays & Speaking Engagements',
      features: [
        'Curated essay archive with reading time and topic filters',
        'Keynote speaking topic cards with downloadable speaker riders',
        'Advisory engagement availability calendar',
        'Direct executive messaging and screening channel'
      ],
      sampleStory: 'Elevates personal thought leadership into a timeless, dignified digital archive that commands top-tier advisory retainers.'
    }
  }
];
