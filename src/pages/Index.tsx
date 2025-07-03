
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Optimized animations with reduced complexity
    const tl = gsap.timeline();
    
    // Header animation
    tl.fromTo("header", 
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
    );

    // Section animations with better performance
    const sections = gsap.utils.toArray(".animate-section");
    sections.forEach((section: any) => {
      gsap.fromTo(section,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            once: true // Animate only once for better performance
          }
        }
      );
    });

    // Optimized card animations
    const cards = gsap.utils.toArray(".stagger-card");
    cards.forEach((card: any, index) => {
      gsap.fromTo(card,
        { y: 15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          delay: index * 0.05, // Reduced stagger delay
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            toggleActions: "play none none reverse",
            once: true
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-300">
      {/* Optimized background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none dark:block hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-60 h-60 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Light mode background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none dark:hidden block">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/30"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" 
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }}></div>
      </div>

      {/* Header with improved contrast */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-green-200/30 dark:border-emerald-500/20 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-gray-900 dark:text-white transition-colors duration-300">
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
                k.syamprasad
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Navigation />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div id="hero" className="animate-section">
        <HeroSection />
      </div>
      
      <div className="animate-section">
        <SkillsSection />
      </div>
      
      <div id="education" className="animate-section">
        <EducationSection />
      </div>
      
      <div id="projects" className="animate-section">
        <ProjectsSection />
      </div>
      
      <div id="contact" className="animate-section">
        <ContactSection />
      </div>
      
      <FooterSection />
    </div>
  );
};

export default Index;
