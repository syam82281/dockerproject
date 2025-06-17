
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal, Zap } from "lucide-react";

export const SkillsSection = () => {
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

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technical Expertise
          </h2>
          <p className="mt-4 text-lg text-gray-200">
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
  );
};
