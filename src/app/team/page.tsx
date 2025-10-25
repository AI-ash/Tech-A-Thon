import { PageHeader } from "@/components/page-header";
import { team, TeamMember } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import placeholderData from "@/lib/placeholder-images.json";
import { Badge } from "@/components/ui/badge";

const TeamCard = ({ member }: { member: TeamMember }) => {
  const memberImage = placeholderData.placeholderImages.find(p => p.id === member.image);
  return (
    <Card className="group overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-64 w-full">
          {memberImage && (
            <Image
              src={memberImage.imageUrl}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={memberImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
          <div className="absolute bottom-0 p-6">
            <CardTitle className="text-white">{member.name}</CardTitle>
            <CardDescription className="text-primary">{member.position}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <p className="font-mono text-muted-foreground">{member.bio}</p>
      </CardContent>
    </Card>
  );
};

const TeamSection = ({ title, members }: { title: string; members: TeamMember[] }) => (
  <section className="container pb-16 md:pb-24">
    <h2 className="text-3xl font-bold tracking-tighter font-headline mb-8 text-center">{title}</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {members.map((member) => (
        <TeamCard key={member.name} member={member} />
      ))}
    </div>
  </section>
);

export default function TeamPage() {
  const faculty = team.filter(m => m.role === "Faculty Coordinator");
  const coreTeam = team.filter(m => m.role === "Core Team");
  const members = team.filter(m => m.role === "Member");

  return (
    <>
      <PageHeader
        title="Our Team"
        description="Meet the brilliant minds behind TechAthon - the students, mentors, and faculty who drive our community forward."
      />
      <TeamSection title="Faculty Coordinators" members={faculty} />
      <TeamSection title="Core Team" members={coreTeam} />
      <TeamSection title="Members" members={members} />
    </>
  );
}
