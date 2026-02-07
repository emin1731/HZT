import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getAllArticles } from "@/lib/posts";

export default function ArticlesPage() {
  const articles = getAllArticles();
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="mb-16">
        <h1 className="text-5xl font-bold text-foreground mb-6">
          Insights & Articles
        </h1>
        <p className="text-xl text-foreground/80 text-pretty leading-relaxed">
          Thought leadership on girls\' education, mentorship, social inclusion,
          and personal development. Our team shares insights and reflections
          from the work we do.
        </p>
      </section>

      {/* Featured Article */}
      {articles.length > 0 && (
        <section className="mb-16 bg-linear-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8 md:p-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="default">Featured</Badge>
            {articles[0].metadata.date && (
              <p className="text-sm text-foreground/60">
                {articles[0].metadata.date}
              </p>
            )}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-pretty">
            {articles[0].metadata.title ?? "Untitled"}
          </h2>
          {articles[0].metadata.description && (
            <p className="text-lg text-foreground/80 mb-6 text-pretty leading-relaxed">
              {articles[0].metadata.description}
            </p>
          )}
          {articles[0].metadata.tags &&
            Array.isArray(articles[0].metadata.tags) &&
            articles[0].metadata.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {articles[0].metadata.tags.map((tag, idx) => (
                  <Badge key={idx} variant="outline">
                    {String(tag)}
                  </Badge>
                ))}
              </div>
            )}
          <div className="flex items-center justify-between">
            <div>
              {articles[0].metadata.author ? (
                <p className="text-sm font-semibold text-foreground">
                  {articles[0].metadata.author}
                </p>
              ) : null}
              {articles[0].metadata.readTime ? (
                <p className="text-sm text-foreground/60">
                  {articles[0].metadata.readTime} min read
                </p>
              ) : null}
            </div>
            <Link
              href={`/articles/${articles[0].slug}`}
              className="text-primary font-semibold hover:gap-2 transition-all flex items-center gap-1"
            >
              Read Article
              <span>→</span>
            </Link>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground mb-8">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {articles.slice(1).map((article) => {
            const tags = Array.isArray(article.metadata.tags)
              ? article.metadata.tags
              : [];
            return (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors cursor-pointer group flex flex-col"
              >
                {tags.length > 0 && (
                  <div className="flex items-center gap-2 mb-3">
                    {tags.slice(0, 2).map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {String(tag)}
                      </Badge>
                    ))}
                  </div>
                )}

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors text-pretty">
                  {article.metadata.title ?? "Untitled"}
                </h3>

                {article.metadata.description && (
                  <p className="text-foreground/70 flex-1 mb-4 leading-relaxed">
                    {article.metadata.description}
                  </p>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="text-sm text-foreground/60">
                    {article.metadata.author ? (
                      <p className="font-semibold text-foreground">
                        {article.metadata.author}
                      </p>
                    ) : null}
                    <p className="text-xs">
                      {article.metadata.date ?? ""}
                      {article.metadata.readTime
                        ? ` • ${article.metadata.readTime} min`
                        : ""}
                    </p>
                  </div>
                  <span className="text-primary text-lg group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="mt-16 bg-card border border-border rounded-lg p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold text-foreground">
          Get New Articles in Your Inbox
        </h2>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Subscribe to receive our latest insights and articles about girls\'
          education and mentorship.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-primary-foreground rounded font-semibold hover:opacity-90 transition-opacity"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
