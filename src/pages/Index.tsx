import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import FloatingNavbar from '@/components/FloatingNavbar';
import ParticleBackground from '@/components/ParticleBackground';
import Footer from '@/components/Footer';

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-x-hidden">
      <ParticleBackground />
      
      {/* Animated background gradients */}
      <motion.div 
        style={{ y: backgroundY }}
        className="fixed inset-0 opacity-20"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </motion.div>

      <FloatingNavbar />
      
      <main className="relative z-10">
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};

export default Index;
