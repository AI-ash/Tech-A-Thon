import { PageHeader } from "@/components/page-header";
import { Timeline } from "@/components/about/timeline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import placeholderData from "@/lib/placeholder-images.json";

const vision = [
  "To foster a culture of innovation and collaboration.",
  "To bridge the gap between academia and industry.",
  "To empower students with cutting-edge technical skills.",
  "To create a platform for students to showcase their talent.",
];

export default function AboutPage() {
  const heroImage = placeholderData.placeholderImages.find(
    (p) => p.id === "hero-background"
  );
  return (
    <>
      <PageHeader
        title="About Us"
        description="We are TechAthon, the official Computer Science Department Society of Atma Ram Sanatan Dharma College. Our purpose is to inspire, innovate, and build the future of technology, one project at a time."
      />
      <section className="container pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="font-headline text-2xl md:text-3xl font-bold">
              Our Vision & Mission
            </h2>
            <p className="text-muted-foreground font-mono">
              At TechAthon, we are driven by a passion for technology and a
              commitment to excellence. We aim to provide a dynamic environment
              where students can learn, collaborate, and grow as tech
              enthusiasts and future professionals.
            </p>
            <ul className="space-y-3">
              {vision.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="font-mono text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-lg">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>
        </div>
      </section>

      <section className="container pb-16 md:pb-24">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold">Our Journey</h2>
          <p className="text-muted-foreground font-mono mt-2">
            A timeline of our major milestones and achievements.
          </p>
        </div>
        <Timeline />
      </section>
    </>
  );
}
