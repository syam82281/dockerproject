
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

export const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "University Name",
      year: "2020-2024",
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
    <section className="py-20 px-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Education & Certifications
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            My academic background and professional certifications
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {education.map((item, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
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
                    <div className="text-lg font-bold">{item.degree}</div>
                    <div className="text-sm text-gray-600">{item.field}</div>
                  </div>
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-base">
                  <Calendar className="h-4 w-4" />
                  {item.year} • {item.institution}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{item.description}</p>
                <Badge 
                  variant="outline" 
                  className={`mt-3 ${item.type === 'degree' ? 'border-purple-200 text-purple-700 hover:bg-purple-50' : 'border-emerald-200 text-emerald-700 hover:bg-emerald-50'} transition-colors duration-200`}
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
