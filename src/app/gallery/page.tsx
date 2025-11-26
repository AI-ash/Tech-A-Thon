import { PageHeader } from "@/components/page-header";
import { galleryImages } from "@/lib/data";
import placeholderData from "@/lib/placeholder-images.json";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        description="A visual journey through our events, workshops, and memorable moments. This is the life of TechAthon in pictures."
      />
      <AnimatedSection className="container pb-16 md:pb-24">
        <div
          className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          {galleryImages.map((id, index) => {
            const image = placeholderData.placeholderImages.find(
              (p) => p.id === id
            );
            return image ? (
              <div
                key={index}
                className="overflow-hidden rounded-lg group block"
              >
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                  data-ai-hint={image.imageHint}
                />
              </div>
            ) : null;
          })}
        </div>
      </AnimatedSection>
    </>
  );
}
