import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-xl font-bold">
            Emery Burke's Portfolio
          </a>

          <div className="hidden md:flex space-x-6">
            <Button variant="ghost" size="lg" asChild>
              <a href="#about">About</a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="#education">Education</a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="#experience">Experience</a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="#projects">Upcoming</a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="#skills">Additional</a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="#skills">Contact</a>
            </Button>
          </div>

          <Button size="lg" className="md:hidden">Menu</Button>
        </div>
      </div>
    </nav>
  );
}