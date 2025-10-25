export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type EventType = "Competition" | "Seminar" | "Workshop" | "Visit";

export type Event = {
  title: string;
  date: string;
  description: string;
  type: EventType;
  image: string;
};

export type TeamRole = "Faculty Coordinator" | "Core Team" | "Member";

export type TeamMember = {
  name: string;
  role: TeamRole;
  position: string;
  bio: string;
  image: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubLink: string;
};
