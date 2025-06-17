
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Code, Database, Terminal, Globe } from "lucide-react";

export const ProjectsSection = () => {
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
    <section className="py-20 px-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-200">
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
  );
};
