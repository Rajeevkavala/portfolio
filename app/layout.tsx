// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "./ThemeProvider" // Updated import

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Rajeev's Portfolio",
  description: 'A portfolio website to showcase my work',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}