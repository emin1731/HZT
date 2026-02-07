import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

const typeConfig = {
  announcement: { label: "Announcement", variant: "default" as const },
  event: { label: "Event", variant: "secondary" as const },
  milestone: { label: "Milestone", variant: "outline" as const },
};

export default function NewsPage() {
  const posts = getAllPosts();

  return (
    <div className="">
      {/* Header */}
      <section className="mb-16">
        <h1 className="text-5xl font-bold text-foreground mb-6">
          News & Updates
        </h1>
        <p className="text-xl text-foreground/80 text-pretty leading-relaxed">
          Stay informed about our latest announcements, events, and milestones
          as we continue to grow and serve more girls.
        </p>
      </section>

      {/* News List */}
      <section className="space-y-6">
        {posts.map((post) => {
          const typeKey = post.metadata.type ?? "announcement";
          const typeMeta = typeConfig[typeKey] ?? typeConfig.announcement;

          return (
            <article
              key={post.slug}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-colors space-y-4 group cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge variant={typeMeta.variant}>{typeMeta.label}</Badge>
                    {post.metadata.date ? (
                      <p className="text-sm text-foreground/60">
                        {post.metadata.date}
                      </p>
                    ) : null}
                  </div>
                  <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {post.metadata.title ?? "Untitled"}
                  </h2>
                  {post.metadata.description ? (
                    <p className="text-foreground/80 leading-relaxed">
                      {post.metadata.description}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <Link
                  href={`/news/${post.slug}`}
                  className="text-primary font-semibold hover:gap-2 transition-all flex items-center gap-1"
                >
                  Read More
                  <span>→</span>
                </Link>
              </div>
            </article>
          );
        })}
      </section>

      {/* Newsletter CTA */}
      <section className="mt-16 bg-linear-to-br from-primary/10 to-secondary/10 rounded-lg p-8 border border-primary/20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Stay Updated</h2>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Subscribe to receive our monthly newsletter with news, updates, and
          insights about the work we do.
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
