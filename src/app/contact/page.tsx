import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { IconGitHub, IconLinkedIn, IconTwitter } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import placeholderData from "@/lib/placeholder-images.json";

const contactDetails = [
    {
        icon: Mail,
        title: "Email",
        value: "techathon.society@example.com",
        href: "mailto:techathon.society@example.com",
    },
    {
        icon: Phone,
        title: "Phone",
        value: "+91 123 456 7890",
        href: "tel:+911234567890",
    },
    {
        icon: MapPin,
        title: "Location",
        value: "Atma Ram Sanatan Dharma College, University of Delhi",
    },
];

export default function ContactPage() {
  const mapImage = placeholderData.placeholderImages.find(p => p.id === 'hero-background');

  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Have a question or want to collaborate? We'd love to hear from you. Reach out through any of the channels below."
      />
      <section className="container pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {contactDetails.map((detail) => (
              <div key={detail.title} className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-md">
                    <detail.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-semibold">{detail.title}</h3>
                  {detail.href ? (
                    <a href={detail.href} className="font-mono text-muted-foreground hover:text-primary transition-colors">
                      {detail.value}
                    </a>
                  ) : (
                    <p className="font-mono text-muted-foreground">{detail.value}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="flex items-center gap-4 pt-4">
                <Link href="https://github.com" target="_blank" rel="noreferrer" className="p-3 bg-secondary rounded-md hover:bg-primary/20 transition-colors">
                    <IconGitHub className="h-6 w-6 text-primary" />
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noreferrer" className="p-3 bg-secondary rounded-md hover:bg-primary/20 transition-colors">
                    <IconTwitter className="h-6 w-6 text-primary" />
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-secondary rounded-md hover:bg-primary/20 transition-colors">
                    <IconLinkedIn className="h-6 w-6 text-primary" />
                </Link>
            </div>
          </div>
          <Card>
            <CardContent className="p-2 h-full">
              {/* Placeholder for interactive map */}
              <div className="relative h-full w-full min-h-[300px] rounded-md overflow-hidden">
                {mapImage && (
                    <Image
                        src={mapImage.imageUrl}
                        alt="Map placeholder"
                        fill
                        className="object-cover"
                        data-ai-hint="abstract map"
                    />
                )}
                <div className="absolute inset-0 bg-background/70 flex items-center justify-center">
                    <p className="font-mono text-muted-foreground">Interactive Map Coming Soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
