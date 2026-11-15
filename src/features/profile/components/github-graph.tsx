"use client";

import { useState } from "react";

import { cn } from "@/lib/cn";

export type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export type ContributionYear = {
  year: string;
  total: number;
  /** null = padding so each column starts on Sunday */
  days: (ContributionDay | null)[];
};

const LEVEL_CLASS = [
  "bg-muted",
  "bg-info-foreground/25",
  "bg-info-foreground/50",
  "bg-info-foreground/75",
  "bg-info-foreground",
] as const;

export function GitHubGraph({ years }: { years: ContributionYear[] }) {
  const [selected, setSelected] = useState(years[0].year);
  const current = years.find((y) => y.year === selected) ?? years[0];
  const allTime = years.reduce((sum, y) => sum + y.total, 0);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-sm text-foreground tabular-nums">
            {allTime.toLocaleString("en-IN")}
          </span>{" "}
          contributions since {years[years.length - 1].year}
        </p>

        <div
          role="tablist"
          aria-label="Contribution year"
          className="flex flex-wrap gap-1"
        >
          {years.map((y) => (
            <button
              key={y.year}
              role="tab"
              aria-selected={y.year === selected}
              onClick={() => setSelected(y.year)}
              className={cn(
                "rounded-md px-2 py-0.5 font-mono text-xs tabular-nums transition-colors duration-200",
                y.year === selected
                  ? "bg-accent text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {y.year}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto pb-1">
        <div
          key={current.year}
          role="img"
          aria-label={`${current.total} GitHub contributions in ${current.year}`}
          className="grid w-max animate-in grid-flow-col grid-rows-7 gap-[3px] duration-300 fade-in-0"
        >
          {current.days.map((day, i) =>
            day ? (
              <span
                key={day.date}
                title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                className={cn("size-2.5 rounded-[2px]", LEVEL_CLASS[day.level])}
              />
            ) : (
              <span key={`pad-${i}`} className="size-2.5" />
            )
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-muted-foreground">
        <span>
          <span className="text-foreground tabular-nums">{current.total}</span>{" "}
          contributions in {current.year}
        </span>
        <span className="flex items-center gap-1">
          Less
          {LEVEL_CLASS.map((c) => (
            <span key={c} className={cn("size-2.5 rounded-[2px]", c)} />
          ))}
          More
        </span>
      </div>
    </div>
  );
}
