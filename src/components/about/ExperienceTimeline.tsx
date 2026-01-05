"use client";

import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Giám đốc Danh mục Đầu tư",
    company: "Quỹ Đầu tư VinaCapital",
    period: "2020 - Hiện tại",
    description: "Chịu trách nhiệm quản lý và phát triển các danh mục đầu tư trị giá hàng trăm triệu USD. Xây dựng chiến lược phân bổ tài sản, đánh giá rủi ro và tìm kiếm các cơ hội đầu tư tiềm năng trên thị trường Việt Nam và quốc tế.",
    skills: ["Quản lý Quỹ", "Phân bổ Tài sản", "Phân tích Vĩ mô", "Đầu tư Tác động"],
  },
  {
    role: "Trưởng phòng Phân tích & Tư vấn Đầu tư",
    company: "Công ty Cổ phần Chứng khoán SSI",
    period: "2016 - 2020",
    description: "Dẫn dắt đội ngũ phân tích, cung cấp các báo cáo chuyên sâu về ngành và doanh nghiệp. Trực tiếp tư vấn các chiến lược đầu tư cho khách hàng tổ chức và nhà đầu tư cá nhân có giá trị tài sản ròng cao (HNWI).",
    skills: ["Tư vấn Đầu tư", "Phân tích Doanh nghiệp", "Quản lý Đội nhóm", "Phát triển Kinh doanh"],
  },
  {
    role: "Chuyên viên Kiểm toán Cấp cao",
    company: "Deloitte Việt Nam (Big4)",
    period: "2012 - 2016",
    description: "Thực hiện kiểm toán báo cáo tài chính cho các tập đoàn đa quốc gia và các công ty niêm yết lớn trong nhiều lĩnh vực. Xây dựng nền tảng vững chắc về phân tích tài chính, quản trị rủi ro và tuân thủ.",
    skills: ["Kiểm toán", "Phân tích Báo cáo Tài chính", "Chuẩn mực Kế toán (IFRS, VAS)", "Quản trị Rủi ro"],
  },
];

export function ExperienceTimeline() {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Hành Trình Sự Nghiệp
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
            Từ Big4 kiểm toán đến các định chế tài chính hàng đầu Việt Nam.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border/40"></div>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group relative mb-8 flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:pr-8 text-left" : "md:pl-8 text-right md:text-left"
                }`}
              >
                <Card className="border-border/50 shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02] group-hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                       <Badge variant="secondary" className="hidden sm:inline-flex">{exp.period}</Badge>
                    </div>
                    <p className="text-md font-semibold text-primary">{exp.company}</p>
                     <p className="text-sm text-muted-foreground sm:hidden">{exp.period}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-foreground/80">
                      {exp.description}
                    </p>
                    <div className={`mt-4 flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'md:justify-start justify-end'}`}>
                        {exp.skills.map(skill => (
                            <Badge key={skill} variant="outline">{skill}</Badge>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="absolute left-1/2 z-10 -translate-x-1/2 transform">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background border-2 border-primary text-primary shadow-md transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <Briefcase className="h-6 w-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
