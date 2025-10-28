import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowRight, Star, Calendar, Quote, Trophy } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/icons";
import { reviews, events, team, quotes } from "@/lib/data";
import placeholderData from "@/lib/placeholder-images.json";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

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
  const memberOfTheMonth = team.find(member => member.position === "President");
  const memberImage = placeholderData.placeholderImages.find(p => p.id === memberOfTheMonth?.image);
  const highlightedEvents = events.slice(0, 3);
  
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
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter font-headline md:text-4xl/tight">
              Highlighted Events
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-mono">
              Check out some of our exciting upcoming events.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {highlightedEvents.map((event) => {
              const eventImage = placeholderData.placeholderImages.find(p => p.id === event.image);
              return (
                <Card key={event.title}>
                  {eventImage && (
                    <div className="relative h-40 w-full">
                       <Image src={eventImage.imageUrl} alt={event.title} fill className="rounded-t-lg object-cover" data-ai-hint={eventImage.imageHint} />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground gap-2 font-mono pt-2">
                        <Calendar className="h-4 w-4"/>
                        <span>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{event.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Badge variant="secondary">{event.type}</Badge>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      <section className="w-full pb-20 md:pb-32 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter font-headline md:text-4xl/tight">
              Member of the Month
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-mono">
              Celebrating the outstanding contributions of our members.
            </p>
          </div>
          {memberOfTheMonth && (
            <Card className="max-w-2xl mx-auto overflow-hidden">
                <div className="grid md:grid-cols-2 items-center">
                    <div className="relative h-64 md:h-full w-full">
                        {memberImage && (
                            <Image src={memberImage.imageUrl} alt={memberOfTheMonth.name} fill className="object-cover" data-ai-hint={memberImage.imageHint} />
                        )}
                    </div>
                    <div className="p-6">
                        <Trophy className="h-10 w-10 text-yellow-400 mb-4" />
                        <h3 className="font-headline text-2xl font-bold">{memberOfTheMonth.name}</h3>
                        <p className="text-primary font-semibold">{memberOfTheMonth.position}</p>
                        <p className="font-mono text-muted-foreground mt-4 text-sm">{memberOfTheMonth.bio}</p>
                        <Button asChild variant="link" className="px-0 mt-2">
                            <Link href="/team">Meet the whole team <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </div>
                </div>
            </Card>
          )}
        </div>
      </section>

      <section className="w-full pb-20 md:pb-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter font-headline md:text-4xl/tight">
              Wisdom from the Digital Frontier
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-mono">
              A few words of inspiration for the journey ahead.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
             {quotes.map((q, index) => (
                <Card key={index} className="flex flex-col">
                  <CardContent className="p-6 flex-grow">
                      <Quote className="h-8 w-8 text-primary/50 mb-4" />
                      <p className="font-mono text-muted-foreground italic">"{q.quote}"</p>
                  </CardContent>
                  <CardFooter>
                      <p className="font-bold text-sm text-foreground">{q.author}</p>
                  </CardFooter>
                </Card>
             ))}
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

    