import React from 'react';
import Hero from './Hero/Hero';
import Skills from './Skills/skills';
import Projects from './Projects/Projects';
import Experiences from './Experience/Experiences';
import ContactSection from './ContactSection';
const Sections = () => {
  return (
    <main className="flex flex-col gap-28 w-full max-w-screen-xl mx-auto pt-32 md:pt-48 px-4 sm:px-6 lg:px-8">
      <Hero />
      <Skills/>
      <Projects />
      <Experiences />
      <ContactSection />
    </main>
  );
};

export default Sections;
