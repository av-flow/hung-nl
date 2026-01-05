import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Handshake, Lightbulb, Mail, Phone, Target } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Hợp tác | FinanceFlow Portfolio",
    description: "Cơ hội hợp tác đầu tư, tư vấn chiến lược và phát triển các giải pháp tài chính cùng chuyên gia.",
};

const competencies = [
    "Quản lý danh mục đầu tư chuyên sâu",
    "Phân tích thị trường vĩ mô và vi mô",
    "Xây dựng mô hình tài chính và định giá",
    "Tư vấn chiến lược M&A và huy động vốn",
    "Quản trị rủi ro tài chính",
    "Đào tạo và phát triển đội ngũ phân tích",
];

const cooperationAreas = [
    {
        title: "Tư vấn Đầu tư Cá nhân (HNWI)",
        description: "Xây dựng và quản lý danh mục đầu tư riêng biệt, tối ưu hóa lợi nhuận dựa trên khẩu vị rủi ro và mục tiêu dài hạn của từng khách hàng."
    },
    {
        title: "Tư vấn Doanh nghiệp",
        description: "Cung cấp giải pháp tài chính toàn diện cho doanh nghiệp: từ cấu trúc vốn, huy động vốn, M&A đến các chiến lược phát triển bền vững."
    },
    {
        title: "Hợp tác với các Quỹ đầu tư",
        description: "Tìm kiếm, thẩm định và quản lý các cơ hội đầu tư tiềm năng tại thị trường Việt Nam. Chia sẻ góc nhìn và kinh nghiệm để cùng phát triển."
    },
    {
        title: "Đào tạo & Chia sẻ kiến thức",
        description: "Tổ chức các buổi hội thảo, khóa đào tạo chuyên sâu về đầu tư, tài chính cho các tổ chức và cộng đồng."
    }
];

export default function CooperationPage() {
    return (
        <div className="container mx-auto max-w-5xl py-12 px-4 md:py-20">
            <div className="mb-12 text-center">
                <Handshake className="mx-auto h-16 w-16 text-primary mb-4" />
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Hợp tác &amp; Phát triển
                </h1>
                <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
                    Cùng nhau kiến tạo những giá trị bền vững và chinh phục các mục tiêu tài chính vượt trội.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <Card className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader className="flex-row items-center gap-4">
                        <Target className="h-10 w-10 text-primary" />
                        <CardTitle className="font-headline text-2xl">Tầm nhìn & Sứ mệnh</CardTitle>
                    </CardHeader>
                    <CardContent className="text-base text-foreground/80">
                        <p>
                            Sứ mệnh của tôi là trở thành đối tác tin cậy, đồng hành cùng nhà đầu tư và doanh nghiệp trên hành trình xây dựng sự thịnh vượng. Bằng sự chính trực, kiến thức chuyên sâu và một mạng lưới quan hệ rộng khắp, tôi cam kết mang lại những giải pháp tài chính tối ưu và hiệu quả nhất.
                        </p>
                    </CardContent>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader className="flex-row items-center gap-4">
                        <Lightbulb className="h-10 w-10 text-primary" />
                        <CardTitle className="font-headline text-2xl">Năng lực Cốt lõi</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-base text-foreground/80">
                            {competencies.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>

            <div className="mb-16">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">
                    Các Lĩnh vực Hợp tác
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {cooperationAreas.map((area, index) => (
                        <Card key={index} className="border-border/60 hover:border-primary/80 transition-colors">
                            <CardHeader>
                                <CardTitle className="font-headline text-xl">{area.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-foreground/70">{area.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="text-center bg-muted/50 p-8 rounded-lg">
                <h2 className="font-headline text-3xl font-bold tracking-tighter mb-4">Sẵn sàng Thảo luận?</h2>
                <p className="mx-auto max-w-[600px] text-lg text-foreground/80 mb-6">
                    Nếu bạn quan tâm đến các cơ hội hợp tác hoặc cần tư vấn chuyên sâu, đừng ngần ngại kết nối với tôi.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button size="lg" asChild>
                        <Link href="mailto:co-operate@financeflow.com">
                            <Mail className="mr-2" /> Gửi Email
                        </Link>
                    </Button>
                    <div className="flex items-center text-lg font-medium">
                        <Phone className="mr-2 text-primary" />
                        <span>(+84) 123 456 789</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
