"use client";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

interface NewsPostResponse {
  slug: string;
  metadata: {
    title?: string;
    date?: string;
    description?: string;
    type?: "announcement" | "event" | "milestone";
    [key: string]: unknown;
  };
  html: string;
}

export default function PostPage() {
  const pathname = usePathname();
  const slug = useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);
    return parts[parts.length - 1];
  }, [pathname]);

  const [post, setPost] = useState<NewsPostResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadPost() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/news/${slug}`);
        if (!response.ok) {
          throw new Error("Not found");
        }
        const data = (await response.json()) as NewsPostResponse;
        if (isMounted) {
          setPost(data);
        }
      } catch (err) {
        if (isMounted) {
          setPost(null);
          setError(err instanceof Error ? err.message : "Unknown error");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    if (slug) {
      void loadPost();
    } else {
      setLoading(false);
      setPost(null);
      setError("Not found");
    }

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) {
    return <article className="markdown-content mx-auto">Loading…</article>;
  }

  if (error || !post) {
    return (
      <article className="markdown-content mx-auto">
        News item not found.
      </article>
    );
  }

  const hasHeading = /<h1[\s>]/i.test(post.html);

  return (
    <article className="markdown-content mx-auto">
      {!hasHeading ? <h1>{post.metadata.title}</h1> : null}
      {post.metadata.date ? <p>{post.metadata.date}</p> : null}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
