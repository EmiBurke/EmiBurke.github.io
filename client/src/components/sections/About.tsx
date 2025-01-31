import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { Download } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Hi, I'm Emery Burke
                </h1>
                <h2 className="text-2xl text-muted-foreground">
                  Applied Mathematics Student at UCLA
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                A 3rd year Mathematics student with a specialization in computing and a passion for sales.
              </p>

              <div className="flex gap-4">
                <Button size="lg" className="gap-2">
                  <FileDown className="h-4 w-4" />
                  <a href="/static/Resume_Burke_Emery.pdf" download="burke_emery_resume.pdf">
                    Download Resume
                  </a>
                </Button>
                 <Button size="lg" variant="outline" asChild>
                  <a href="#skills">Get in Touch</a>
                </Button>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <Card className="relative overflow-hidden rounded-2xl border-2 border-primary/20">
                <CardContent className="p-0">
                  <img
                    src="/static/headshot.jpg"
                    alt="Headshot"
                    className="rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}