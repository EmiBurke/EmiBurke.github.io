import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Mail, Phone, MapPin } from "lucide-react";


const skills = [
  { name: "Weight Lifting", level: 85 },
  { name: "Running", level: 25 },
  { name: "Outdoors", level: 95 },
  { name: "Building", level: 80 },
  { name: "Crafting", level: 85 },
];

const technologies = [
  "Microsoft Office (Excel, Word, Co-Pilot)", "Google Productivity (Sheets, Drive, Cloud)", "Version Control (Git, GitHub)", "Web Development (Firebase, Bootstrap, React, Node.js)", "SaaS", "Cloud Computing (AWS, Azure, Google Cloud Platform)", "Python", "C", "C++", "HTML", "CSS", "JavaScript", "Java", "Linux", "MacOS", "Windows", "Git", "GitHub" 

];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-8">More About Me</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>burke.emi@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+1 (707) 327-9941</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Santa Rosa, CA</span>
              </div>
            </div>

            <div className="mt-6">
              <img
                src="/static/view.JPG"
                alt="view"
                className="rounded-lg"
                width={300}
                height={200
                }
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Skills and Technology</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
