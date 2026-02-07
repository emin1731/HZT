import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Amina Khalid",
    role: "Founder & Director",
    bio: "Education activist with 15+ years of experience in community development and girls' empowerment.",
    initials: "AK",
  },
  {
    id: "2",
    name: "Leila Mansour",
    role: "Program Manager",
    bio: "Dedicated to curriculum design and mentorship coordination with a background in educational psychology.",
    initials: "LM",
  },
  {
    id: "3",
    name: "Fatima Hassan",
    role: "Community Outreach Lead",
    bio: "Passionate about building partnerships and connecting girls with resources and opportunities.",
    initials: "FH",
  },
  {
    id: "4",
    name: "Noor Al-Rashid",
    role: "Mentor Coordinator",
    bio: "Works closely with mentors and students to create meaningful mentoring relationships and growth.",
    initials: "NR",
  },
  {
    id: "5",
    name: "Zainab Al-Marri",
    role: "Skills Development Facilitator",
    bio: "Leads workshops and training programs focused on leadership, financial literacy, and career skills.",
    initials: "ZM",
  },
  {
    id: "6",
    name: "Hana Mostafa",
    role: "Research & Impact Officer",
    bio: "Measures program outcomes and ensures evidence-based strategies for continuous improvement.",
    initials: "HM",
  },
];

export default function WelcomePage() {
  return (
    <>
      <Navigation />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-background px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground text-pretty leading-tight">
              Empowering Girls Through Mentorship & Education
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto text-pretty leading-relaxed">
              HZT Girls is a social initiative dedicated to creating meaningful
              opportunities for girls through mentorship, quality education, and
              personal development rooted in the Taghiyev legacy of social
              inclusion.
            </p>

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
        <section className="py-24 px-4 bg-background">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <h1 className="text-5xl font-bold text-foreground mb-8">
                About HZT Girls
              </h1>
              <p className="text-xl text-foreground/80 text-pretty leading-relaxed">
                HZT Girls is rooted in the vision of providing equitable access
                to education and mentorship. We believe every girl deserves the
                opportunity to develop her potential and shape her own future.
              </p>
            </div>

            {/* About the Project */}
            <div className="mb-16 space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Our Project
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Founded with a commitment to social inclusion, HZT Girls
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
            <div className="mb-16 space-y-6 bg-card border border-border rounded-lg p-8">
              <h2 className="text-3xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-foreground/80 text-pretty leading-relaxed">
                To empower girls through quality mentorship, education, and
                opportunity, creating a generation of confident, capable leaders
                who drive positive change in their communities.
              </p>
            </div>

            {/* Vision */}
            <div className="mb-16 space-y-6 bg-card border border-border rounded-lg p-8">
              <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
              <p className="text-lg text-foreground/80 text-pretty leading-relaxed">
                A world where every girl has access to mentorship, quality
                education, and pathways to success, regardless of her background
                or circumstances.
              </p>
            </div>

            {/* Core Values */}
            <div className="mb-16 space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Core Values
              </h2>
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
                in the transformative power of education, HZT Girls carries
                forward the legacy of social inclusion and human development. We
                honor the vision of those who understood that investing in girls
                means investing in entire communities.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Our Team
              </h1>
              <p className="text-xl text-foreground/80 max-w-3xl text-pretty leading-relaxed">
                We are a dedicated group of educators, mentors, and advocates
                committed to empowering girls through quality mentorship and
                education. Here are the people who make HZT Girls possible.
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors space-y-4"
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>

            {/* Team Philosophy */}
            <div className="space-y-6 bg-card border border-border rounded-lg p-8">
              <h2 className="text-3xl font-bold text-foreground">
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
      </main>
    </>
  );
}
