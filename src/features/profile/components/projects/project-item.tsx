import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon, ExternalLink, FolderCodeIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

import { Markdown } from "@/components/markdown";
import { Tag } from "@/components/ui/tag";
import { Prose } from "@/components/ui/typography";
import { cn } from "@/lib/cn";

import { Project } from "../../types/projects";

export function ProjectItem({
  className,
  project,
}: {
  className?: string;
  project: Project;
}) {
  return (
    <AccordionPrimitive.Item value={project.id} asChild>
      <div className={cn("flex items-center", className)}>
        <FolderCodeIcon className="mx-4 size-5 shrink-0 text-muted-foreground" />

        <div className="flex-1 border-l border-grid">
          <AccordionPrimitive.Trigger className="group/project flex w-full items-center justify-between gap-4 px-2 py-4 text-left select-none [&[data-state=open]_.lucide-chevron-down]:rotate-180">
            <div>
              <h3 className="mb-1 flex items-center gap-2 font-heading text-lg leading-snug font-medium text-balance decoration-info-foreground/70 underline-offset-4 group-hover/project:underline">
                {project.title}
                <a
                  className="shrink-0 -translate-y-px text-muted-foreground"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="pointer-events-none size-4" />
                </a>
              </h3>

              <p className="font-mono text-sm text-muted-foreground">
                {project.time}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-4">
              {project.image && (
                <Image
                  src={project.image}
                  alt=""
                  sizes="112px"
                  unoptimized={project.image.src.endsWith(".gif")}
                  className="hidden aspect-[16/10] w-28 rounded-md border border-grid object-cover object-left transition-[rotate,scale,border-color] duration-500 ease-out group-hover/project:scale-[1.03] group-hover/project:-rotate-1 group-hover/project:border-info-foreground/40 group-data-[state=open]/project:hidden motion-reduce:transition-none sm:block"
                />
              )}
              <ChevronDownIcon className="size-4 shrink-0 text-muted-foreground transition-transform duration-300" />
            </div>
          </AccordionPrimitive.Trigger>

          <AccordionPrimitive.Content className="space-y-4 overflow-hidden transition-all duration-300 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            {project.image && (
              <div className="px-2">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  sizes="(min-width: 768px) 700px, 100vw"
                  unoptimized={project.image.src.endsWith(".gif")}
                  className="h-auto w-full rounded-lg border border-grid"
                />
              </div>
            )}

            {project?.description && (
              <Prose className="px-2">
                <Markdown>{project?.description}</Markdown>
              </Prose>
            )}

            {Array.isArray(project.tags) && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 px-2 pb-4">
                {project.tags.map((skill, index) => (
                  <Tag key={index}>{skill}</Tag>
                ))}
              </div>
            )}
          </AccordionPrimitive.Content>
        </div>
      </div>
    </AccordionPrimitive.Item>
  );
}
