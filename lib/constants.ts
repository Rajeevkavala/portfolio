// lib/constants.ts
// Design tokens and constants for the portfolio

export const colors = {
  primary: {
    DEFAULT: '#E54D4D',
    hover: '#FF6B6B',
    muted: '#C94444',
  },
  background: {
    DEFAULT: '#0A0A0A',
    secondary: '#111111',
    tertiary: '#1A1A1A',
  },
  border: {
    DEFAULT: '#222222',
    hover: '#333333',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#A0A0A0',
    tertiary: '#666666',
    accent: '#E54D4D',
  },
  accent: {
    gold: '#C9A962',
    purple: '#8B5CF6',
    blue: '#3B82F6',
  },
} as const;

export const spacing = {
  section: '8rem',
  sectionCompact: '5rem',
  container: '1400px',
  componentGap: '2rem',
  elementGap: '1rem',
} as const;

export const typography = {
  fontFamily: {
    heading: "'Playfair Display', Georgia, serif",
    body: "'Inter', -apple-system, sans-serif",
    script: "'Caveat', cursive",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
} as const;

export const transitions = {
  fast: '0.2s ease',
  base: '0.3s ease',
  slow: '0.5s cubic-bezier(0.16, 1, 0.3, 1)',
  spring: '0.6s cubic-bezier(0.16, 1, 0.3, 1)',
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Navigation links
export const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
] as const;

// Social links
export const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/rajeevkavala', icon: 'github' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/rajeevkavala', icon: 'linkedin' },
  { name: 'Twitter', href: 'https://twitter.com/rajeevkavala', icon: 'twitter' },
] as const;
