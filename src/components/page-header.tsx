import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description: string;
  className?: string;
};

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <section className={cn("py-12 md:py-16 lg:py-20", className)}>
      <div className="container text-center">
        <h1
          className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none glitch-text"
          data-text={title}
        >
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-lg font-mono">
          {description}
        </p>
      </div>
    </section>
  );
}
