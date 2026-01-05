import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PenSquare, User } from "lucide-react";

export function ProfileIntro() {
  return (
    <section id="profile-intro" className="w-full bg-background py-20 md:py-28 scroll-mt-16">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-center">
          <Avatar className="h-40 w-40 border-4 border-primary shadow-lg">
            <AvatarImage
              src="https://images.unsplash.com/photo-1558203728-00f45181dd84?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Investment Advisor"
              data-ai-hint="professional headshot"
              className="object-cover"
            />
            <AvatarFallback>IA</AvatarFallback>
          </Avatar>
        </div>
        <div className="text-center md:col-span-2 md:text-left">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Chào mừng đến với FinanceFlow
          </h2>
          <p className="mt-4 text-lg text-foreground/80 md:text-xl">
            Tôi là một chuyên gia tư vấn đầu tư và quản lý tài sản với hơn 10 năm kinh nghiệm tại các định chế tài chính hàng đầu. Sứ mệnh của tôi là cung cấp các giải pháp đầu tư chuyên biệt, minh bạch và hiệu quả, giúp bạn đạt được các mục tiêu tài chính dài hạn.
          </p>
           <p className="mt-4 text-lg text-foreground/80 md:text-xl">
            Tại đây, bạn sẽ tìm thấy những phân tích chuyên sâu, góc nhìn đa chiều về thị trường và các cơ hội hợp tác để cùng nhau phát triển.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <Button asChild size="lg" variant="outline">
              <Link href="/about">
                <User className="mr-2 h-5 w-5" />
                Hành trình Sự nghiệp
              </Link>
            </Button>
             <Button asChild size="lg" variant="ghost">
              <Link href="/blog">
                <PenSquare className="mr-2 h-5 w-5" />
                Đọc các bài Phân tích
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
