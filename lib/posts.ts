import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const newsDirectory = path.join(process.cwd(), "content/news");
const articlesDirectory = path.join(process.cwd(), "content/articles");

export interface PostMetadata {
  title?: string;
  date?: string;
  description?: string;
  type?: "announcement" | "event" | "milestone";
  author?: string;
  tags?: string[];
  readTime?: number;
  [key: string]: unknown;
}

export interface PostItem {
  slug: string;
  metadata: PostMetadata;
  content: string;
}

export function getPostSlugs() {
  return fs
    .readdirSync(newsDirectory)
    .filter((entry) => entry.toLowerCase().endsWith(".md"));
}

export function getArticleSlugs() {
  return fs
    .readdirSync(articlesDirectory)
    .filter((entry) => entry.toLowerCase().endsWith(".md"));
}

export function getPostBySlug(slug?: string | string[]): PostItem | null {
  const normalizedSlug = Array.isArray(slug) ? slug[0] : slug;
  if (!normalizedSlug) {
    return null;
  }

  const realSlug = normalizedSlug.replace(/\.md$/, "");
  const fullPath = path.join(newsDirectory, `${realSlug}.md`);
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

export function getArticleBySlug(slug?: string | string[]): PostItem | null {
  const normalizedSlug = Array.isArray(slug) ? slug[0] : slug;
  if (!normalizedSlug) {
    return null;
  }

  const realSlug = normalizedSlug.replace(/\.md$/, "");
  const fullPath = path.join(articlesDirectory, `${realSlug}.md`);
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

export function getAllArticles(): PostItem[] {
  const slugs = getArticleSlugs();
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is PostItem => article !== null);

  return articles.sort((a, b) => {
    const aTime = a.metadata.date ? new Date(a.metadata.date).getTime() : 0;
    const bTime = b.metadata.date ? new Date(b.metadata.date).getTime() : 0;
    return bTime - aTime;
  });
}

export async function getPostContent(content: string) {
  const processedContent = await remark().use(html).process(content);
  return processedContent.toString();
}
