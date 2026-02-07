import { Navigation } from "@/components/navigation";
import { Badge } from "@/components/ui/badge";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  readTime: number;
}

const articles: Article[] = [
  {
    id: "1",
    title: "The Power of Mentorship in Girls' Education",
    excerpt:
      "How meaningful mentor relationships can transform educational outcomes and build confidence in young women. Research shows mentored students have higher graduation rates and career satisfaction.",
    date: "January 2026",
    author: "Amina Khalid",
    tags: ["Mentorship", "Education"],
    readTime: 8,
  },
  {
    id: "2",
    title: "Breaking Barriers: Social Inclusion Through Education",
    excerpt:
      "Examining how education serves as a pathway to opportunity and social mobility. When girls have access to quality education, entire communities benefit from their leadership and contributions.",
    date: "December 2025",
    author: "Leila Mansour",
    tags: ["Social Inclusion", "Policy"],
    readTime: 10,
  },
  {
    id: "3",
    title: "Digital Skills: Preparing Girls for Tomorrow's Workforce",
    excerpt:
      "The tech industry is evolving rapidly, and girls need access to digital literacy programs early. We explore why coding and digital skills are critical for future opportunities.",
    date: "November 2025",
    author: "Zainab Al-Marri",
    tags: ["Technology", "Skills Development"],
    readTime: 7,
  },
  {
    id: "4",
    title: "Leadership Starts with Self-Confidence",
    excerpt:
      "Confidence isn't something you're born with—it's built. Learn about the simple practices and supportive environments that help girls develop the confidence to lead.",
    date: "October 2025",
    author: "Noor Al-Rashid",
    tags: ["Leadership", "Personal Development"],
    readTime: 6,
  },
  {
    id: "5",
    title: "Measuring Impact: What Really Matters in Education Programs",
    excerpt:
      "How do we know if education programs are truly making a difference? We share our approach to measuring impact beyond traditional metrics.",
    date: "September 2025",
    author: "Hana Mostafa",
    tags: ["Impact", "Research"],
    readTime: 9,
  },
  {
    id: "6",
    title: "Building Community: The Role of Peer Support in Learning",
    excerpt:
      "Peer relationships are powerful learning tools. Discover how fostering a supportive peer community amplifies the benefits of formal education and mentorship.",
    date: "August 2025",
    author: "Fatima Hassan",
    tags: ["Community", "Social Learning"],
    readTime: 7,
  },
];

export default function ArticlesPage() {
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
      <section className="mb-16 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8 md:p-12">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="default">Featured</Badge>
          <p className="text-sm text-foreground/60">{articles[0].date}</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-pretty">
          {articles[0].title}
        </h2>
        <p className="text-lg text-foreground/80 mb-6 text-pretty leading-relaxed">
          {articles[0].excerpt}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {articles[0].tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">
              {articles[0].author}
            </p>
            <p className="text-sm text-foreground/60">
              {articles[0].readTime} min read
            </p>
          </div>
          <button className="text-primary font-semibold hover:gap-2 transition-all flex items-center gap-1">
            Read Article
            <span>→</span>
          </button>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground mb-8">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {articles.slice(1).map((article) => (
            <article
              key={article.id}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors cursor-pointer group flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                {article.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors text-pretty">
                {article.title}
              </h3>

              <p className="text-foreground/70 flex-1 mb-4 leading-relaxed">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="text-sm text-foreground/60">
                  <p className="font-semibold text-foreground">
                    {article.author}
                  </p>
                  <p className="text-xs">
                    {article.date} • {article.readTime} min
                  </p>
                </div>
                <span className="text-primary text-lg group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </article>
          ))}
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
