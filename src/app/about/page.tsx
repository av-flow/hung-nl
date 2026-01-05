import { ExperienceTimeline } from "@/components/about/ExperienceTimeline";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const metadata = {
  title: "Giới thiệu | Sáng tạo nội dung số với Nhiếp ảnh gia Nguyễn Long Hưng",
  description: "Các lớp học chụp ảnh, quay, dựng phim và ứng dụng AI vào sáng tạo nội dung số.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:py-20">
      <div className="flex flex-col items-center text-center mb-12">
        <Avatar className="h-40 w-40 mb-6 border-4 border-primary shadow-lg">
            <AvatarImage src="https://unsplash.com/photos/i57HjPUr2bg?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Investment Advisor" data-ai-hint="professional headshot" className="object-cover"/>
            <AvatarFallback>IA</AvatarFallback>
        </Avatar>
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Về Giảng viên của bạn
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-lg text-foreground/80 md:text-xl">
            Với niềm đam mê sâu sắc dành cho nghệ thuật nhiếp ảnh và cam kết mang lại giá trị bền vững, tôi đã dành hơn một thập kỷ làm đạo diễn, nhiếp ảnh gia, giảng viên để đồng hành cùng các học viên cá nhân và tổ chức trong việc **khám phá ngôn ngữ hình ảnh**, **kể chuyện bằng ánh sáng**, thực thi **các dự án sáng tạo nội dung số chuyên nghiệp**.
        </p>
      </div>
      <ExperienceTimeline />
    </div>
  );
}
