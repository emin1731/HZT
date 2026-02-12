import Image from "next/image";

interface TeamMemberCardProps {
  member: {
    id: string;
    name: string;
    role: string;
    bio: string;
    photo?: string;
  };
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors h-full flex flex-col">
      {/* Photo */}
      {member.photo && (
        <div className="relative w-full h-48 bg-muted overflow-hidden">
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6 space-y-4 flex flex-col flex-grow">
        <div>
          <h3 className="font-semibold text-foreground text-lg">
            {member.name}
          </h3>
          <p className="text-sm text-primary font-medium">{member.role}</p>
        </div>

        <p className="text-foreground/70 text-sm leading-relaxed flex-grow">
          {member.bio}
        </p>
      </div>
    </div>
  );
}
