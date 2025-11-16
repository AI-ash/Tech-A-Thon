import { Logo } from "@/components/icons";

export default function PreLoader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="animate-pulse-and-fade">
        <Logo className="h-28 w-28 text-primary" />
      </div>
    </div>
  );
}
