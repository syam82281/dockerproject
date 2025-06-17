
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
          Let's Build Something Amazing Together
        </h2>
        <p className="text-lg text-gray-200 mb-12">
          Ready to optimize your infrastructure and streamline your deployment processes? Let's discuss how I can help.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="mailto:syamprasa27@gmail.com"
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              <Mail className="mr-2 h-5 w-5" />
              syamprasa27@gmail.com
            </Button>
          </a>
          <div className="flex flex-col gap-2">
            <a
              href="tel:7842663221"
              className="inline-flex items-center justify-center px-6 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 transition-colors duration-200 shadow"
            >
              <span className="font-semibold mr-2">Contact:</span>
              7842663221
            </a>
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com/your-github-username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Button variant="outline" size="lg" className="border-gray-300 hover:bg-gray-50 transition-all duration-300">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://linkedin.com/in/syam-prasad-543369285"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Button variant="outline" size="lg" className="border-gray-300 hover:bg-gray-50 transition-all duration-300">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
