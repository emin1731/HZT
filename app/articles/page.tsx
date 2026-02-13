import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getAllArticles } from "@/lib/posts";
import { ScrollSection } from "@/components/scroll-section";

export default function ArticlesPage() {
  const articles = getAllArticles();
  return (
    <div className="">
      {/* Header */}
      <ScrollSection className="mb-16">
        <h1 className="text-5xl font-bold text-foreground mb-6">
          Insights & Articles
        </h1>
        <p className="text-xl text-foreground/80 text-pretty leading-relaxed">
          Thought leadership on girls' education, mentorship, social inclusion,
          and personal development. Our team shares insights and reflections
          from the work we do.
        </p>
      </ScrollSection>

      {/* Featured Article */}
      {articles.length > 0 && (
        <ScrollSection className="mb-12 bg-linear-to-br from-primary/5 to-secondary/5 border border-border rounded-xl p-8 md:p-10 hover:shadow-lg transition-shadow">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="default" className="text-xs font-semibold">
              Featured
            </Badge>
            {articles[0].metadata.date && (
              <span className="text-sm text-foreground/60">
                {articles[0].metadata.date}
              </span>
            )}
            {articles[0].metadata.readTime && (
              <>
                <span className="text-foreground/40">•</span>
                <span className="text-sm text-foreground/60">
                  {articles[0].metadata.readTime} min read
                </span>
              </>
            )}
          </div>

          <Link href={`/articles/${articles[0].slug}`} className="group">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-pretty group-hover:text-primary transition-colors">
              {articles[0].metadata.title ?? "Untitled"}
            </h2>

            {articles[0].metadata.description && (
              <p className="text-lg text-foreground/70 mb-6 text-pretty leading-relaxed">
                {articles[0].metadata.description}
              </p>
            )}

            {articles[0].metadata.tags &&
              Array.isArray(articles[0].metadata.tags) &&
              articles[0].metadata.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {articles[0].metadata.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {String(tag)}
                    </Badge>
                  ))}
                </div>
              )}

            <div className="flex items-center gap-2 pt-4 border-t border-border/50">
              {articles[0].metadata.author && (
                <span className="text-sm font-medium text-foreground/80">
                  By {articles[0].metadata.author}
                </span>
              )}
              <span className="text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 ml-auto text-sm font-semibold">
                Read Article <span>→</span>
              </span>
            </div>
          </Link>
        </ScrollSection>
      )}

      {/* Articles Grid */}
      <ScrollSection className="space-y-6 mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(1).map((article) => {
            const tags = Array.isArray(article.metadata.tags)
              ? article.metadata.tags
              : [];
            return (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all group flex flex-col h-full"
              >
                <div className="flex flex-col flex-1">
                  {/* Tags */}
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {tags.slice(0, 2).map((tag, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {String(tag)}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.metadata.title ?? "Untitled"}
                  </h3>

                  {/* Description */}
                  {article.metadata.description && (
                    <p className="text-sm text-foreground/70 mb-4 leading-relaxed line-clamp-3 flex-1">
                      {article.metadata.description}
                    </p>
                  )}
                </div>

                {/* Footer */}
                <div className="pt-4 mt-auto border-t border-border/50">
                  <div className="flex items-center justify-between text-xs text-foreground/60">
                    <div className="flex flex-col gap-1">
                      {article.metadata.author && (
                        <span className="font-medium text-foreground/80">
                          {article.metadata.author}
                        </span>
                      )}
                      <div className="flex items-center gap-2">
                        {article.metadata.date && (
                          <span>{article.metadata.date}</span>
                        )}
                        {article.metadata.readTime && (
                          <>
                            <span>•</span>
                            <span>{article.metadata.readTime} min read</span>
                          </>
                        )}
                      </div>
                    </div>
                    <span className="text-primary text-base group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </ScrollSection>

      {/* Social Media */}
      <ScrollSection className="mt-16 from-primary/10 to-secondary/10 rounded-lg p-8 border border-primary/20 text-center space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Follow Us</h2>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Stay connected with us on social media for the latest updates and
          stories.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="https://twitter.com/hztgirls"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-background border border-border rounded-lg hover:border-primary transition-colors group"
          >
            <svg
              className="w-5 h-5 text-foreground group-hover:text-primary transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
              Twitter
            </span>
          </a>
          <a
            href="https://instagram.com/hztgirls"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-background border border-border rounded-lg hover:border-primary transition-colors group"
          >
            <svg
              className="w-5 h-5 text-foreground group-hover:text-primary transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
              Instagram
            </span>
          </a>
          <a
            href="https://facebook.com/hztgirls"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-background border border-border rounded-lg hover:border-primary transition-colors group"
          >
            <svg
              className="w-5 h-5 text-foreground group-hover:text-primary transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
              Facebook
            </span>
          </a>
          <a
            href="https://linkedin.com/company/hztgirls"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-background border border-border rounded-lg hover:border-primary transition-colors group"
          >
            <svg
              className="w-5 h-5 text-foreground group-hover:text-primary transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
              LinkedIn
            </span>
          </a>
        </div>
      </ScrollSection>
    </div>
  );
}
