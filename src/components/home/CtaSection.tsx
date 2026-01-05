import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
    return (
        <section className="w-full bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6 py-20 md:py-28 text-center">
                 <Handshake className="mx-auto h-16 w-16 text-primary mb-6" />
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Sẵn sàng cho Bước tiến Tiếp theo?
                </h2>
                <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
                    Hãy kết nối để cùng thảo luận về mục tiêu của bạn và cách tôi có thể giúp bạn hiện thực hóa chúng.
                </p>
                 <div className="mt-8 flex justify-center gap-4">
                    <Button asChild size="lg">
                        <Link href="/cooperation">
                            Tìm hiểu Cơ hội Hợp tác
                        </Link>
                    </Button>
                     <Button asChild size="lg" variant="outline">
                        <Link href="/about">
                            Về Chuyên gia
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
