
import { Button } from "@/components/ui/button";
import { Home, Mail, GraduationCap } from "lucide-react";

export const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="hidden md:flex items-center space-x-4">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => scrollToSection('hero')}
        className="text-white hover:text-blue-400 hover:bg-white/10"
      >
        <Home className="h-4 w-4 mr-2" />
        Home
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => scrollToSection('education')}
        className="text-white hover:text-blue-400 hover:bg-white/10"
      >
        <GraduationCap className="h-4 w-4 mr-2" />
        Education
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => scrollToSection('contact')}
        className="text-white hover:text-blue-400 hover:bg-white/10"
      >
        <Mail className="h-4 w-4 mr-2" />
        Contact
      </Button>
    </nav>
  );
};
