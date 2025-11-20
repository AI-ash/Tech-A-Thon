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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((id, index) => {
            const image = placeholderData.placeholderImages.find(p => p.id === id);
            return image ? (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg group"
              >
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  data-ai-hint={image.imageHint}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />
              </div>
            ) : null;
          })}
        </div>
      </AnimatedSection>
    </>
  );
}
