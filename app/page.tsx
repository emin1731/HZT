import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { MentorCard } from "@/components/mentor-card";
import { TeamMemberCard } from "@/components/team-member-card";
import { ScrollSection } from "@/components/scroll-section";
import { ArrowRight, Instagram, Linkedin, Sparkles } from "lucide-react";
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
    name: "Ulvi Asadli",
    role: "Founder & Director",
    bio: "Description of the student",
    initials: "UA",
    photo: "/Ulvi-Asadli.jpeg",
  },
  {
    id: "2",
    name: "Khuraman Guliyeva",
    role: "Program Manager",
    bio: "Description of the student",
    initials: "KG",
    photo: "/Khuraman-Guliyeva.jpeg",
  },
  {
    id: "3",
    name: "Elshan Huseynzada",
    role: "Community Outreach Lead",
    bio: "Description of the student",
    initials: "EH",
    photo: "/Elshan-huseynzada.jpeg",
  },
];

const mentors: Mentor[] = [
  {
    id: "1",
    name: "Sarah",
    surname: "Johnson",
    expertise: "Technology & Software Development",
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
    expertise: "Business & Entrepreneurship",
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
    expertise: "Marketing & Digital Strategy",
    description:
      "Marketing strategist with expertise in digital transformation. Committed to helping girls navigate modern careers.",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
    linkedIn: "https://linkedin.com/in/emmawilliams",
    instagram: undefined,
  },
];

export default function WelcomePage() {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        <ScrollSection>
          <div className="absolute inset-0 bg-gradient-to-br from-coral-light via-transparent to-gold-light opacity-50" />
          <div className="container-wide section-padding relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-primary text-5xl sm:text-5xl md:text-6xl font-bold  mb-2 animate-fade-up">
                Future Careers
              </h1>
              <p className="font-serif text-primary text-xl md:text-2xl font-semibold mb-6 animate-fade-up stagger-1">
                For Better Future
              </p>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up stagger-1">
                Guiding school and university students toward confident academic
                and career decisions through mentorship and structured career
                pathways.
              </p>
              <p className="text-base md:text-lg text-foreground mb-8 animate-fade-up stagger-1">
                <span className="font-semibold">
                  <Sparkles className="inline-block h-5 w-5 text-primary m-2" />
                  Everything is completely free.
                </span>
                <span className="block mt-2">
                  All you need to do is reserve your seat and start your
                  journey.
                </span>
              </p>
              <div className="flex flex-col gap-4 justify-center items-center animate-fade-up stagger-2">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button variant="hero" size="xl" asChild>
                    <Link href="/reserve-meeting">
                      Reserve Your Meeting{" "}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>

                  <Button variant="hero-outline" size="xl" asChild>
                    <Link href="#about">
                      Explore More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
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
        </ScrollSection>
        {/* Hero Section */}
        <ScrollSection>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Core Focus Points */}
            <ScrollSection>
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
                    Creating pathways to careers and leadership roles that
                    empower future generations.
                  </p>
                </div>
              </div>
            </ScrollSection>

            {/* Latest Update Preview */}
            <ScrollSection>
              <div className="bg-card border border-border rounded-lg p-8 my-12 animate-fade-up">
                <p className="text-sm text-primary font-semibold uppercase tracking-wide">
                  Latest Update
                </p>
                <h2 className="text-2xl font-bold text-foreground mt-2 mb-4">
                  Expanding Our Reach
                </h2>
                <p className="text-foreground/70 mb-6">
                  We are thrilled to announce new partnerships and expanded
                  programs launching this year to serve more girls in
                  underserved communities.
                </p>
                <Link href="/updates">
                  <Button variant="default">View All Updates</Button>
                </Link>
              </div>
            </ScrollSection>
          </div>
        </ScrollSection>

        {/* About Section */}
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <ScrollSection>
            <div className="mb-16">
              <h1 className="text-5xl font-bold mb-8 text-primary">
                About Future Careers
              </h1>
              <p className="text-xl text-foreground/80 text-pretty leading-relaxed">
                Future Careers is a career pathway and mentoring platform
                designed for school and university students who are preparing
                for academic and professional life.
              </p>
            </div>
          </ScrollSection>

          {/* About the Project */}
          <ScrollSection>
            <div className="mb-16 space-y-6">
              <h2 className="text-3xl font-bold text-primary">Our Purpose</h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  We help students discover their strengths, explore career
                  options, and make informed decisions about their education and
                  future professions.
                </p>
                <p>
                  Future Careers was created to bridge the gap between education
                  and real world career planning. Many students struggle with
                  choosing the right academic path, understanding professional
                  industries, and identifying their strengths.
                </p>
                <p>
                  Our platform connects students with experienced mentors and
                  provides structured guidance to support confident academic and
                  career decisions.
                </p>
              </div>
            </div>
          </ScrollSection>

          {/* Access & Support */}
          <ScrollSection>
            <div className="mb-16 space-y-6 bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground">
                Free & Supported
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  <span className="font-semibold text-primary">
                    All of our sessions, mentorship, and activities are
                    completely free of charge.
                  </span>
                </p>
                <p>
                  We are supported by dedicated partners who believe in youth
                  development and education. Our partners contribute their time,
                  expertise, and support without any fee or financial
                  expectation.
                </p>
              </div>
            </div>
          </ScrollSection>

          {/* Legacy & Mission */}
          <ScrollSection>
            <div className="mb-16 space-y-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground">
                The Taghiyev Legacy
              </h2>
              <p className="text-lg text-foreground/80 text-pretty leading-relaxed">
                Future Careers is proudly developed within the framework of HZT
                Awards 2026 and is dedicated to the legacy of Haji Zeynalabdin
                Taghiyev, a visionary philanthropist who believed in the power
                of education and youth empowerment.
              </p>
              <p className="text-lg text-foreground/80 text-pretty leading-relaxed">
                Inspired by his commitment to future generations, we continue
                that mission by guiding students toward clarity, opportunity,
                and long term success.
              </p>
            </div>
          </ScrollSection>

          {/* Mission & Vision */}
          <ScrollSection>
            <div className="flex gap-x-10 flex-col lg:flex-row">
              <div className="flex-1 mb-16 space-y-6 bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground text-primary">
                  Our Mission
                </h2>
                <p className="text-lg text-foreground/80 text-pretty leading-relaxed">
                  To empower school and university students with clarity,
                  confidence, and structured mentorship so they can make
                  informed academic and career decisions aligned with their
                  abilities and future goals.
                </p>
                <p className="text-lg text-foreground/80 text-pretty leading-relaxed">
                  And to make this guidance accessible to everyone, completely
                  free.
                </p>
              </div>

              {/* Vision */}
              <div className="flex-1 mb-16 space-y-6 bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground text-primary">
                  Our Vision
                </h2>
                <p className="text-lg text-foreground/80 text-pretty leading-relaxed">
                  To become a leading youth career development platform that
                  transforms how students approach academic planning and career
                  exploration through mentorship, digital tools, and real world
                  insight.
                </p>
                <p className="text-lg text-foreground/80 text-pretty leading-relaxed">
                  We believe education guidance should be simple, accessible,
                  and supportive for every student.
                </p>
              </div>
            </div>
          </ScrollSection>

          {/* Core Values */}
          <ScrollSection>
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
          </ScrollSection>

          {/* Inspiration Note */}
          <ScrollSection>
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
          </ScrollSection>
        </div>

        {/* Team Section */}
        <ScrollSection className="pt-24">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <h1 className="text-5xl font-bold text-primary mb-6">Our Team</h1>
              <p className="text-xl text-foreground/80 max-w-3xl text-pretty leading-relaxed">
                Behind Future Careers is a passionate team committed to building
                opportunities for students and shaping pathways for a better
                future.
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
        </ScrollSection>

        {/* Mentors Section */}
        <ScrollSection className="pt-24">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <h1 className="text-5xl font-bold text-primary mb-6">
                Our Mentors
              </h1>
              <p className="text-xl text-foreground/80 max-w-3xl text-pretty leading-relaxed">
                Our mentors are experienced professionals and academic advisors
                who guide students through career exploration, academic
                planning, and personal development. They volunteer their
                knowledge and experience to support students without any fee.
              </p>
            </div>

            {/* Mentors Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mentors.map((mentor) => (
                <MentorCard key={mentor.id} mentor={mentor} />
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* Reserve Meeting Section */}
        <ScrollSection className="py-24">
          <div className="mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 border border-primary/20 text-center space-y-4 animate-fade-up">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold text-primary">
                  Reserve Meeting
                </h2>
                <p className="text-md text-foreground/80">
                  Booking your session is easy:
                </p>
                <div className="text-md text-foreground/80">
                  1. Choose a mentor. 2. Select a time. 3. Reserve your seat.
                </div>
              </div>

              <p className="text-foreground text-lg leading-relaxed">
                <span className="font-semibold">
                  No fees. No complicated forms.
                </span>{" "}
                Just a simple reservation and your journey begins.
              </p>

              <Button size="xl" asChild>
                <Link href="/reserve-meeting">Book Now</Link>
              </Button>
            </div>
          </div>
        </ScrollSection>
      </main>
    </>
  );
}
