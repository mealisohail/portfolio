import { groupBy } from "lodash";
import Image from "next/image";

import { SimpleTooltip } from "@/components/ui/tooltip";

import { TECH_STACK } from "../../data/tech-stack";
import { TechStack } from "../../types/tech-stack";

// Group order follows the order of first appearance in TECH_STACK.
const GROUPS = Object.entries(
  groupBy(TECH_STACK, (item) => item.group)
) as [TechStack["group"], TechStack[]][];

function TechIcon({ item }: { item: TechStack }) {
  const imgClass =
    "transition-transform duration-300 ease-out group-hover/tech:-translate-y-0.5 group-hover/tech:scale-105";

  return (
    <SimpleTooltip content={item.title}>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={item.title}
        className="group/tech flex size-10 items-center justify-center rounded-lg border border-transparent transition-colors duration-300 hover:border-info-foreground/40 hover:bg-info-foreground/5"
      >
        {item.theme ? (
          <>
            <Image
              src={`/images/tech-stack-icons/${item.key}-light.svg`}
              alt={`${item.title} light icon`}
              width={28}
              height={28}
              className={`hidden [html.light_&]:block ${imgClass}`}
            />
            <Image
              src={`/images/tech-stack-icons/${item.key}-dark.svg`}
              alt={`${item.title} dark icon`}
              width={28}
              height={28}
              className={`hidden [html.dark_&]:block ${imgClass}`}
            />
          </>
        ) : (
          <Image
            src={`/images/tech-stack-icons/${item.key}.svg`}
            alt={`${item.title} icon`}
            width={28}
            height={28}
            className={imgClass}
          />
        )}
      </a>
    </SimpleTooltip>
  );
}

export function TeckStackContent() {
  return (
    <div className="space-y-3 select-none">
      {GROUPS.map(([group, items]) => (
        <div
          key={group}
          className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:items-center sm:gap-3"
        >
          <h3 className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
            {group}
          </h3>
          <div className="flex flex-wrap gap-1">
            {items.map((item) => (
              <TechIcon key={item.key} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
