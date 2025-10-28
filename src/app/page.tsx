import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Mail, Newspaper, Star } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/icons";
import { reviews } from "@/lib/data";
import placeholderData from "@/lib/placeholder-images.json";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const keywords = [
  "AI", "Web Dev", "Coding", "Hackathons", "Cybersecurity",
  "React", "Python", "Node.js", "Cloud", "DevOps",
  "Machine Learning", "Data Science", "UI/UX", "Blockchain"
];

function ScrollingKeywords() {
  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-transparent to-background" />
      <div className="flex animate-scroll">
        {[...keywords, ...keywords].map((keyword, index) => (
          <span
            key={index}
            className="mx-4 text-sm font-mono tracking-widest text-muted-foreground whitespace-nowrap"
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const memberOfTheMonthImage = placeholderData.placeholderImages.find(p => p.id === 'team-core-1');
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      <section className="w-full py-20 md:py-32 lg:py-40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="relative">
              <Logo className="h-24 w-24 text-primary glow" />
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none glitch-text" data-text="TechAthon">
              TechAthon
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl font-mono">
              Think. Build. Evolve.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/join-us">Join The Mission <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/events">Explore Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-20 md:pb-32">
        <div className="container px-4 md:px-6">
          <ScrollingKeywords />
        </div>
      </section>

      <section className="w-full pb-20 md:pb-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter font-headline md:text-4xl/tight">
              Get Involved
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-mono">
              Stay updated with our latest activities and opportunities.
            </p>
          </div>
          <div className="mx-auto grid max-w-sm gap-4 sm:max-w-none sm:grid-cols-2 lg:grid-cols-2">
            <Card className="group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Newspaper className="text-primary"/> Member of the Month
                </CardTitle>
                <CardDescription>
                  Celebrating our outstanding community members.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-24 h-24 mb-4 border-4 border-transparent group-hover:border-primary transition-colors">
                    {memberOfTheMonthImage && <AvatarImage src={memberOfTheMonthImage.imageUrl} alt="Rohan Sharma" data-ai-hint={memberOfTheMonthImage.imageHint} />}
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                  <h4 className="font-bold">Rohan Sharma</h4>
                  <p className="text-sm text-muted-foreground font-mono">President</p>
                  <p className="text-xs text-muted-foreground font-mono mt-2 italic">"For exceptional leadership and dedication."</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="text-primary"/> Subscribe to our Newsletter
                </CardTitle>
                <CardDescription>
                  Get the latest news and event updates directly in your inbox.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex space-x-2">
                  <Input type="email" placeholder="Enter your email" className="flex-1" />
                  <Button type="submit">Subscribe</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full pb-20 md:pb-32 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter font-headline md:text-4xl/tight">
              What Our Members Say
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-mono">
              Hear from the people who make our community great.
            </p>
          </div>
          <div className="grid gap-6 mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => {
              const reviewerImage = placeholderData.placeholderImages.find(p => p.id === review.image);
              return (
                <Card key={review.name}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        {reviewerImage && <AvatarImage src={reviewerImage.imageUrl} alt={review.name} data-ai-hint={reviewerImage.imageHint} />}
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">{review.name}</CardTitle>
                        <CardDescription className="text-sm">{review.position}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-mono text-muted-foreground italic">"{review.review}"</p>
                    <div className="flex mt-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
