"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import type { Event, EventType } from "@/lib/types";
import placeholderData from "@/lib/placeholder-images.json";
import { Calendar, GalleryHorizontal } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { galleryImages } from "@/lib/data";

const eventTypes: EventType[] = ["Competition", "Seminar", "Workshop", "Visit"];

export default function EventList({ events }: { events: Event[] }) {
  const [filter, setFilter] = useState<EventType | "All">("All");

  const filteredEvents =
    filter === "All" ? events : events.filter((event) => event.type === filter);

  return (
    <div>
      <div className="flex justify-center mb-8">
        <div className="p-1.5 bg-secondary rounded-lg flex items-center gap-2">
          <Button
            variant={filter === "All" ? "default" : "ghost"}
            onClick={() => setFilter("All")}
            className="rounded-md"
          >
            All
          </Button>
          {eventTypes.map((type) => (
            <Button
              key={type}
              variant={filter === type ? "default" : "ghost"}
              onClick={() => setFilter(type)}
              className="rounded-md"
            >
              {type}
            </Button>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <EventCard key={event.title} event={event} />
        ))}
      </div>
    </div>
  );
}

function EventCard({ event }: { event: Event }) {
  const eventImage = placeholderData.placeholderImages.find(p => p.id === event.image);

  return (
    <Card>
      <CardHeader>
        {eventImage && (
          <div className="relative h-48 w-full mb-4">
            <Image
              src={eventImage.imageUrl}
              alt={event.title}
              fill
              className="rounded-t-lg object-cover"
              data-ai-hint={eventImage.imageHint}
            />
          </div>
        )}
        <CardTitle>{event.title}</CardTitle>
        <CardDescription>{event.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-muted-foreground gap-2 font-mono">
            <Calendar className="h-4 w-4"/>
            <span>{event.date}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Badge variant="secondary">{event.type}</Badge>
        <EventGalleryDialog />
      </CardFooter>
    </Card>
  );
}

function EventGalleryDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                    <GalleryHorizontal className="mr-2 h-4 w-4" />
                    View Gallery
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
                <DialogHeader>
                    <DialogTitle>Event Highlights</DialogTitle>
                    <DialogDescription>
                        A glimpse into the event.
                    </DialogDescription>
                </DialogHeader>
                <Carousel>
                    <CarouselContent>
                        {galleryImages.slice(0, 5).map(id => {
                            const image = placeholderData.placeholderImages.find(p => p.id === id);
                            return image ? (
                                <CarouselItem key={id}>
                                    <div className="relative h-96 w-full">
                                        <Image src={image.imageUrl} alt={image.description} fill className="object-cover rounded-lg" data-ai-hint={image.imageHint} />
                                    </div>
                                </CarouselItem>
                            ) : null
                        })}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </DialogContent>
        </Dialog>
    )
}
