
import { Button } from "@/components/ui/button";
import { Mail, Github, Shield } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative px-6 py-20 sm:py-32 pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          {/* Profile Picture */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
            <div className="relative">
              <img 
                src="/lovable-uploads/335a40a2-e5ca-4ec2-93cd-fcb5f3cdce51.png" 
                alt="DevOps Engineer Profile" 
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full p-3">
                <Shield className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
          {/* User Name */}
          <h2 className="text-2xl font-bold text-white mb-1">
            Hi, I'm <span className="font-bold">k.syamprasad</span>
          </h2>
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
            DevOps Engineer
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="mailto:syamprasa27@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </a>
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Github className="mr-2 h-4 w-4" />
                View GitHub
              </Button>
            </a>
          </div>
          {/* About Me Heading & Description moved here */}
          <h3 className="mt-10 text-xl font-bold text-white">
            About Me
          </h3>
          <p className="mt-2 text-lg leading-8 text-gray-200 max-w-3xl mx-auto">
            Passionate about building scalable, secure, and automated infrastructure solutions using AWS cloud services and Linux systems. 
            Specializing in CI/CD pipelines, containerization, and infrastructure as code.
          </p>
        </div>
      </div>
    </section>
  );
};
