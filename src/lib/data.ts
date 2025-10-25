import type { Event, TeamMember, Project, NavItem } from "./types";

export const navItems: NavItem[] = [
  { title: "About", href: "/about" },
  { title: "Events", href: "/events" },
  { title: "Team", href: "/team" },
  { title: "Projects", href: "/projects" },
  { title: "Gallery", href: "/gallery" },
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
  },
  {
    name: "Dr. Arvind Kumar",
    role: "Faculty Coordinator",
    position: "Faculty Advisor",
    bio: "Providing mentorship and support for all technical activities.",
    image: "team-faculty-2",
  },
  {
    name: "Rohan Sharma",
    role: "Core Team",
    position: "President",
    bio: "Leads the society's vision and manages overall operations.",
    image: "team-core-1",
  },
  {
    name: "Priya Singh",
    role: "Core Team",
    position: "Vice President",
    bio: "Assists the President and oversees event management.",
    image: "team-core-3",
  },
  {
    name: "Amit Patel",
    role: "Core Team",
    position: "Technical Head",
    bio: "Manages all technical projects and workshops for the society.",
    image: "team-core-2",
  },
  {
    name: "Sunita Williams",
    role: "Core Team",
    position: "Marketing Head",
    bio: "Handles social media presence and outreach programs.",
    image: "team-core-4",
  },
  {
    name: "John Doe",
    role: "Member",
    position: "Web Developer",
    bio: "Passionate about building beautiful and functional web applications.",
    image: "team-core-2",
  },
  {
    name: "Jane Smith",
    role: "Member",
    position: "AI/ML Enthusiast",
    bio: "Exploring the frontiers of artificial intelligence and machine learning.",
    image: "team-core-3",
  },
];

export const projects: Project[] = [
  {
    title: "Jarvis AI Assistant",
    description: "A voice-controlled AI assistant inspired by Iron Man's Jarvis, built using Python.",
    tags: ["AI", "Python", "NLP"],
    image: "project-jarvis",
    githubLink: "https://github.com",
  },
  {
    title: "Contract Farming Project",
    description: "A web platform to connect farmers and corporations for contract farming, streamlining the agricultural supply chain.",
    tags: ["Web", "React", "Node.js", "Firebase"],
    image: "project-contract-farming",
    githubLink: "https://github.com",
  },
  {
    title: "Calcy",
    description: "A modern, feature-rich calculator application for desktop with a sleek, intuitive UI.",
    tags: ["Desktop", "Python", "GUI"],
    image: "project-calcy",
    githubLink: "https://github.com",
  },
];

export const galleryImages = [
  "gallery-1", "gallery-2", "gallery-3", "gallery-4",
  "gallery-5", "gallery-6", "gallery-7", "gallery-8"
];
