import type { Event, TeamMember, Project, NavItem, Review, Quote } from "./types";

export const navItems: NavItem[] = [
  { title: "About", href: "/about" },
  { title: "Events", href: "/events" },
  { title: "Team", href: "/team" }, 
  { title: "Contact", href: "/contact" },
];

export const events: Event[] = [
  {
    title: "Hack-A-Thon 5.0",
    date: "2024-10-26",
    description: "A 24-hour coding marathon to build innovative solutions.",
    type: "Competition",
    image: "event-hackathon",
  },
  {
    title: "Intro to Generative AI",
    date: "2024-09-15",
    description: "A seminar on the fundamentals and applications of Generative AI.",
    type: "Seminar",
    image: "event-seminar",
  },
  {
    title: "React Hooks Workshop",
    date: "2024-08-22",
    description: "A hands-on workshop covering advanced React Hooks patterns.",
    type: "Workshop",
    image: "event-workshop",
  },
  {
    title: "Pitchcraft: Idea to MVP",
    date: "2024-07-30",
    description: "Learn how to pitch your tech ideas effectively and build a minimum viable product.",
    type: "Competition",
    image: "event-pitchcraft",
  },
  {
    title: "Poster Making Contest",
    date: "2024-06-18",
    description: "A creative competition to design tech-themed posters.",
    type: "Competition",
    image: "event-poster",
  },
  {
    title: "Visit to Google HQ",
    date: "2024-05-10",
    description: "An industrial visit to the Google campus for selected members.",
    type: "Visit",
    image: "event-seminar",
  },
];

export const team: TeamMember[] = [
  {
    name: "Dr. Anamika Gupta",
    role: "Faculty Coordinator",
    position: "Faculty Head",
    bio: "Guiding the society with years of academic and research experience.",
    image: "team-faculty-1",
    email: "example@gmail.com",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Dr. Arvind Kumar",
    role: "Faculty Coordinator",
    position: "Faculty Advisor",
    bio: "Providing mentorship and support for all technical activities.",
    image: "team-faculty-2",
    email: "example@gmail.com",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Rohan Sharma",
    role: "Core Team",
    position: "President",
    bio: "Leads the society's vision and manages overall operations.",
    image: "team-core-1",
    email: "example@gmail.com",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Priya Singh",
    role: "Core Team",
    position: "Vice President",
    bio: "Assists the President and oversees event management.",
    image: "team-core-3",
    email: "example@gmail.com",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Amit Patel",
    role: "Core Team",
    position: "Technical Head",
    bio: "Manages all technical projects and workshops for the society.",
    image: "team-core-2",
    email: "example@gmail.com",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Sunita Williams",
    role: "Core Team",
    position: "Marketing Head",
    bio: "Handles social media presence and outreach programs.",
    image: "team-core-4",
    email: "example@gmail.com",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "John Doe",
    role: "Member",
    position: "Web Developer",
    bio: "Passionate about building beautiful and functional web applications.",
    image: "team-core-2",
    email: "example@gmail.com",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Jane Smith",
    role: "Member",
    position: "AI/ML Enthusiast",
    bio: "Exploring the frontiers of artificial intelligence and machine learning.",
    image: "team-core-3",
    email: "example@gmail.com",
    linkedin: "https://linkedin.com/in/username",
  },
];

export const galleryImages = [
  "gallery-1", "gallery-2", "gallery-3", "gallery-4",
  "gallery-5", "gallery-6", "gallery-7", "gallery-8"
];


export const quotes: Quote[] = [
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    quote: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House"
  },
  {
    quote: "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",
    author: "Bill Gates"
  }
];

    