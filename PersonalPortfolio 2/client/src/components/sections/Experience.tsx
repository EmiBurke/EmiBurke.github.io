import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>First-Tier Technology Consultant</CardTitle>
              <Badge>2024-Present</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-medium mb-2">UCLA ANDERSON SCHOOL OF MANAGEMENT</h4>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Provide technical support, troubleshooting, and ensuring smooth operations for 2.5k people
</li>
              <li>Lead training and hiring of new employees, resulting in an increase of 33% in productivity
              </li>
              <li>Awarded “Most Valuable Player” and “Wizard” for effective & efficient team contribution </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Tier I AI Writing and Mathematics Evaluator </CardTitle>
              <Badge>2024-Present</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-medium mb-2">OUTLIER AI</h4>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Promoted for excellence of contribution and evaluated at overall 4.9/5 in response quality 
</li>
              <li>Critique, correct, and advise Second Tier contributors to strengthen integrity of responses </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Tier II AI Writing Evaluator </CardTitle>
              <Badge>2024-2024</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-medium mb-2">OUTLIER AI</h4>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Trained Large Language Models to distinguish between adversarial and borderline prompts 
        </li>
              <li>Provided high-quality analysis and feedback to the large language model in a project-based setting to strengthen virtual assistant functions and improve safety features prior to release  </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Regional Pre-Sales Specialist </CardTitle>
              <Badge>2023-2024</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-medium mb-2">MPWR</h4>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Led door-to-door sales effort culminating in $500k in closed sales within an 8-week span
        </li>
              <li>Generated substantial Solar Power sales for homeowners in the Saint Louis region 
             </li>
              <li>Qualified, prepped, and scheduled homeowners for closing sessions with sales managers 
              </li>
              <li>Awarded for greatly outperforming quota 5 out of 8 weeks of the summer sales program </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Counselor & Learning Hub Leader
</CardTitle>
              <Badge>2020-2022</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-medium mb-2">CITY OF SANTA ROSA RECREATION AND PARKS   </h4>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Supervised and led groups of twenty elementary school children through daily activities</li>
               <li> Awarded “Counselor of the Week” in 2021 and 2022 for initiative and a positive attitude </li>
                <li>Led schooling group for a program for learning-disabled and underprivileged K-6 kids </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
