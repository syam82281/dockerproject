
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Code, Database, Terminal, Globe, Shield, Zap, GitBranch } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Enterprise AWS Multi-Tier Architecture",
      description: "Designed and implemented a highly scalable 3-tier web application architecture on AWS supporting 10,000+ concurrent users with 99.9% uptime. Features auto-scaling groups, load balancing, and multi-AZ RDS deployment for high availability and disaster recovery.",
      tech: ["AWS EC2", "RDS", "ALB", "Auto Scaling", "CloudFormation", "Route 53", "CloudFront"],
      icon: <Globe className="h-6 w-6" />,
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-500/20 to-indigo-500/20",
      borderColor: "border-purple-500/30",
      metrics: ["99.9% Uptime", "10K+ Users", "50% Cost Reduction"]
    },
    {
      title: "Automated CI/CD Pipeline Platform",
      description: "Built comprehensive CI/CD pipelines using AWS CodePipeline, CodeBuild, and CodeDeploy with automated testing, security scanning, and zero-downtime deployments. Integrated with Slack for notifications and implemented rollback mechanisms.",
      tech: ["CodePipeline", "CodeBuild", "Docker", "Jenkins", "Terraform", "SonarQube", "Slack API"],
      icon: <GitBranch className="h-6 w-6" />,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      metrics: ["80% Faster Deployments", "Zero Downtime", "95% Test Coverage"]
    },
    {
      title: "Kubernetes Container Orchestration",
      description: "Deployed and managed production Kubernetes clusters on AWS EKS with advanced monitoring, centralized logging, and automated scaling. Implemented Helm charts for application deployment and integrated with Prometheus and Grafana for comprehensive observability.",
      tech: ["EKS", "Docker", "Kubernetes", "Helm", "Prometheus", "Grafana", "Fluentd", "Istio"],
      icon: <Database className="h-6 w-6" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      metrics: ["40% Resource Optimization", "5 Min Scaling", "24/7 Monitoring"]
    },
    {
      title: "Infrastructure as Code Framework",
      description: "Automated infrastructure provisioning using Terraform and CloudFormation for consistent, reproducible deployments across multiple environments. Implemented GitOps workflow with automated compliance checking and cost optimization.",
      tech: ["Terraform", "CloudFormation", "Ansible", "Shell Scripting", "Git", "AWS Config"],
      icon: <Terminal className="h-6 w-6" />,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30",
      metrics: ["90% Automation", "Consistent Deployments", "30% Cost Savings"]
    },
    {
      title: "Enterprise Security & Compliance Platform",
      description: "Implemented comprehensive security framework with automated vulnerability scanning, compliance monitoring, and incident response. Features include SIEM integration, automated patching, and security policy enforcement across cloud infrastructure.",
      tech: ["AWS Security Hub", "GuardDuty", "Inspector", "CloudTrail", "Splunk", "Nessus"],
      icon: <Shield className="h-6 w-6" />,
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-500/20 to-pink-500/20",
      borderColor: "border-red-500/30",
      metrics: ["100% Compliance", "Zero Security Incidents", "Real-time Monitoring"]
    },
    {
      title: "High-Performance Monitoring Stack",
      description: "Built enterprise-grade monitoring and alerting system using Prometheus, Grafana, and ELK stack. Features custom dashboards, intelligent alerting, and automated remediation for common issues. Supports multi-cloud environments.",
      tech: ["Prometheus", "Grafana", "Elasticsearch", "Logstash", "Kibana", "AlertManager"],
      icon: <Zap className="h-6 w-6" />,
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30",
      metrics: ["Sub-second Response", "99.95% Accuracy", "Proactive Alerts"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-purple-900/30 to-slate-900/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Real-world DevOps implementations and infrastructure projects that demonstrate expertise in 
            cloud architecture, automation, and enterprise-scale solutions with measurable business impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`stagger-card bg-gradient-to-br ${project.bgGradient} backdrop-blur-sm border ${project.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`bg-gradient-to-r ${project.gradient} rounded-lg p-2 group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <span className="text-white text-lg">{project.title}</span>
                </CardTitle>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className={`border ${project.borderColor} text-white hover:scale-105 transition-all duration-200 bg-gradient-to-r ${project.bgGradient}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Project Metrics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.metrics.map((metric) => (
                    <span key={metric} className="text-xs bg-white/10 text-white px-2 py-1 rounded-full">
                      {metric}
                    </span>
                  ))}
                </div>

                <Button variant="outline" size="sm" className={`group-hover:bg-gradient-to-r ${project.gradient} group-hover:text-white group-hover:border-transparent transition-all duration-300 text-white ${project.borderColor}`}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Case Study
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
