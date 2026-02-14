"use client";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

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
    return (
      <div className="max-w-4xl mx-auto">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-muted rounded w-3/4"></div>
          <div className="h-4 bg-muted rounded w-1/4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="max-w-4xl mx-auto text-center py-16">
        <div className="bg-card border border-border rounded-xl p-8">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Article Not Found
          </h1>
          <p className="text-foreground/70 mb-6">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            ← Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  // const hasHeading = /<h1[\s>]/i.test(article.html);

  return (
    <div className="pt-32 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <Link
        href="/articles"
        className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors mb-8 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">
          ←
        </span>
        Back to Articles
      </Link>

      {/* Article Header */}
      <header className="mb-12 pb-8 border-b border-border">
        {/* Tags */}
        {article.metadata.tags && article.metadata.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {article.metadata.tags.map((tag, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {String(tag)}
              </Badge>
            ))}
          </div>
        )}

        {/* Title */}
        {article.metadata.title && (
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {article.metadata.title}
          </h1>
        )}

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60">
          {article.metadata.author && (
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-semibold text-sm">
                  {article.metadata.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </span>
              </div>
              <span className="font-medium text-foreground">
                {article.metadata.author}
              </span>
            </div>
          )}
          {article.metadata.date && (
            <>
              <span className="text-foreground/40">•</span>
              <span>{article.metadata.date}</span>
            </>
          )}
          {article.metadata.readTime && (
            <>
              <span className="text-foreground/40">•</span>
              <span>{article.metadata.readTime} min read</span>
            </>
          )}
        </div>

        {/* Description */}
        {article.metadata.description && (
          <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
            {article.metadata.description}
          </p>
        )}
      </header>

      {/* Article Content */}
      <article
        className="markdown-content prose prose-lg max-w-none mb-16"
        dangerouslySetInnerHTML={{ __html: article.html }}
      />

      {/* Footer */}
      <footer className="pt-8 border-t border-border">
        <div className="flex items-center justify-between">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg font-semibold hover:border-primary transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            More Articles
          </Link>

          {article.metadata.tags && article.metadata.tags.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-foreground/60">Topics:</span>
              <div className="flex flex-wrap gap-2">
                {article.metadata.tags.map((tag, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {String(tag)}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
}
