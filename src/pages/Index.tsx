
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
    // Header animation
    gsap.fromTo("header", 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Section animations on scroll
    gsap.utils.toArray(".animate-section").forEach((section: any) => {
      gsap.fromTo(section,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Card stagger animations
    gsap.utils.toArray(".stagger-card").forEach((card: any, index) => {
      gsap.fromTo(card,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header with Navigation and Theme Toggle */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-white">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
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
