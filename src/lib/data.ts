import type { Event, TeamMember, NavItem, Review, Quote } from "./types";

export const navItems: NavItem[] = [
  { title: "About", href: "/about" },
  { title: "Events", href: "/events" },
  { title: "Team", href: "/team" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact", href: "/contact" },
];

export const events: Event[] = [
  {
    title: "C-DAC VISIT'25",
    date: "2025-11-13",
    description: "An educational visit to C-DAC Noida, giving students real-world exposure to indigenous research, advanced development practices, and India’s evolving electronics and computing ecosystem.",
    type: "Visit",
    image: "event-hackathon",
  },
  {
    title: "AI Driven Drone Technology",
    date: "2025-11-15",
    description: "A dynamic seminar on “AI-Driven Drone Technology,” led by Mr. Konark Sharma from Flybots, whose practical insights and interactive style kept students fully engaged.",
    type: "Seminar",
    image: "event-seminar",
  },
  {
    title: "AI x AR Workshop",
    date: "2025-11-03",
    description: "A workshop on “Artificial Intelligence x Augmented Reality,” led by Ms. Chhavi Garg in collaboration with SnapAR, introducing students to AR, VR, and MR and showing how AI is transforming immersive technology.",
    type: "Workshop",
    image: "event-workshop",
  },
  {
    title: "FactShala: A Media and Information Literacy Workshop",
    date: "2024-07-30",
    description: "Learn how to pitch your tech ideas effectively and build a minimum viable product.",
    type: "Workshop",
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
    title: "Research Opportunities in IoT",
    date: "2024-08-28",
    description: "An industrial visit to the Google campus for selected members.",
    type: "Seminar",
    image: "event-seminar",
  },
];

export const team: TeamMember[] = [
  {
    name: "Mr. Dharmendra Singh ",
    role: "Faculty Coordinator",
    position: "Association In-charge",
    bio: "Guiding the society with years of academic and research experience.",
    image: "team-faculty-1",
    email: "example@gmail.com",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Mr. Mahesh Kumar ",
    role: "Faculty Coordinator",
    position: "Teacher In-charge",
    bio: "Providing mentorship and support for all technical activities.",
    image: "team-faculty-2",
    email: "example@gmail.com",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Mr. Jag Mohan",
    role: "Faculty Coordinator",
    position: "Seminar In-charge",
    bio: "Providing mentorship and support for all technical activities.",
    image: "team-faculty-3",
    email: "example@gmail.com",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Aditi tripathi",
    role: "Core Team",
    position: "President",
    bio: "She’s a pioneering President and all-rounder whose creativity and problem-solving don’t stop where others run out of ideas.",
    image: "team-core-3",
    email: "aditi.techpresident@gmail.com",
    linkedin: "https://linkedin.com/in/aditi-tripathi-ab4238274",
  },
  {
    name: "Saksham Raj",
    role: "Core Team",
    position: "Vice President",
    bio: "He’s disciplined, analytical, and results-driven, with decisive leadership and a proactive style that inspires others.",
    image: "team-core-1",
    email: "sakshamraj1@gmail.com",
    linkedin: "https://linkedin.com/in/sakshamraj1",
  },
  {
    name: "Shrishti Singh",
    role: "Core Team",
    position: "Secretary",
    bio: "As Secretary, she ensures smooth events and consistently supports Tech-a-thon with her dedication and energy.",
    image: "team-core-3",
    email: "shrishti.universe.lass@gmail.com",
    linkedin: "https://linkedin.com/in/shrishti-singh-b69b83350",
  },
  {
    name: "Anushka Poswal",
    role: "Core Team",
    position: "Joint Secretary ",
    bio: "She’s passionately focused, ensuring our academic journey goes beyond theory and into real, practical tech.",
    image: "team-core-3",
    email: "anushkaposwal2010@gmail.com",
    linkedin: "https://linkedin.com/in/anushka-poswal-4b2216399",
  },
  {
    name: "Sourav",
    role: "Core Team",
    position: "Treasurer",
    bio: "He oversees finances with smart allocation and clear budgeting, keeping all tech events running strong.",
    image: "team-core-1",
    email: "souravhere000@gmail.com",
    linkedin: "https://linkedin.com/in/profilesouravkumar",
  },
  {
    name: "Divyansh Joshi",
    role: "Core Team",
    position: "Non-Techical Head",
    bio: "Handles social media presence and outreach programs.",
    image: "team-core-1",
    email: "example@gmail.com",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Ananya Mishra",
    role: "Core Team",
    position: "Sponsorship Head",
    bio: "Introducing Ananya, our Sponsorship Head — confident, responsible, and focused on building strong partnerships and securing valuable opportunities for the society.",
    image: "team-core-4",
    email: "mishraananya389@gmail.com",
    linkedin: "https://linkedin.com/in/ananya-mishra-5287a432a",
  },
  {
    name: "Ashish Sharma",
    role: "Core Team",
    position: "Technical Head",
    bio: "He leads the society’s tech operations, ensures smooth events, and builds practical projects that strengthen Tech-A-Thon’s workflow.",
    image: "team-core-2",
    email: "example@gmail.com",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Janvi ",
    role: "Core Team",
    position: "Marketing Head",
    bio: "Handles social media presence and outreach programs.",
    image: "team-core-3",
    email: "example@gmail.com",
    linkedin: "https://linkedin.com/in/username",
  },
];

export const galleryImages = [
  "gallery-1", "gallery-2", "gallery-3", "gallery-4",
  "gallery-5", "gallery-6", "gallery-7", "gallery-8"
];

export const reviews: Review[] = [
  {
    name: "Aarav Kumar",
    position: "2nd Year, B.Sc Physical science with CS",
    review: "TechAthon has been a game-changer for me. The workshops are incredibly insightful and the community is super supportive.",
    rating: 5,
    image: "reviewer-1"
  },
  {
    name: "Saanvi Jha",
    position: "3rd Year, B.Sc (H) CS",
    review: "Being part of the core team taught me so much about leadership and project management. It's more than just a tech society.",
    rating: 5,
    image: "reviewer-2"
  },
  {
    name: "Aditya Rajput",
    position: "Alumnus",
    review: "The hands-on project experience I got at TechAthon was invaluable for my career. Highly recommend it to all students.",
    rating: 4,
    image: "reviewer-3"
  }
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
