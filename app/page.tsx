import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { MentorCard } from "@/components/mentor-card";
import { TeamMemberCard } from "@/components/team-member-card";
import { ArrowRight, Instagram, Linkedin } from "lucide-react";
import { Mentor } from "@/lib/types";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  photo?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Amina Khalid",
    role: "Founder & Director",
    bio: "Education activist with 15+ years of experience in community development and girls' empowerment.",
    initials: "AK",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
  },
  {
    id: "2",
    name: "Leila Mansour",
    role: "Program Manager",
    bio: "Dedicated to curriculum design and mentorship coordination with a background in educational psychology.",
    initials: "LM",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
  },
  {
    id: "3",
    name: "Fatima Hassan",
    role: "Community Outreach Lead",
    bio: "Passionate about building partnerships and connecting girls with resources and opportunities.",
    initials: "FH",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
  },
  {
    id: "4",
    name: "Noor Al-Rashid",
    role: "Mentor Coordinator",
    bio: "Works closely with mentors and students to create meaningful mentoring relationships and growth.",
    initials: "NR",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop",
  },
  {
    id: "5",
    name: "Zainab Al-Marri",
    role: "Skills Development Facilitator",
    bio: "Leads workshops and training programs focused on leadership, financial literacy, and career skills.",
    initials: "ZM",
    photo:
      "https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=500&h=500&fit=crop",
  },
  {
    id: "6",
    name: "Hana Mostafa",
    role: "Research & Impact Officer",
    bio: "Measures program outcomes and ensures evidence-based strategies for continuous improvement.",
    initials: "HM",
    photo:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&h=500&fit=crop",
  },
];

const mentors: Mentor[] = [
  {
    id: "1",
    name: "Sarah",
    surname: "Johnson",
    description:
      "Tech entrepreneur with 10+ years in software development. Passionate about mentoring young women in STEM fields.",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
    linkedIn: "https://linkedin.com/in/sarahjohnson",
    instagram: undefined,
  },
  {
    id: "2",
    name: "Amira",
    surname: "Al-Dosari",
    description:
      "Business consultant specializing in startups and women entrepreneurship. Dedicated to creating pathways for female leaders.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    linkedIn: "https://linkedin.com/in/amiraldosari",
    instagram: "https://instagram.com/amiraldosari",
  },
  {
    id: "3",
    name: "Emma",
    surname: "Williams",
    description:
      "Marketing strategist with expertise in digital transformation. Committed to helping girls navigate modern careers.",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
    linkedIn: "https://linkedin.com/in/emmawilliams",
    instagram: undefined,
  },
  {
    id: "4",
    name: "Layla",
    surname: "Hassan",
    description:
      "Financial advisor and investment expert. Empowering girls with financial literacy and economic independence.",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop",
    linkedIn: "https://linkedin.com/in/laylahasssan",
    instagram: "https://instagram.com/layla.finance",
  },
  {
    id: "5",
    name: "Jessica",
    surname: "Chen",
    description:
      "UX designer and product manager. Mentoring girls in design thinking and user-centered innovation.",
    photo:
      "https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=500&h=500&fit=crop",
    linkedIn: "https://linkedin.com/in/jessicachen",
    instagram: "https://instagram.com/jessicadesigns",
  },
  {
    id: "6",
    name: "Nadia",
    surname: "Ahmed",
    description:
      "Healthcare professional and wellness advocate. Supporting girls' mental health and career development in medicine.",
    photo:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&h=500&fit=crop",
    linkedIn: "https://linkedin.com/in/nadiaahmed",
    instagram: undefined,
  },
];

export default function WelcomePage() {
  return (
    <>
      <Navigation />
      <main className="pt-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-coral-light via-transparent to-gold-light opacity-50" />
          <div className="container-wide section-padding relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-up">
                Empowering Young Women to{" "}
                <span className="text-gradient text-primary">
                  Shape Tomorrow
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up stagger-1">
                Future Careers is a mentorship and education initiative
                dedicated to unlocking the potential of young women through
                guidance, learning, and real opportunities.
              </p>
              <div className="flex flex-col gap-4 justify-center items-center animate-fade-up stagger-2">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button variant="hero" size="xl" asChild>
                    <Link href="#about">
                      Learn More <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="hero-outline" size="xl" asChild>
                    <Link href="#team">Meet Our Team</Link>
                  </Button>
                </div>
                <div className="flex gap-4 justify-center items-center">
                  <Button variant="hero-outline" size="lg" asChild>
                    <Link
                      href="https://www.instagram.com/taghiyevsgirls/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-primary/80"
                    >
                      <Instagram className="size-12" />
                      <span className="text-base font-medium">Follow Us</span>
                    </Link>
                  </Button>
                  <Button variant="hero-outline" size="lg" asChild>
                    <Link
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-primary/80"
                    >
                      <Linkedin className="size-12" />
                      <span className="text-base font-medium">Connect</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-background px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Core Focus Points */}
            <div className="grid md:grid-cols-3 gap-6 py-12">
              <div className="space-y-3 p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                <div className="text-3xl font-bold text-primary">01</div>
                <h3 className="text-xl font-semibold text-foreground">
                  Mentorship
                </h3>
                <p className="text-foreground/70">
                  Connecting girls with experienced mentors who guide their
                  personal and professional growth.
                </p>
              </div>

              <div className="space-y-3 p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                <div className="text-3xl font-bold text-primary">02</div>
                <h3 className="text-xl font-semibold text-foreground">
                  Education
                </h3>
                <p className="text-foreground/70">
                  Providing access to quality learning resources and skill
                  development programs.
                </p>
              </div>

              <div className="space-y-3 p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                <div className="text-3xl font-bold text-primary">03</div>
                <h3 className="text-xl font-semibold text-foreground">
                  Opportunity
                </h3>
                <p className="text-foreground/70">
                  Creating pathways to careers and leadership roles that empower
                  future generations.
                </p>
              </div>
            </div>

            {/* Latest Update Preview */}
            <div className="bg-card border border-border rounded-lg p-8 my-12">
              <p className="text-sm text-primary font-semibold uppercase tracking-wide">
                Latest Update
              </p>
              <h2 className="text-2xl font-bold text-foreground mt-2 mb-4">
                Expanding Our Reach
              </h2>
              <p className="text-foreground/70 mb-6">
                We are thrilled to announce new partnerships and expanded
                programs launching this year to serve more girls in underserved
                communities.
              </p>
              <Link href="/updates">
                <Button variant="default">View All Updates</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 px-4 bg-background" id="about">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <h1 className="text-5xl font-bold mb-8 text-primary">
                About Future Careers
              </h1>
              <p className="text-xl text-foreground/80 text-pretty leading-relaxed">
                Future Careers is rooted in the vision of providing equitable
                access to education and mentorship. We believe every girl
                deserves the opportunity to develop her potential and shape her
                own future.
              </p>
            </div>

            {/* About the Project */}
            <div className="mb-16 space-y-6">
              <h2 className="text-3xl font-bold text-primary">Our Project</h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Founded with a commitment to social inclusion, Future Careers
                  brings together educators, mentors, and community leaders to
                  create a supportive ecosystem where girls can thrive
                  academically, personally, and professionally.
                </p>
                <p>
                  Our programs are designed to address educational disparities
                  while building confidence, critical thinking, and leadership
                  skills that prepare girls for meaningful contributions to
                  society.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="flex gap-x-10">
              <div className="mb-16 space-y-6 bg-card border border-border rounded-lg p-8">
                <h2 className="text-3xl font-bold text-foreground text-primary">
                  Our Mission
                </h2>
                <p className="text-lg text-foreground/80 text-pretty leading-relaxed">
                  To empower girls through quality mentorship, education, and
                  opportunity, creating a generation of confident, capable
                  leaders who drive positive change in their communities.
                </p>
              </div>

              {/* Vision */}
              <div className="mb-16 space-y-6 bg-card border border-border rounded-lg p-8">
                <h2 className="text-3xl font-bold text-foreground text-primary">
                  Our Vision
                </h2>
                <p className="text-lg text-foreground/80 text-pretty leading-relaxed">
                  A world where every girl has access to mentorship, quality
                  education, and pathways to success, regardless of her
                  background or circumstances.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="mb-16 space-y-6">
              <h2 className="text-3xl font-bold text-primary">Core Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3 p-6 bg-card border border-border rounded-lg">
                  <h3 className="text-lg font-semibold text-primary">
                    Inclusion
                  </h3>
                  <p className="text-foreground/70">
                    We believe every girl deserves equal opportunity and a voice
                    in her community.
                  </p>
                </div>
                <div className="space-y-3 p-6 bg-card border border-border rounded-lg">
                  <h3 className="text-lg font-semibold text-primary">
                    Excellence
                  </h3>
                  <p className="text-foreground/70">
                    We are committed to the highest standards in education and
                    mentorship.
                  </p>
                </div>
                <div className="space-y-3 p-6 bg-card border border-border rounded-lg">
                  <h3 className="text-lg font-semibold text-primary">
                    Empowerment
                  </h3>
                  <p className="text-foreground/70">
                    We focus on building confidence, skills, and agency in every
                    girl we serve.
                  </p>
                </div>
                <div className="space-y-3 p-6 bg-card border border-border rounded-lg">
                  <h3 className="text-lg font-semibold text-primary">
                    Community
                  </h3>
                  <p className="text-foreground/70">
                    We believe in the power of collective action and shared
                    responsibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Inspiration Note */}
            <div className="space-y-6 text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground">
                The Taghiyev Legacy
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto text-pretty leading-relaxed">
                Inspired by the pioneering work of social reformers who believed
                in the transformative power of education, Future Careers carries
                forward the legacy of social inclusion and human development. We
                honor the vision of those who understood that investing in girls
                means investing in entire communities.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-4 bg-background" id="team">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <h1 className="text-5xl font-bold text-primary mb-6">Our Team</h1>
              <p className="text-xl text-foreground/80 max-w-3xl text-pretty leading-relaxed">
                We are a dedicated group of educators, mentors, and advocates
                committed to empowering girls through quality mentorship and
                education. Here are the people who make Future Careers possible.
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>

            {/* Team Philosophy */}
            <div className="space-y-6 bg-card border border-border rounded-lg p-8">
              <h2 className="text-3xl font-bold text-primary">
                Our Team Philosophy
              </h2>
              <p className="text-lg text-foreground/80 text-pretty leading-relaxed">
                Every member of our team is driven by the belief that education
                and mentorship can transform lives. We work collaboratively to
                create safe, inclusive spaces where girls can learn, grow, and
                discover their potential. Our diversity of backgrounds and
                expertise allows us to serve our students with depth, empathy,
                and professionalism.
              </p>
            </div>
          </div>
        </section>

        {/* Mentors Section */}
        <section className="py-24 px-4 bg-background" id="mentors">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <h1 className="text-5xl font-bold text-primary mb-6">
                Our Mentors
              </h1>
              <p className="text-xl text-foreground/80 max-w-3xl text-pretty leading-relaxed">
                Our mentors are accomplished professionals from diverse fields
                who are passionate about guiding and supporting the next
                generation of women leaders. Each brings unique expertise,
                experience, and dedication to helping girls achieve their goals.
              </p>
            </div>

            {/* Mentors Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mentors.map((mentor) => (
                <MentorCard key={mentor.id} mentor={mentor} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
