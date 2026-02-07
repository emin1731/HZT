"use client";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

interface ArticleResponse {
  slug: string;
  metadata: {
    title?: string;
    date?: string;
    description?: string;
    author?: string;
    tags?: string[];
    readTime?: number;
    [key: string]: unknown;
  };
  html: string;
}

export default function ArticlePage() {
  const pathname = usePathname();
  const slug = useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);
    return parts[parts.length - 1];
  }, [pathname]);

  const [article, setArticle] = useState<ArticleResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadArticle() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/articles/${slug}`);
        if (!response.ok) {
          throw new Error("Not found");
        }
        const data = (await response.json()) as ArticleResponse;
        if (isMounted) {
          setArticle(data);
        }
      } catch (err) {
        if (isMounted) {
          setArticle(null);
          setError(err instanceof Error ? err.message : "Unknown error");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    if (slug) {
      void loadArticle();
    } else {
      setLoading(false);
      setArticle(null);
      setError("Not found");
    }

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) {
    return <article className="markdown-content mx-auto">Loading…</article>;
  }

  if (error || !article) {
    return (
      <article className="markdown-content mx-auto">Article not found.</article>
    );
  }

  const hasHeading = /<h1[\s>]/i.test(article.html);

  return (
    <article className="markdown-content mx-auto">
      {!hasHeading ? <h1>{article.metadata.title}</h1> : null}
      {article.metadata.date ? <p>{article.metadata.date}</p> : null}
      <div dangerouslySetInnerHTML={{ __html: article.html }} />
    </article>
  );
}
