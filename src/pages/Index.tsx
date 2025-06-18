
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black dark:bg-gray-900">
      {/* Header with Navigation and Theme Toggle */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-white">
              <span className="text-xl font-bold">k.syamprasad</span>
            </div>
            <div className="flex items-center space-x-4">
              <Navigation />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div id="hero">
        <HeroSection />
      </div>
      <SkillsSection />
      <div id="education">
        <EducationSection />
      </div>
      <ProjectsSection />
      <div id="contact">
        <ContactSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;
