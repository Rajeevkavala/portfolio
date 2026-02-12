import React from 'react';
import Hero from './Hero/Hero';
import Skills from './Skills/skills';
import Projects from './Projects/Projects';
import Experiences from './Experience/Experiences';
import CTASection from './CTA/CTASection';
import ContactSection from './ContactSection';

const Sections = () => {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Projects />
      <Skills />
      <Experiences />
      <CTASection />
      <ContactSection />
    </main>
  );
};

export default Sections;
