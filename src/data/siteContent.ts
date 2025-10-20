export type Project = {
  title: string
  description: string
  videoLink: string
  githubLink: string
  tags: string[]
}

export const projects: Project[] = [
  {
    title: 'Recipe App',
    description: 'Save your favorite cooking recipes and revisit them anytime with offline access.',
    videoLink: 'https://drive.google.com/file/d/1Ed7ptg14Ny5d4dph1aCT_Ytab4gzskxM/view?usp=sharing',
    githubLink: 'https://github.com/csy20/day9',
    tags: ['Flutter', 'Dart', 'Local Storage'],
  },
  {
    title: 'News App',
    description: 'Browse the latest headlines using a News API with real-time updates and category filters.',
    videoLink: 'https://drive.google.com/file/d/1rXCJucBNpI1m5YfAEGfk397qDy8MGQKt/view?usp=drive_link',
    githubLink: 'https://github.com/csy20/day21',
    tags: ['Flutter', 'API Integration', 'Real-time'],
  },
  {
    title: 'Weather App',
    description: 'Check live forecasts for your current location with a polished Material 3 interface.',
    videoLink: 'https://drive.google.com/file/d/1R0RTrw71SWnyBiGTtOusH273-INFBeYM/view?usp=sharing',
    githubLink: 'https://github.com/csy20/proj23',
    tags: ['Flutter', 'Weather API', 'Location'],
  },
  {
    title: 'GitHub View',
    description: 'Look up any GitHub profile instantly with stats, repositories, and activity summaries.',
    videoLink: 'https://drive.google.com/file/d/13USknzcrl-pjOdGu9ghJWKKoKXyAQR9x/view?usp=sharing',
    githubLink: 'https://github.com/csy20/proj23',
    tags: ['Flutter', 'GitHub API', 'User Profiles'],
  },
]

export type GitHubNote = {
  title: string
  description: string
  link: string
  icon: string
}

export const githubNotes: GitHubNote[] = [
  {
    title: 'Next.js',
    description: 'Complete Next.js learning notes and examples.',
    link: 'https://github.com/csy20/01.Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    title: 'Dart',
    description: 'Dart language fundamentals and advanced concepts.',
    link: 'https://github.com/csy20/02.dart_language',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
  },
  {
    title: 'Flutter',
    description: 'Flutter framework learning notes and projects.',
    link: 'https://github.com/csy20/03.flutter',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  },
  {
    title: 'Go Lang',
    description: 'Go language for API development and backend services.',
    link: 'https://github.com/csy20/04.go_for_api',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
  },
]

export type TechStackItem = {
  name: string
  icon: string
}

export const techStack: TechStackItem[] = [
  {
    name: 'Dart',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
  },
  {
    name: 'Flutter',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  },
  {
    name: 'Firebase',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    name: 'Ubuntu',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg',
  },
]

export type Testimonial = {
  name: string
  role: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Abhinav Singh',
    role: 'Senior Flutter Engineer, DevStudio',
    quote:
      'Chitresh turns complex requirements into delightful mobile experiences. His attention to design detail is world-class.',
  },
  {
    name: 'Priya Sharma',
    role: 'Product Manager, Fintechly',
    quote:
      'Reliable, proactive, and always experimenting with the newest Flutter capabilities. Shipping with him is effortless.',
  },
  {
    name: 'Rahul Verma',
    role: 'Founder, BuildBetter Apps',
    quote:
      'From architecture to polish, ~csy delivers production-ready apps faster than anyone else we have contracted.',
  },
]

export type SocialLink = {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'x' | 'email'
}

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/csy20',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/csy20/',
    icon: 'linkedin',
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/the__csy20',
    icon: 'x',
  },
  {
    label: 'Email',
    href: 'mailto:chitreshy20@gmail.com',
    icon: 'email',
  },
]

export const resumeUrl = 'https://drive.google.com/file/d/1PK4MIdvpAt95H9aLlDd684GszWYS0i1l/view?usp=sharing'
