import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Education() {
  return (
    <section id="education" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Education</h2>
        <p className="text-lg text-muted-foreground mb-12">My academic background and achievements</p>

        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/20 hidden md:block"></div>

          <TimelineCard
            title="Bachelor of Science: Mathematics with a Specialization in Computing"
            institution="University of California Los Angeles"
            year="2022-2026"
            description="Courses & Extracurriculars: Software Construction, Logical Designs of Digital Systems, AI/Tech Seminar, Undergraduate Mathematics Students Association, ConnectEd Club (Marketing Officer), One Love Foundation, Snow and Board Club "
          />

          <TimelineCard
            title="High School Diploma"
            institution="Santa Rosa High School"
            year="2018-2022"
            description="Honors: James Fleck Top Math Student Scholarship Recipient 2022, Ranked 2nd in Class, Honor Roll 2016-2022, Summa Cum Laude 2018-2022, Student of the Quarter, Scholar Athlete 2016-2022, Mathletes Competition Winner, Math Department Award 2019 "
          />
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ title, institution, year, description }: {
  title: string;
  institution: string;
  year: string;
  description: string;
}) {
  return (
    <div className="relative grid md:grid-cols-[2rem_1fr] gap-6 md:gap-8">
      {/* Timeline dot */}
      <div className="hidden md:flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-primary"></div>
      </div>

      <Card className="transform transition-all hover:-translate-y-1 hover:shadow-lg">
        <CardHeader>
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <CardTitle className="text-xl mb-1">{title}</CardTitle>
              <div className="text-primary font-medium">{institution}</div>
            </div>
            <Badge variant="secondary" className="shrink-0">{year}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
}