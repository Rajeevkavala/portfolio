// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter, Space_Grotesk, Caveat, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from "./ThemeProvider";
import { Toaster } from 'sonner';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap'
});

const caveat = Caveat({ 
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap'
});

export const viewport: Viewport = {
  themeColor: '#E54D4D',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Rajeev Kavala | Full Stack Developer',
  description: 'Full Stack Developer crafting modern web experiences with React, Next.js, and Node.js. View my projects and let\'s build something amazing together.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Web Developer', 'Portfolio'],
  authors: [{ name: 'Rajeev Kavala' }],
  creator: 'Rajeev Kavala',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Rajeev Kavala | Full Stack Developer',
    description: 'Full Stack Developer crafting modern web experiences with React, Next.js, and Node.js.',
    siteName: 'Rajeev Kavala Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajeev Kavala | Full Stack Developer',
    description: 'Full Stack Developer crafting modern web experiences.',
    creator: '@RajeevKava28901',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${caveat.variable} ${jetbrainsMono.variable} font-body antialiased bg-background text-text-primary`} suppressHydrationWarning>
        <ThemeProvider>
          {children}
          <Toaster 
            position="bottom-right" 
            toastOptions={{
              style: {
                background: 'var(--background-secondary)',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}