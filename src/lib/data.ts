
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
    image: "cdac main",
  },
  {
    title: "AI Driven Drone Technology",
    date: "2025-11-15",
    description: "A dynamic seminar on “AI-Driven Drone Technology,” led by Mr. Konark Sharma from Flybots, whose practical insights and interactive style kept students fully engaged.",
    type: "Seminar",
    image: "drone main",
  },
  {
    title: "AI x AR Workshop",
    date: "2025-11-03",
    description: "A workshop on “Artificial Intelligence x Augmented Reality,” led by Ms. Chhavi Garg in collaboration with SnapAR, introducing students to AR, VR, and MR and showing how AI is transforming immersive technology.",
    type: "Workshop",
    image: "ar main",
  },
  {
    title: "Ml Workshop",
    date: "2025-09-24 to 2025-09-25",
    description: "A workshop on “Artificial Intelligence x Augmented Reality,” led by Ms. Chhavi Garg in collaboration with SnapAR, introducing students to AR, VR, and MR and showing how AI is transforming immersive technology.",
    type: "Workshop",
    image: "ml main",
  },
  {
    title: "Data Science for Sustainable Development",
    date: "2025-04-20 to 2025-04-21",
    description: "A workshop on Data Science for Sustainable Development (A Path to Viksit Bharat) under IQAC and the DBT Star College Scheme. Participants will explore real-world applications of Data Science, ML, and AI, gaining practical insights to strengthen analytical and decision-making skills.",
    type: "Workshop",
    image: "data main",
  },
  {
    title: "FactShala: A Media and Information Literacy Workshop",
    date: "2025-02-10",
    description: "FactShala a media and information literacy workshop conducted with PTI, DataLeads, and the Google News Initiative. The program aims to equip participants with skills to evaluate online content and differentiate facts from misinformation.",
    type: "Workshop",
    image: "fact main",
  },
  {
    title: "Painting for Future",
    date: "2024-10-22",
    description: "A poster-making competition highlighting AI’s impact on sustainability. Express your ideas, show your creativity, and compete for exciting rewards.",
    type: "Competition",
    image: "poster main",
  },
  {
    title: "Research Opportunities in IoT",
    date: "2024-08-28",
    description: "A seminar on Research Opportunities in IoT with Prof. Amit Prakash Singh from GGSIPU as the guest speaker. The session will explore emerging research avenues and the growing significance of IoT across different sectors.",
    type: "Seminar",
    image: "research main",
  },
];

export const team: TeamMember[] = [
  {
    name: "Mr. Dharmendra Singh ",
    role: "Faculty Coordinator",
    position: "Association In-charge",
    bio: "A dedicated academic leader providing strategic guidance and fostering a strong culture of learning within the society. His extensive experience ensures smooth coordination and meaningful growth.",
    image: "dharmendra",
    email: "example@gmail.com",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Mr. Mahesh Kumar ",
    role: "Faculty Coordinator",
    position: "Teacher In-charge",
    bio: "A supportive mentor who oversees academic and technical initiatives with clarity and commitment. His leadership strengthens the society’s direction and execution of key activities.",
    image: "mahesh",
    email: "maheshkumar@arsd.du.ac.in",
    linkedin: "https://www.linkedin.com/in/mahesh-kumar-bhandari-0a9a08197/",
  },
  {
    name: "Mr. Jag Mohan",
    role: "Faculty Coordinator",
    position: "Seminar In-charge",
    bio: "An experienced faculty member who leads seminar initiatives with precision and thoughtful mentorship. His involvement enhances the society’s academic engagement and event quality.",
    image: "jag",
    email: "example@gmail.com",
    linkedin: "https://www.linkedin.com/in/jag-mohan-1337b412/",
  },
  {
    name: "Aditi Tripathi",
    role: "Core Team",
    position: "President",
    bio: "She’s a pioneering President and all-rounder whose creativity and problem-solving don’t stop where others run out of ideas.",
    image: "aditi",
    email: "aditi.techpresident@gmail.com",
    linkedin: "https://linkedin.com/in/aditi-tripathi-ab4238274",
  },
  {
    name: "Saksham Raj",
    role: "Core Team",
    position: "Vice President",
    bio: "He’s disciplined, analytical, and results-driven, with decisive leadership and a proactive style that inspires others.",
    image: "saksham",
    email: "sakshamraj1@gmail.com",
    linkedin: "https://linkedin.com/in/sakshamraj1",
  },
  {
    name: "Shrishti Singh",
    role: "Core Team",
    position: "Secretary",
    bio: "As Secretary, she ensures smooth events and consistently supports Tech-A-Thon with her dedication and energy.",
    image: "shristi",
    email: "shrishti.universe.lass@gmail.com",
    linkedin: "https://linkedin.com/in/shrishti-singh-b69b83350",
  },
  {
    name: "Anushka Poswal",
    role: "Core Team",
    position: "Joint Secretary ",
    bio: "She’s passionately focused, ensuring our academic journey goes beyond theory and into real, practical tech.",
    image: "anushka",
    email: "anushkaposwal2010@gmail.com",
    linkedin: "https://linkedin.com/in/anushka-poswal-4b2216399",
  },
  {
    name: "Sourav",
    role: "Core Team",
    position: "Treasurer",
    bio: "He oversees finances with smart allocation and clear budgeting, keeping all tech events running strong.",
    image: "sourav",
    email: "souravhere000@gmail.com",
    linkedin: "https://linkedin.com/in/profilesouravkumar",
  },
  {
    name: "Divyansh Joshi",
    role: "Core Team",
    position: "Non-Techical Head",
    bio: "As Non-Technical Head, he oversees operations, coordinates teams, and ensures smooth execution of events through strong organizational and leadership skills.",
    image: "divyansh",
    email: "diivyanshjoshi@gmail.com",
    linkedin: "https://linkedin.com/in/diivyanshjoshi/",
  },
  {
    name: "Ananya Mishra",
    role: "Core Team",
    position: "Sponsorship Head",
    bio: "Introducing Ananya, our Sponsorship Head — confident, responsible, and focused on building strong partnerships and securing valuable opportunities for the society.",
    image: "ananya",
    email: "mishraananya389@gmail.com",
    linkedin: "https://linkedin.com/in/ananya-mishra-5287a432a",
  },
  {
    name: "Ashish Sharma",
    role: "Core Team",
    position: "Technical Head",
    bio: "He leads the society’s tech operations, ensures smooth events, and builds practical projects that strengthen Tech-A-Thon’s workflow.",
    image: "ashish",
    email: "ashishsharmadevil602@gmail.com",
    linkedin: "https://linkedin.com/in/ashish-sharma-ai",
  },
  {
    name: "Janvi ",
    role: "Core Team",
    position: "Creative Head",
    bio: "As Creative Head of Tech-A-Thon, she drives visual strategy and delivers innovative design solutions shaped by strong creative experience.",
    image: "janvi",
    email: "mongajanvi92@gmail.com",
    linkedin: "https://linkedin.com/in/janvi-monga-56206b330/",
  },
];

export const memberOfTheMonth = {
  name: "Ashish Sharma",
  position: "Technical Head",
  bio: "He leads the society’s tech operations, ensures smooth events, and builds practical projects that strengthen Tech-A-Thon’s workflow.",
  image: "ashish",
};

export const galleryImages = [
  "gallery-1", "gallery-2", "gallery-3", "gallery-4",
  "gallery-5", "gallery-6", "gallery-7", "gallery-8",
  "gallery-9", "gallery-10", "gallery-11", "gallery-12",
  "gallery-13", "gallery-14","gallery-15", "gallery-16",
  "gallery-17", "gallery-18","gallery-19", "gallery-20",
];

export const reviews: Review[] = [
  {
    name: "Aditya kumar",
    position: "4th Year, B.Sc Physical science with CS",
    review: "Being a part of CS society Techathon has been an incredible journey. Serving as Technical Team Coordinator, allowed me to gain invaluable experiences, enhance my skills, and collaborating with talented individuals.",
    rating: 5,
    image: "aditya"
  },
  {
    name: "Aditi",
    position: "3rd Year, B.Sc (H) CS",
    review: "Loved being a part of the Tech-A-Thon Society! The workshops and Sanganak Vimarsh (annual fest ) are fun, interactive, and very useful. I learned so much and met amazing people who share the same interests.",
    rating: 5,
    image: "aditi  "
  },
  {
    name: "Adarsh",
    position: "4th Year, B.Sc Physical science with CS",
    review: "In Tech-A-Thon, I made friends for life, learned from amazing people. Even a year after graduating, I still reach out for advice and share laughs with fellow members.",
    rating: 4,
    image: "adarsh"
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
