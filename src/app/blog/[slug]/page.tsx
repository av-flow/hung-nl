import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostData, PostData } from "@/lib/posts";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { format } from "date-fns";
import { vi } from "date-fns/locale";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const post = await getPostData(params.slug);
    if (!post) {
      return {
        title: "Post Not Found",
      };
    }
    return {
      title: `${post.title} | FinanceFlow Portfolio`,
      description: post.metaDescription,
    };
  } catch (error) {
    return {
      title: "Post Not Found",
    };
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  let post: PostData;
  try {
    post = await getPostData(params.slug);
  } catch (error) {
    notFound();
  }
  
  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-3xl py-12 px-4 md:py-20">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Trở về Blog
        </Link>
      </Button>

      <header className="mb-8">
         <h1 className="font-headline text-4xl font-extrabold tracking-tight lg:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {format(new Date(post.date), "PPP", { locale: vi })} &bull; {post.author}
        </p>
      </header>
      
       <div className="relative mb-8 overflow-hidden rounded-lg shadow-lg aspect-video">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover"
          data-ai-hint={post.dataAiHint}
        />
      </div>

      <div
        className="prose prose-lg max-w-none text-foreground prose-headings:font-headline prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground"
        dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
      />
    </article>
  );
}

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths.map(p => ({ slug: p.params.slug }));
}
