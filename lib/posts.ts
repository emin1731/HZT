import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/news");

export interface PostMetadata {
  title?: string;
  date?: string;
  description?: string;
  type?: "announcement" | "event" | "milestone";
  [key: string]: unknown;
}

export interface PostItem {
  slug: string;
  metadata: PostMetadata;
  content: string;
}

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .filter((entry) => entry.toLowerCase().endsWith(".md"));
}

export function getPostBySlug(slug?: string | string[]): PostItem | null {
  const normalizedSlug = Array.isArray(slug) ? slug[0] : slug;
  if (!normalizedSlug) {
    return null;
  }

  const realSlug = normalizedSlug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    metadata: data as PostMetadata,
    content,
  };
}

export function getAllPosts(): PostItem[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is PostItem => post !== null);

  return posts.sort((a, b) => {
    const aTime = a.metadata.date ? new Date(a.metadata.date).getTime() : 0;
    const bTime = b.metadata.date ? new Date(b.metadata.date).getTime() : 0;
    return bTime - aTime;
  });
}

export async function getPostContent(content: string) {
  const processedContent = await remark().use(html).process(content);
  return processedContent.toString();
}
