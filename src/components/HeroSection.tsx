
import { Button } from "@/components/ui/button";
import { Mail, Github, Shield, Download, Code, Server } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative px-6 py-20 sm:py-32 pt-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          {/* Profile Picture */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="relative">
              <img 
                src="/lovable-uploads/335a40a2-e5ca-4ec2-93cd-fcb5f3cdce51.png" 
                alt="DevOps Engineer Profile" 
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-gradient-to-r from-purple-400 to-cyan-400 shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full p-3 animate-bounce">
                <Shield className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          {/* Status badges */}
          <div className="flex justify-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-4 py-2">
              <span className="text-green-400 text-sm font-medium flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Available for opportunities
              </span>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2">
              <span className="text-purple-400 text-sm font-medium flex items-center gap-2">
                <Code className="w-4 h-4" />
                3+ Years Experience
              </span>
            </div>
          </div>

          {/* User Name */}
          <h2 className="text-2xl font-bold text-white mb-1">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold">k.syamprasad</span>
          </h2>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            DevOps Engineer
          </h1>

          {/* Specialization tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full px-4 py-2 text-blue-300 text-sm">
              <Server className="w-4 h-4 inline mr-2" />
              Cloud Architecture
            </span>
            <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2 text-purple-300 text-sm">
              CI/CD Pipelines
            </span>
            <span className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-4 py-2 text-green-300 text-sm">
              Infrastructure as Code
            </span>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:syamprasa27@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </a>
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="border-purple-400 text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105 transform">
                <Github className="mr-2 h-4 w-4" />
                View GitHub
              </Button>
            </a>
            <Button variant="outline" size="lg" className="border-cyan-400 text-cyan-400 hover:bg-cyan-600 hover:text-white transition-all duration-300 hover:scale-105 transform">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          {/* About Me Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              About Me
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
                <h4 className="text-purple-300 font-semibold mb-3">Professional Focus</h4>
                <p className="text-gray-200 leading-relaxed">
                  Passionate about building scalable, secure, and automated infrastructure solutions using AWS cloud services and Linux systems. 
                  Specializing in CI/CD pipelines, containerization, and infrastructure as code with a focus on reliability and performance.
                </p>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
                <h4 className="text-cyan-300 font-semibold mb-3">Core Expertise</h4>
                <p className="text-gray-200 leading-relaxed">
                  Expert in AWS cloud architecture, Kubernetes orchestration, and Red Hat Enterprise Linux administration. 
                  Proven track record in implementing robust monitoring solutions and automating deployment processes for enterprise-level applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
