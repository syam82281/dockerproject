
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

export const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Information Technology",
      institution: "Usha Ram Engineering and Technology",
      year: "2021-2026",
      description: "Focused on software engineering, system design, and DevOps fundamentals",
      type: "degree"
    },
    {
      degree: "AWS Certified Solutions Architect",
      field: "Associate Level",
      institution: "Amazon Web Services",
      year: "2023",
      description: "Validated expertise in designing distributed systems on AWS",
      type: "certification"
    },
    {
      degree: "Red Hat Certified System Administrator",
      field: "RHCSA",
      institution: "Red Hat",
      year: "2022",
      description: "Demonstrated skills in Linux system administration and automation",
      type: "certification"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-800/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-green-600 to-emerald-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            My academic background and professional certifications
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {education.map((item, index) => (
            <Card key={index} className="bg-white/90 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`${item.type === 'degree' ? 'bg-gradient-to-r from-purple-500 to-purple-700' : 'bg-gradient-to-r from-emerald-500 to-emerald-700'} rounded-lg p-2 group-hover:scale-110 transition-transform duration-300`}>
                    {item.type === 'degree' ? (
                      <GraduationCap className="h-6 w-6 text-white" />
                    ) : (
                      <Award className="h-6 w-6 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{item.degree}</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">{item.field}</div>
                  </div>
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-base text-gray-700 dark:text-gray-300">
                  <Calendar className="h-4 w-4" />
                  {item.year} • {item.institution}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 dark:text-gray-200">{item.description}</p>
                <Badge 
                  variant="outline" 
                  className={`mt-3 ${item.type === 'degree' ? 'border-purple-200 text-purple-700 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400' : 'border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400'} transition-colors duration-200`}
                >
                  {item.type === 'degree' ? 'Academic Degree' : 'Professional Certification'}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
