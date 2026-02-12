"use client";
import React from 'react';
import { BackgroundBeams } from './ui/BackgroundBeams';
import { ContactForm } from './ContactForm/ContactForm';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { 
    id: 'github', 
    icon: <Github className="h-6 w-6" />, 
    label: 'GitHub',
    href: 'https://github.com/Rajeevkavala',
  },
  { 
    id: 'twitter', 
    icon: <Twitter className="h-6 w-6" />, 
    label: 'XA',
    href: 'https://twitter.com/',
  },
  { 
    id: 'linkedin', 
    icon: <Linkedin className="h-6 w-6" />, 
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rajeev-kavala-807212239/',
  },
];

const EnhancedContactSection = () => {
  return (
    <div className="relative w-full py-20 overflow-hidden flex flex-col items-center justify-center rounded-3xl" id="contact">
      <BackgroundBeams className="absolute inset-0 w-full h-full -z-10 rounded-3xl" />
      
      <div className="max-w-2xl mx-auto p-4 relative z-10 w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-4">
          Let&apos;s Build Something <span className="text-indigo-500">Together</span>
        </h1>
        <p className="text-neutral-300 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Whether you have a project in mind, a question to ask, or just want to connect — my inbox is always open.
        </p>

        <div className="mt-10 bg-neutral-950/50 backdrop-blur-md border border-neutral-800 p-8 rounded-2xl shadow-xl">
            <ContactForm />
        </div>

        <div className="flex justify-center gap-6 mt-10">
            {socialLinks.map((social) => (
                <Link 
                    key={social.id} 
                    href={social.href}
                    target="_blank"
                    className="text-neutral-400 hover:text-indigo-500 transition-colors transform hover:scale-110"
                >
                    {social.icon}
                </Link>
            ))}
        </div>
        
        <div className="text-center mt-10 text-neutral-500 text-sm">
            © {new Date().getFullYear()} Rajeev Kavala. Built with Next.js & Tailwind CSS.
        </div>
      </div>
    </div>
  );
};

export default EnhancedContactSection;
