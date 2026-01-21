"use client";

import { Terminal } from "lucide-react";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "2020",
    title: "Society Founded",
    description: "TechAthon was established by a group of passionate students.",
  },
  {
    year: "2021",
    title: "First Hackathon",
    description: "Hosted our first-ever 24-hour hackathon, 'CodeBreak 1.0'.",
  },
  {
    year: "2022",
    title: "Industry Collaboration",
    description: "Partnered with a leading tech company for a series of workshops.",
  },
  {
    year: "2023",
    title: "National Level Competition",
    description: "Won first prize at a national-level inter-college tech fest.",
  },
  {
    year: "2024",
    title: "Expansion",
    description: "Launched two new project verticals: AI/ML and Cybersecurity.",
  },
];

export function Timeline() {
  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" />

      {timelineEvents.map((event, index) => {
        const isRight = index % 2 === 0;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className={`relative mb-10 flex items-center w-full ${
              isRight ? "flex-row-reverse" : ""
            }`}
          >
            {/* Empty side */}
            <div className="w-1/2" />

            {/* Center icon */}
            <div className="absolute left-1/2 -translate-x-1/2 z-10">
              <div className="bg-background border-2 border-primary rounded-full p-2">
                <Terminal className="h-5 w-5 text-primary" />
              </div>
            </div>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, x: isRight ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="w-1/2 px-4"
            >
              <div
                className={`p-4 rounded-lg bg-secondary/60 border border-border ${
                  isRight ? "text-right" : "text-left"
                }`}
              >
                <p className="font-headline text-primary text-lg font-bold">
                  {event.year}
                </p>
                <h3 className="font-bold text-lg mb-1">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground font-mono">
                  {event.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
