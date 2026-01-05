import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-[60vh] min-h-[400px] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <Image
        src="https://images.unsplash.com/photo-1633158829875-e5316a358c6f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Financial planning background"
        fill
        className="object-cover"
        priority
        data-ai-hint="financial planning abstract"
      />
      <div className="relative z-20 container px-4 md:px-6 flex flex-col items-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl !leading-tight">
          Chuyên gia Tài chính & Đầu tư
        </h1>
        <p className="mt-6 max-w-[700px] text-lg md:text-xl text-white/90">
          Đồng hành cùng bạn trên hành trình kiến tạo sự thịnh vượng và tự do tài chính.
        </p>
        <Button asChild size="lg" className="mt-8">
            <Link href="#profile-intro">
                Khám phá ngay <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
        </Button>
      </div>
    </section>
  );
}
