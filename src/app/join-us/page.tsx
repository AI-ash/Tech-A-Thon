import { PageHeader } from "@/components/page-header";
import { JoinUsForm } from "@/components/join-us/join-us-form";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Zap } from "lucide-react";

export default function JoinUsPage() {
  return (
    <>
      <PageHeader
        title="Join Us"
        description="Become a part of our growing community of innovators, creators, and leaders. Fill out the form below to start your journey with TechAthon."
      />
      <section className="container pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-headline text-3xl font-bold">Why Join TechAthon?</h2>
            <p className="text-muted-foreground font-mono">
              By joining us, you get access to exclusive workshops, networking opportunities, and a platform to work on real-world projects.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary rounded-md mt-1"><Zap className="h-5 w-5 text-primary"/></div>
                <div>
                  <h3 className="font-bold">Skill Development</h3>
                  <p className="text-sm text-muted-foreground font-mono">Participate in workshops and projects that sharpen your technical skills.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary rounded-md mt-1"><Users className="h-5 w-5 text-primary"/></div>
                <div>
                  <h3 className="font-bold">Networking</h3>
                  <p className="text-sm text-muted-foreground font-mono">Connect with peers, alumni, and industry professionals.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary rounded-md mt-1"><Lightbulb className="h-5 w-5 text-primary"/></div>
                <div>
                  <h3 className="font-bold">Project Experience</h3>
                  <p className="text-sm text-muted-foreground font-mono">Gain hands-on experience by contributing to exciting tech projects.</p>
                </div>
              </div>
            </div>
          </div>
          <Card>
            <CardContent className="p-6">
              <JoinUsForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
