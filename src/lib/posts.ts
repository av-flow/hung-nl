import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostData {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  metaDescription: string;
  featuredImage: string;
  dataAiHint: string;
  excerpt: string;
  featured: boolean;
  contentHtml?: string;
  [key: string]: any;
}


export function getSortedPostsData(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const postData: PostData = {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      author: matterResult.data.author,
      tags: matterResult.data.tags || [],
      metaDescription: matterResult.data.metaDescription,
      featuredImage: matterResult.data.featuredImage,
      dataAiHint: matterResult.data.dataAiHint,
      excerpt: matterResult.data.excerpt,
      featured: matterResult.data.featured || false,
    };

    return postData;
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date,
    author: matterResult.data.author,
    tags: matterResult.data.tags || [],
    metaDescription: matterResult.data.metaDescription,
    featuredImage: matterResult.data.featuredImage,
    dataAiHint: matterResult.data.dataAiHint,
    excerpt: matterResult.data.excerpt,
    featured: matterResult.data.featured || false,
  };
}
