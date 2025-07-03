
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Phone, MapPin, Calendar } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-slate-900/50 to-purple-900/50 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready to optimize your infrastructure and streamline your deployment processes? 
            I'm passionate about helping organizations achieve their DevOps goals through innovative solutions and best practices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form Side */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="h-5 w-5 text-purple-400" />
                  <span>syamprasa27@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="h-5 w-5 text-cyan-400" />
                  <span>+91 7842663221</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="h-5 w-5 text-green-400" />
                  <span>Available for Remote & On-site</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Calendar className="h-5 w-5 text-yellow-400" />
                  <span>Available for immediate start</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">What I Can Help With</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Cloud Infrastructure Design & Migration
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  CI/CD Pipeline Implementation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Container Orchestration & Kubernetes
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  Infrastructure Automation & Monitoring
                </li>
              </ul>
            </div>
          </div>

          {/* Action Buttons Side */}
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <a
                href="mailto:syamprasa27@gmail.com"
                className="block"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform w-full sm:w-auto"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
              </a>
              
              <a
                href="tel:7842663221"
                className="block"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-400 text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105 transform w-full sm:w-auto"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 7842663221
                </Button>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/your-github-username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Button variant="outline" size="lg" className="border-gray-400 text-gray-300 hover:bg-gray-600 hover:text-white transition-all duration-300 hover:scale-105 transform">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
              </a>
              <a
                href="https://linkedin.com/in/syam-prasad-543369285"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 transform">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </a>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl">
              <h4 className="text-green-400 font-semibold mb-2">Quick Response Guarantee</h4>
              <p className="text-gray-300 text-sm">
                I typically respond to all inquiries within 24 hours. 
                For urgent projects, feel free to call directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
