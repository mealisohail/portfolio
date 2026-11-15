import { groupBy, sortBy } from "lodash";
import { ExternalLinkIcon } from "lucide-react";

import {
  type ContributionDay,
  type ContributionYear,
  GitHubGraph,
} from "./github-graph";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

const LEETCODE_USERNAME = "mealisohail";
const GITHUB_USERNAME = "mealisohail";

const QUERY = `query($u: String!) {
  matchedUser(username: $u) {
    submitStatsGlobal { acSubmissionNum { difficulty count } }
    userCalendar { streak totalActiveDays }
  }
  allQuestionsCount { difficulty count }
  userContestRanking(username: $u) { rating topPercentage }
}`;

type Count = { difficulty: "All" | "Easy" | "Medium" | "Hard"; count: number };

type LeetCodeResponse = {
  data?: {
    matchedUser: {
      submitStatsGlobal: { acSubmissionNum: Count[] };
      userCalendar: { streak: number; totalActiveDays: number };
    } | null;
    allQuestionsCount: Count[];
    userContestRanking: { rating: number; topPercentage: number } | null;
  };
};

// ponytail: LeetCode has no official API; this is the public GraphQL its own site uses.
// If it fails or changes shape, the section hides itself instead of breaking the page.
async function getLeetCodeStats() {
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
      },
      body: JSON.stringify({
        query: QUERY,
        variables: { u: LEETCODE_USERNAME },
      }),
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;

    const { data } = (await res.json()) as LeetCodeResponse;
    if (!data?.matchedUser) return null;

    const solved = Object.fromEntries(
      data.matchedUser.submitStatsGlobal.acSubmissionNum.map((c) => [
        c.difficulty,
        c.count,
      ])
    );
    const total = Object.fromEntries(
      data.allQuestionsCount.map((c) => [c.difficulty, c.count])
    );

    return {
      solved,
      total,
      activeDays: data.matchedUser.userCalendar.totalActiveDays,
      streak: data.matchedUser.userCalendar.streak,
      contest: data.userContestRanking,
    };
  } catch {
    return null;
  }
}

// ponytail: GitHub's own contributions API needs a token; this free public mirror doesn't.
// Swap to GitHub GraphQL + a read-only token if it ever goes away.
async function getGitHubContributions(): Promise<ContributionYear[] | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=all`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data = (await res.json()) as {
      total: Record<string, number>;
      contributions: ContributionDay[];
    };
    if (!data.contributions?.length) return null;

    const byYear = groupBy(data.contributions, (d) => d.date.slice(0, 4));
    return Object.keys(byYear)
      .sort((x, y) => y.localeCompare(x)) // newest year first
      .map((year) => {
        const days = sortBy(byYear[year], "date");
        // Pad the first week so each column starts on Sunday, like GitHub.
        const pad = new Date(days[0].date).getUTCDay();
        return {
          year,
          total: data.total[year] ?? 0,
          days: [...Array(pad).fill(null), ...days],
        };
      });
  } catch {
    return null;
  }
}

const DIFFICULTIES = [
  { key: "Easy", bar: "bg-emerald-500", text: "text-emerald-500" },
  { key: "Medium", bar: "bg-amber-500", text: "text-amber-500" },
  { key: "Hard", bar: "bg-red-500", text: "text-red-500" },
] as const;

function SourceLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 font-mono text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-info-foreground hover:underline"
    >
      {children}
      <ExternalLinkIcon className="size-3" />
    </a>
  );
}

function SubHeading({ title, href }: { title: string; href: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <h3 className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
        {title}
      </h3>
      <SourceLink href={href}>Profile</SourceLink>
    </div>
  );
}

type LeetCodeStats = NonNullable<Awaited<ReturnType<typeof getLeetCodeStats>>>;

function LeetCodeBlock({ stats }: { stats: LeetCodeStats }) {
  const facts = [
    stats.contest && {
      label: "Contest rating",
      value: Math.round(stats.contest.rating).toLocaleString("en-IN"),
    },
    stats.contest && {
      label: "Global",
      value: `Top ${stats.contest.topPercentage}%`,
    },
    { label: "Active days", value: stats.activeDays },
    { label: "Best streak", value: `${stats.streak} days` },
  ].filter(Boolean) as { label: string; value: string | number }[];

  return (
    <div className="space-y-4">
      <SubHeading
        title="LeetCode"
        href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
      />

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <div>
          <p className="font-heading text-4xl leading-none font-medium tabular-nums">
            {stats.solved.All}
          </p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            problems solved
          </p>
        </div>

        <div className="min-w-56 flex-1 space-y-2">
          <div
            className="flex h-1.5 gap-0.5 overflow-hidden rounded-full"
            role="img"
            aria-label={DIFFICULTIES.map(
              (d) => `${stats.solved[d.key]} ${d.key}`
            ).join(", ")}
          >
            {DIFFICULTIES.map((d) => (
              <span
                key={d.key}
                className={d.bar}
                style={{ flex: stats.solved[d.key] }}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground">
            {DIFFICULTIES.map((d) => (
              <span key={d.key}>
                <span className={d.text}>{d.key}</span>{" "}
                <span className="text-foreground tabular-nums">
                  {stats.solved[d.key]}
                </span>
                /{stats.total[d.key]}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-muted-foreground">
        {facts.map((f) => (
          <div key={f.label}>
            <p className="text-sm text-foreground tabular-nums">{f.value}</p>
            <p>{f.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function GitHubBlock({ years }: { years: ContributionYear[] }) {
  return (
    <div className="space-y-3">
      <SubHeading
        title="GitHub"
        href={`https://github.com/${GITHUB_USERNAME}`}
      />
      <GitHubGraph years={years} />
    </div>
  );
}

export async function CodingStats() {
  const [leetcode, github] = await Promise.all([
    getLeetCodeStats(),
    getGitHubContributions(),
  ]);
  if (!leetcode && !github) return null;

  return (
    <Panel id="coding" className="scroll-mt-[4.75rem]">
      <PanelHeader>
        <PanelTitle>Coding</PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-6">
        {leetcode && <LeetCodeBlock stats={leetcode} />}
        {leetcode && github && (
          <div className="border-t border-dashed border-border" />
        )}
        {github && <GitHubBlock years={github} />}
      </PanelContent>
    </Panel>
  );
}
