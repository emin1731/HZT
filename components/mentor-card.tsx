import { Mentor } from "@/lib/types";
import { Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface MentorCardProps {
  mentor: Mentor;
}

export function MentorCard({ mentor }: MentorCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors space-y-0 h-full flex flex-col">
      {/* Photo */}
      {mentor.photo && (
        <div className="relative w-full h-48 bg-muted overflow-hidden">
          <Image
            src={mentor.photo}
            alt={`${mentor.name} ${mentor.surname}`}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6 space-y-4 flex flex-col flex-grow">
        <div>
          <h3 className="font-semibold text-foreground text-lg">
            {mentor.name} {mentor.surname}
          </h3>
          {mentor.expertise && (
            <p className="text-sm text-primary font-medium mt-1">
              {mentor.expertise}
            </p>
          )}
        </div>

        <p className="text-foreground/70 text-sm leading-relaxed flex-grow">
          {mentor.description}
        </p>

        <div className="space-y-3 pt-2 animate-fade-up">
          {(mentor.linkedIn || mentor.instagram) && (
            <div className="flex gap-3">
              {mentor.linkedIn && (
                <Link
                  href={mentor.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              )}
              {mentor.instagram && (
                <Link
                  href={mentor.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              )}
            </div>
          )}
          <Button size="sm" className="w-full" asChild>
            <Link href="/reserve-meeting">Reserve Session</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
