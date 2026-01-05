import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, Briefcase, TrendingUp, Users } from "lucide-react";

const achievements = [
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "Tăng trưởng Vượt bậc",
    description: "Đạt mức tăng trưởng danh mục trung bình 25% mỗi năm cho khách hàng.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Hơn 500 Khách hàng",
    description: "Tư vấn và quản lý tài sản cho hơn 500 khách hàng cá nhân và doanh nghiệp.",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "10+ Năm Kinh nghiệm",
    description: "Kinh nghiệm sâu rộng trong lĩnh vực phân tích và tư vấn đầu tư tài chính.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Giải thưởng Chuyên gia",
    description: "Được vinh danh là chuyên gia tư vấn xuất sắc nhất trong 3 năm liên tiếp.",
  },
];

export function AchievementShowcase() {
  return (
    <section className="w-full py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Thành Tựu Nổi Bật
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
            Những con số biết nói về hành trình chuyên nghiệp và sự tận tâm.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, index) => (
            <Card key={index} className="flex flex-col items-center justify-start p-6 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl border-border/50 hover:border-primary/50">
              <CardHeader className="p-0 flex items-center">
                <div className="mb-4">
                    {item.icon}
                </div>
                <CardTitle className="mt-4 font-headline text-2xl">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-4">
                <p className="text-base text-foreground/80">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
