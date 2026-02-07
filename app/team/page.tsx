import { Navigation } from "@/components/navigation";
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

export default function TeamPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="mb-16">
        <h1 className="text-5xl font-bold text-foreground mb-6">Our Team</h1>
        <p className="text-xl text-foreground/80 max-w-3xl text-pretty leading-relaxed">
          We are a dedicated group of educators, mentors, and advocates
          committed to empowering girls through quality mentorship and
          education. Here are the people who make HZT Girls possible.
        </p>
      </section>

      {/* Team Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </section>

      {/* Team Philosophy */}
      <section className="mt-16 space-y-6 bg-card border border-border rounded-lg p-8">
        <h2 className="text-3xl font-bold text-foreground">
          Our Team Philosophy
        </h2>
        <p className="text-lg text-foreground/80 text-pretty leading-relaxed">
          Every member of our team is driven by the belief that education and
          mentorship can transform lives. We work collaboratively to create
          safe, inclusive spaces where girls can learn, grow, and discover their
          potential. Our diversity of backgrounds and expertise allows us to
          serve our students with depth, empathy, and professionalism.
        </p>
      </section>
    </div>
  );
}
