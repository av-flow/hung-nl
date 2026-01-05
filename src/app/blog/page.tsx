import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getSortedPostsData, PostData } from "@/lib/posts";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { format } from "date-fns";
import { vi } from "date-fns/locale";

export const metadata = {
  title: "Blog | FinanceFlow Portfolio",
  description: "Insights and articles on finance, investment, and career development.",
};

export default function BlogPage() {
  const blogPosts: PostData[] = getSortedPostsData();

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 md:py-20">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Góc nhìn Chuyên gia
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
          Những bài viết, phân tích và chia sẻ kinh nghiệm về tài chính và đầu tư.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="group flex flex-col overflow-hidden transition-shadow hover:shadow-xl">
            <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
                <Image
                    src={post.featuredImage}
                    alt={post.title}
                    width={800}
                    height={420}
                    className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={post.dataAiHint}
                />
            </Link>
            <CardHeader className="flex-grow">
              <Link href={`/blog/${post.slug}`}>
                <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </Link>
              <CardDescription className="text-base pt-2">
                {format(new Date(post.date), "PPP", { locale: vi })} &bull; {post.author}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base text-foreground/80">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="px-0 text-base">
                <Link href={`/blog/${post.slug}`}>
                  Đọc tiếp <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
