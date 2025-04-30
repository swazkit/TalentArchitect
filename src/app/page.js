'use client'

import { useState } from 'react';
import { ChevronRight, Check, User, Mail, Building, MessageSquare, Phone, MapPin } from 'lucide-react';

// Import components
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function Home() {
  return (
    <div>
      <Navbar />
      
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}