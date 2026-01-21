"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Event, EventType } from "@/lib/types";
import placeholderData from "@/lib/placeholder-images.json";
import { Calendar } from "lucide-react";

const eventTypes: EventType[] = ["Competition", "Seminar", "Workshop", "Visit"];

export default function EventList({ events }: { events: Event[] }) {
  const searchParams = useSearchParams();
  const urlType = searchParams.get("type") as EventType | "All";

  const [filter, setFilter] = useState<EventType | "All">("All");

  // sync URL → state
  useEffect(() => {
    if (urlType && (urlType === "All" || eventTypes.includes(urlType))) {
      setFilter(urlType);
    }
  }, [urlType]);

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
    <Card className="flex flex-col">
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
      <CardContent className="flex-grow flex flex-col justify-end">
        <div className="flex items-center justify-between text-sm text-muted-foreground gap-2 font-mono mt-4">
            <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4"/>
                <span>{event.date}</span>
            </div>
            <Badge variant="secondary">{event.type}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
