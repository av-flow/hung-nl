import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { getSortedPostsData, PostData } from "@/lib/posts";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { format } from "date-fns";
import { vi } from "date-fns/locale";

export function RecentPosts() {
  const allPosts = getSortedPostsData();
  const recentPosts = allPosts.slice(0, 2);

  return (
    <section className="w-full bg-secondary/50 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Góc nhìn & Phân tích
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
                Những bài viết mới nhất về thị trường, chiến lược và kiến thức đầu tư.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {recentPosts.map((post) => (
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
            <div className="mt-12 text-center">
                <Button asChild size="lg">
                    <Link href="/blog">
                        Xem tất cả bài viết
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </div>
    </section>
  );
}
