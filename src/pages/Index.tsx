import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, Linkedin, ExternalLink, Award, Code, Database, Shield, Terminal, Globe, Zap } from "lucide-react";

const Index = () => {
  const awsSkills = [
    "EC2", "S3", "RDS", "Lambda", "CloudFormation", "ECS", "EKS", 
    "CloudWatch", "IAM", "VPC", "Route 53", "ALB/NLB", "Auto Scaling",
    "CodePipeline", "CodeBuild", "CodeDeploy", "Systems Manager"
  ];

  const linuxSkills = [
    "Red Hat",
    "Ubuntu", "CentOS",
    "Shell Scripting", "System Administration",
    "Docker", "Kubernetes", "Nginx", "Apache", "MySQL", "PostgreSQL",
    "Git", "Jenkins", "Ansible", "Terraform", "Monitoring & Logging"
  ];

  const projects = [
    {
      title: "AWS Multi-Tier Architecture",
      description: "Designed and implemented a scalable 3-tier web application architecture on AWS with auto-scaling, load balancing, and RDS for high availability.",
      tech: ["AWS EC2", "RDS", "ALB", "Auto Scaling", "CloudFormation"],
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Built comprehensive CI/CD pipelines using AWS CodePipeline, CodeBuild, and CodeDeploy for automated testing and deployment.",
      tech: ["CodePipeline", "CodeBuild", "Docker", "Jenkins", "Terraform"],
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Container Orchestration Platform",
      description: "Deployed and managed Kubernetes clusters on AWS EKS with monitoring, logging, and automated scaling capabilities.",
      tech: ["EKS", "Docker", "Kubernetes", "Helm", "Prometheus", "Grafana"],
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "Infrastructure as Code",
      description: "Automated infrastructure provisioning using Terraform and CloudFormation for consistent, reproducible deployments.",
      tech: ["Terraform", "CloudFormation", "Ansible", "Shell Scripting"],
      icon: <Terminal className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative px-6 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            {/* Profile Picture */}
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/e18abbcb-a9a8-490a-8111-1c6a9887eb40.png" 
                  alt="DevOps Engineer Profile" 
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white shadow-2xl"
                />
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full p-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            {/* User Name */}
            <h2 className="text-2xl font-bold text-gray-800 mb-1">
              Hi, I'm <span className="font-bold">k.syamprasad</span>
            </h2>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              DevOps Engineer
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Github className="mr-2 h-4 w-4" />
                View GitHub
              </Button>
            </div>
            {/* About Me Heading & Description moved here */}
            <h3 className="mt-10 text-xl font-bold text-gray-900">
              About Me
            </h3>
            <p className="mt-2 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Passionate about building scalable, secure, and automated infrastructure solutions using AWS cloud services and Linux systems. 
              Specializing in CI/CD pipelines, containerization, and infrastructure as code.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Technical Expertise
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Proficient in modern DevOps tools and cloud technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* AWS Skills */}
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg p-2">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  AWS Services
                </CardTitle>
                <CardDescription>
                  Comprehensive experience with Amazon Web Services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {awsSkills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 hover:from-orange-200 hover:to-orange-300 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Linux Skills */}
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-lg p-2">
                    <Terminal className="h-6 w-6 text-white" />
                  </div>
                  Linux & DevOps Tools
                </CardTitle>
                <CardDescription>
                  Experienced with <span className="font-semibold text-green-700">Red Hat Enterprise Linux</span> administration, automation, and integration in DevOps environments, plus extensive system administration and automation expertise.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {linuxSkills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className={`bg-gradient-to-r from-green-100 to-green-200 text-green-800 hover:from-green-200 hover:to-green-300 transition-all duration-200 cursor-default ${skill === "Red Hat" ? "ring-2 ring-red-500 font-semibold" : ""}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-white/30 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Some of my recent DevOps implementations and infrastructure projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg p-2 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                      {project.icon}
                    </div>
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="border-blue-200 text-blue-700 hover:bg-blue-50 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Ready to optimize your infrastructure and streamline your deployment processes? Let's discuss how I can help.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Mail className="mr-2 h-5 w-5" />
              contact@devopsexpert.com
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="border-gray-300 hover:bg-gray-50 transition-all duration-300">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 hover:bg-gray-50 transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-gray-600">
              © 2024 DevOps Portfolio. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Deployed on AWS with automated CI/CD pipeline
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
