import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Summer 2025 Internship",
    description: "Looking forward to a fabulous summer with Paycom as a Junior Executive Sales Intern! Paycom is a cloud-based human resource (HR) and payroll software company that offers services for businesses of all sizes.",
    image: "/static/Paycom.png",
    technologies: ["Sales", "Tech", "Intern"],
    demo: "https://www.paycom.com/"
  },
  {
    title: "June 2026 Graduation",
    description: "I am scheduled to graduate in the summer of next year. One more year of upper division Mathematics and Computer Science courses before I enter the job market and post grad life.",
    image: "/static/ucla_grad.avif",
    technologies: ["Graduation", "UCLA", "Bachelor of Science"],
    demo: "https://ucla.edu/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Upcoming Adventures
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          A look towards the future
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Site
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
