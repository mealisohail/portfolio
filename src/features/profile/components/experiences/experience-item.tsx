import Image from "next/image";
import React from "react";

import { Experience } from "../../types/experiences";
import { ExperiencePositionItem } from "./experience-position-item";

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div className="screen-line-after space-y-4 py-4">
      <div className="flex items-center space-x-2">
        <span className="flex size-6 shrink-0 items-center justify-center">
          {experience.companyLogo ? (
            <Image
              src={experience.companyLogo}
              alt={experience.company}
              width={24}
              height={24}
              className="rounded-full"
            />
          ) : (
            <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          )}
        </span>

        <h3 className="font-heading text-lg leading-snug font-medium">
          {experience.company}
        </h3>

        {experience?.current && (
          <span className="flex items-center gap-1.5 rounded-full border border-success-foreground/30 bg-success-foreground/10 px-2 py-0.5 font-mono text-[11px] text-success-foreground">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success-foreground opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-1.5 rounded-full bg-success-foreground" />
            </span>
            Current
          </span>
        )}
      </div>

      <div className="relative space-y-4 pl-1 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position, index) => {
          return <ExperiencePositionItem key={index} position={position} />;
        })}
      </div>
    </div>
  );
}
