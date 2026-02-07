import { Navigation } from "@/components/navigation";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="mb-16">
        <h1 className="text-5xl font-bold text-foreground mb-8">
          About HZT Girls
        </h1>
        <p className="text-xl text-foreground/80 text-pretty leading-relaxed">
          HZT Girls is rooted in the vision of providing equitable access to
          education and mentorship. We believe every girl deserves the
          opportunity to develop her potential and shape her own future.
        </p>
      </section>

      {/* About the Project */}
      <section className="mb-16 space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Our Project</h2>
        <div className="space-y-4 text-foreground/80 leading-relaxed">
          <p>
            Founded with a commitment to social inclusion, HZT Girls brings
            together educators, mentors, and community leaders to create a
            supportive ecosystem where girls can thrive academically,
            personally, and professionally.
          </p>
          <p>
            Our programs are designed to address educational disparities while
            building confidence, critical thinking, and leadership skills that
            prepare girls for meaningful contributions to society.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mb-16 space-y-6 bg-card border border-border rounded-lg p-8">
        <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
        <p className="text-lg text-foreground/80 text-pretty leading-relaxed">
          To empower girls through quality mentorship, education, and
          opportunity, creating a generation of confident, capable leaders who
          drive positive change in their communities.
        </p>
      </section>

      {/* Vision */}
      <section className="mb-16 space-y-6 bg-card border border-border rounded-lg p-8">
        <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
        <p className="text-lg text-foreground/80 text-pretty leading-relaxed">
          A world where every girl has access to mentorship, quality education,
          and pathways to success, regardless of her background or
          circumstances.
        </p>
      </section>

      {/* Core Values */}
      <section className="mb-16 space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Core Values</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3 p-6 bg-card border border-border rounded-lg">
            <h3 className="text-lg font-semibold text-primary">Inclusion</h3>
            <p className="text-foreground/70">
              We believe every girl deserves equal opportunity and a voice in
              her community.
            </p>
          </div>
          <div className="space-y-3 p-6 bg-card border border-border rounded-lg">
            <h3 className="text-lg font-semibold text-primary">Excellence</h3>
            <p className="text-foreground/70">
              We are committed to the highest standards in education and
              mentorship.
            </p>
          </div>
          <div className="space-y-3 p-6 bg-card border border-border rounded-lg">
            <h3 className="text-lg font-semibold text-primary">Empowerment</h3>
            <p className="text-foreground/70">
              We focus on building confidence, skills, and agency in every girl
              we serve.
            </p>
          </div>
          <div className="space-y-3 p-6 bg-card border border-border rounded-lg">
            <h3 className="text-lg font-semibold text-primary">Community</h3>
            <p className="text-foreground/70">
              We believe in the power of collective action and shared
              responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Inspiration Note */}
      <section className="space-y-6 text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 border border-primary/20">
        <h2 className="text-2xl font-bold text-foreground">
          The Taghiyev Legacy
        </h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto text-pretty leading-relaxed">
          Inspired by the pioneering work of social reformers who believed in
          the transformative power of education, HZT Girls carries forward the
          legacy of social inclusion and human development. We honor the vision
          of those who understood that investing in girls means investing in
          entire communities.
        </p>
      </section>
    </div>
  );
}
