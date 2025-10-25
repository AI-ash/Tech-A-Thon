import { PageHeader } from "@/components/page-header";
import { projects } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import placeholderData from "@/lib/placeholder-images.json";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github } from "lucide-react";

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        description="A showcase of our passion for technology and problem-solving. Explore the innovative projects built by our talented members."
      />
      <section className="container pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                {(() => {
                  const projectImage = placeholderData.placeholderImages.find(p => p.id === project.image);
                  return projectImage ? (
                    <div className="relative h-48 w-full mb-4">
                      <Image
                        src={projectImage.imageUrl}
                        alt={project.title}
                        fill
                        className="rounded-t-lg object-cover"
                        data-ai-hint={projectImage.imageHint}
                      />
                    </div>
                  ) : null;
                })()}
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="font-mono">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={project.githubLink} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
