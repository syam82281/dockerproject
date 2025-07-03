
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal, Zap, Cloud, Database, Shield, Cpu } from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "AWS Cloud Services",
      icon: <Cloud className="h-6 w-6 text-white" />,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-100/80 dark:from-orange-500/20 to-red-100/80 dark:to-red-500/20",
      borderColor: "border-orange-300 dark:border-orange-500/30",
      skills: [
        "EC2", "S3", "RDS", "Lambda", "CloudFormation", "ECS", "EKS", 
        "CloudWatch", "IAM", "VPC", "Route 53", "ALB/NLB", "Auto Scaling",
        "CodePipeline", "CodeBuild", "CodeDeploy", "Systems Manager"
      ]
    },
    {
      title: "Linux & System Administration",
      icon: <Terminal className="h-6 w-6 text-white" />,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-100/80 dark:from-green-500/20 to-emerald-100/80 dark:to-emerald-500/20",
      borderColor: "border-green-300 dark:border-green-500/30",
      skills: [
        "Red Hat Enterprise Linux", "Ubuntu", "CentOS", "Shell Scripting", 
        "System Administration", "Performance Tuning", "Security Hardening",
        "Network Configuration", "Log Management", "Backup & Recovery"
      ]
    },
    {
      title: "DevOps & Automation",
      icon: <Zap className="h-6 w-6 text-white" />,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-100/80 dark:from-purple-500/20 to-pink-100/80 dark:to-pink-500/20",
      borderColor: "border-purple-300 dark:border-purple-500/30",
      skills: [
        "Docker", "Kubernetes", "Jenkins", "GitLab CI/CD", "Ansible", 
        "Terraform", "Helm", "Prometheus", "Grafana", "ELK Stack"
      ]
    },
    {
      title: "Databases & Storage",
      icon: <Database className="h-6 w-6 text-white" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-100/80 dark:from-blue-500/20 to-cyan-100/80 dark:to-cyan-500/20",
      borderColor: "border-blue-300 dark:border-blue-500/30",
      skills: [
        "PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB",
        "Database Optimization", "Backup Strategies", "Replication"
      ]
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="h-6 w-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-100/80 dark:from-indigo-500/20 to-purple-100/80 dark:to-purple-500/20",
      borderColor: "border-indigo-300 dark:border-indigo-500/30",
      skills: [
        "IAM Policies", "SSL/TLS", "VPN Setup", "Security Auditing",
        "Vulnerability Assessment", "Compliance Frameworks"
      ]
    },
    {
      title: "Monitoring & Performance",
      icon: <Cpu className="h-6 w-6 text-white" />,
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-100/80 dark:from-yellow-500/20 to-orange-100/80 dark:to-orange-500/20",
      borderColor: "border-yellow-300 dark:border-yellow-500/30",
      skills: [
        "Prometheus", "Grafana", "Datadog", "New Relic", "CloudWatch",
        "Application Performance Monitoring", "Infrastructure Monitoring"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50/50 dark:bg-gradient-to-r dark:from-gray-900/50 dark:to-gray-800/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-green-600 to-emerald-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive experience across the DevOps ecosystem with hands-on expertise in modern cloud technologies, 
            automation tools, and enterprise-grade infrastructure management.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`stagger-card bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm border ${category.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className={`bg-gradient-to-r ${category.gradient} rounded-lg p-2 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <span className="text-gray-900 dark:text-white">{category.title}</span>
                </CardTitle>
                <CardDescription className="text-gray-700 dark:text-gray-300">
                  {category.title === "AWS Cloud Services" && "Comprehensive experience with Amazon Web Services"}
                  {category.title === "Linux & System Administration" && "Expert-level Linux administration with Red Hat specialization"}
                  {category.title === "DevOps & Automation" && "Modern DevOps practices and automation tools"}
                  {category.title === "Databases & Storage" && "Database management and optimization expertise"}
                  {category.title === "Security & Compliance" && "Security best practices and compliance frameworks"}
                  {category.title === "Monitoring & Performance" && "Comprehensive monitoring and performance optimization"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className={`bg-white/80 dark:bg-gradient-to-r dark:${category.bgGradient} text-gray-800 dark:text-white hover:scale-105 transition-all duration-200 cursor-default border ${category.borderColor}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
