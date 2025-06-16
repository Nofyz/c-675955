import { UserCasesData, Book } from './UseCasesTypes';
import { Users, Palette, PenTool, Search, Code, Star } from 'lucide-react';

export const userCasesData: UserCasesData = {
  Marketers: {
    title: 'Save and find quotes & highlights',
    subtitle: 'that inspire you.',
    description: "nature scene now feels like a stimulation. We are overloaded with digital imagery. The internet has delivered the world to us on a silver platter from the glacial landscapes of Greenland to the cracks lining the Sahara desert. We've seen the deep ocean, microscopic bacteria, the insides of our own bodies.",
    quote: "True change is within.",
    background: 'bg-[#ff4d3c]',
    textColor: 'text-white',
    ctaText: 'SAVE TO MY MIND'
  },
  Designers: {
    title: 'Create instant, boundless',
    subtitle: 'visual moodboards.',
    description: '',
    quote: '',
    background: 'bg-[#d8ede7]',
    textColor: 'text-white',
    ctaText: '',
    showImageGrid: true
  },
  Writers: {
    title: 'Write without',
    subtitle: 'distractions.',
    description: '',
    quote: '',
    background: 'bg-[#f7c2d2]',
    textColor: 'text-white',
    ctaText: 'ADD NEW NOTE',
    showNotepad: true
  },
  Researchers: {
    title: 'Collect all your research &',
    subtitle: 'references in one place.',
    description: '',
    quote: '',
    background: 'bg-[#e8f4f8]',
    textColor: 'text-white',
    ctaText: '',
    showBrain: true
  },
  Developers: {
    title: 'Your private',
    subtitle: 'resource & reference hub.',
    description: '',
    quote: '',
    background: 'bg-[#1a1f2c]',
    textColor: 'text-white',
    ctaText: '',
    showDevTools: true
  },
  Everyone: {
    title: 'A place for everything',
    subtitle: 'you want to remember.',
    description: '',
    quote: '',
    background: 'bg-[#e8ecf0]',
    textColor: 'text-white',
    ctaText: '',
    showTags: true
  }
};

export const booksData: Book[] = [
  {
    title: "The Creative Mind",
    author: "Maria Johnson",
    coverColor: "bg-[#f97316]",
    textColor: "text-white"
  }, {
    title: "Design Patterns",
    author: "Alex Thompson",
    coverColor: "bg-[#8b5cf6]",
    textColor: "text-white"
  }, {
    title: "The Art of Focus",
    author: "Sarah Williams",
    coverColor: "bg-[#0ea5e9]",
    textColor: "text-white"
  }, {
    title: "Digital Minimalism",
    author: "Cal Newport",
    coverColor: "bg-[#d946ef]",
    textColor: "text-white"
  }, {
    title: "Atomic Habits",
    author: "James Clear",
    coverColor: "bg-[#f97316]",
    textColor: "text-white"
  }
];

// Export useCases for UseCasesSection
export const useCases = [
  {
    title: 'Ad Creators',
    description: 'Build high-converting ads with AI-powered copywriting and proven templates',
    icon: <Users className="w-6 h-6 text-primary" />,
    features: [
      'AI copywriter with platform-specific templates',
      'Swipe file of high-performing ads',
      'A/B testing frameworks'
    ]
  },
  {
    title: 'Designers',
    description: 'Create stunning visuals with design systems and creative inspiration',
    icon: <Palette className="w-6 h-6 text-primary" />,
    features: [
      'Visual inspiration library',
      'Design system templates',
      'Brand consistency tools'
    ]
  },
  {
    title: 'Copywriters',
    description: 'Write compelling copy that converts with AI assistance and proven frameworks',
    icon: <PenTool className="w-6 h-6 text-primary" />,
    features: [
      'AI-powered copy generation',
      'Copy framework library',
      'Performance analytics'
    ]
  },
  {
    title: 'Researchers',
    description: 'Analyze competitor ads and market trends with advanced tools',
    icon: <Search className="w-6 h-6 text-primary" />,
    features: [
      'Competitor analysis tools',
      'Market trend insights',
      'Performance benchmarking'
    ]
  },
  {
    title: 'Developers',
    description: 'Integrate with APIs and automate workflows with developer tools',
    icon: <Code className="w-6 h-6 text-primary" />,
    features: [
      'API integrations',
      'Workflow automation',
      'Custom tool development'
    ]
  },
  {
    title: 'Everyone',
    description: 'Access powerful marketing tools designed for teams of any size',
    icon: <Star className="w-6 h-6 text-primary" />,
    features: [
      'Collaborative workspaces',
      'Template library',
      'Team management'
    ]
  }
];
