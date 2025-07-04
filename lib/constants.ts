import { X, Github, Linkedin, LucideIcon, Target, Eye, Heart } from "lucide-react";

// Site Metadata
export const SITE_TITLE = 'HalalElites';
export const SITE_TAGLINE = 'Boost your productivity with AI-powered tools.';
export const SITE_URL = 'https://halalelites.dev';

// Navigation Links
export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

// Hero Section
export const HERO_HEADING = 'Work smarter, not harder.';
export const HERO_SUBTEXT = 'HalalElites helps you stay organized and get more done with less effort.';
export const HERO_CTA_TEXT = 'Start Free Trial';
export const HERO_CTA_LINK = '/signup';

// About Section
export const ABOUT_HEADING = 'How It Started';
export const ABOUT_SUBTEXT = 'HalalElites is an innovative platform designed to enhance productivity through AI-driven tools and features.';
export const ABOUT_CONTENT = `
At HalalElites, we believe that productivity should be effortless. Our platform combines advanced AI technology with intuitive design to help you manage tasks, set priorities, and achieve your goals efficiently.

  Whether you're a freelancer, a small business owner, or part of a large team, HalalElites adapts to your workflow and enhances your productivity.
`;
export const ABOUT = [
  {
    title: 'Our Mission',
    description: 'To empower individuals and teams to achieve their best work through innovative technology.',
    icon: Target,
  },
  {
    title: 'Our Vision',
    description: 'A world where productivity is seamless and accessible to everyone.',
    icon: Eye,
  },
  {
    title: 'Our Values',
    description: 'Integrity, innovation, and customer-centricity are at the core of everything we do.',
    icon: Heart,
  },
]
// Contact Section
export const CONTACT_HEADING = 'Get in Touch';
export const CONTACT_SUBTEXT = 'We would love to hear from you! Reach out with any questions or feedback.';
export const CONTACT_EMAIL = 'support@halalelites.com';
export const CONTACT_PHONE = '+1 (555) 123-4567';
export const CONTACT_ADDRESS = '123 HalalElites St, Suite 100, City, Country';


// Testimonials Section

export const TESTIMONIALS = [
  {
    quote: "halalElites has transformed the way I work. I'm more organized and focused than ever!",
    author: "Habeeb",
    role:   "CEO of halalElites"
  },
  {
    quote: "The AI suggestions are a game changer. They help me prioritize tasks effectively.",
    author: "Mr X",
    role:   "Freelance Designer"
  },
  {
    quote: "I love the smart scheduling feature! It takes the stress out of planning my day.",
    author: "Ibrahim",
    role:   "Project Manager"
  }
];

// Features Section, use icons when available, prefferably lucide icons
export const FEATURES = [
  {
    icon: '📅',
    title: 'Smart Scheduling',
    description: 'Automatically plan your day based on priority and deadlines.',
  },
  {
    icon: '🤖',
    title: 'AI Assistance',
    description: 'Get AI-generated suggestions to improve productivity.',
  },
  {
    icon: '🔔',
    title: 'Reminders & Alerts',
    description: 'Never miss a task with intelligent reminders and alerts.',
  },
];


// Services Section
export const SERVICES_HEADING = 'How We Work';
export const SERVICES_SUBTEXT = 'We offer a range of services to help you maximize your productivity and achieve your goals.';
export const SERVICES = [
  {
    title: 'Web Development',
    description: 'Custom web applications tailored to your business needs.',
    features: [
      'Responsive design',
      'Modern frameworks',
      'SEO optimization'
    ]
  },
  {
    title: 'AI-Powered Insights',
    description: 'Leverage AI to gain insights into your productivity patterns and improve efficiency.',
    features: [
      'Pattern recognition',
      'Automated reporting',
      'Predictive analytics'
    ]
  },
  {
   
    title: 'Collaboration Tools',
    description: 'Work seamlessly with your team using our collaboration features.',
    features: [
      'Real-time sync',
      'Team workspaces',
      'Communication tools'
    ]
  },
  {
    title: 'Data Analytics',
    description: 'Analyze your productivity data to make informed decisions.',
    features: [
      'Custom dashboards',
      'Data visualization',
      'Performance metrics'
    ]
  },
  {
    title: 'Service 5',
    description: 'description 5.',
    features: [
      'feature 1',
      'feature 2',
      'feature 3'
    ]
  },
  {
    title: 'Service 6',
    description: 'description 6',
    features: [
      'feature 1',
      'feature 2',
      'feature 3'
    ]
  }
  
];

// Pricing Plans (if applicable)
export const PRICING_PLANS = [
  {
    name: 'Free',
    price: '$0',
    features: ['Basic task management', 'Limited AI suggestions', '1 project'],
  },
  {
    name: 'Pro',
    price: '$12/mo',
    features: ['Unlimited projects', 'Full AI suite', 'Priority support'],
  },
];

// Footer Info
export const FOOTER_TEXT = '© 2025 HalalElites empowers teams to transform raw data into clear, compelling visuals — making insights easier to share, understand, and act on.';
export const FOOTER_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Settings', href: '/cookie-settings' },
];


export const SOCIAL_LINKS: { name: string; url: string; icon: LucideIcon }[] = [
  {
    name: 'X',
    url: 'https://twitter.com/yourprofile',
    icon: X,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/yourprofile',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourprofile',
    icon: Linkedin,
  },
];
