"use client";

import { CornerDownLeftIcon, SearchIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { META_THEME_COLORS } from "@/config/site";
import { USER } from "@/data/user";
import { useMetaColor } from "@/hooks/use-meta-color";
import { cn } from "@/lib/cn";
import { decodeEmail } from "@/utils/string";

import { PROJECTS } from "../data/projects";
import { SOCIAL_LINKS } from "../data/social-links";

type Item = {
  group: "Go to" | "Projects" | "Links" | "Actions";
  label: string;
  href?: string;
  run?: () => void;
};

const SECTIONS = [
  ["About", "#about"],
  ["Stack", "#stack"],
  ["Coding", "#coding"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Awards", "#awards"],
] as const;

export function CommandMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const { resolvedTheme, setTheme } = useTheme();
  const { setMetaColor } = useMetaColor();

  const items = useMemo<Item[]>(
    () => [
      ...SECTIONS.map(([label, href]) => ({
        group: "Go to" as const,
        label,
        href,
      })),
      ...PROJECTS.map((p) => ({
        group: "Projects" as const,
        label: p.title.split(",")[0],
        href: p.link,
      })),
      ...SOCIAL_LINKS.map((s) => ({
        group: "Links" as const,
        label: s.title,
        href: s.href,
      })),
      {
        group: "Actions",
        label: "Copy email",
        run: () =>
          navigator.clipboard
            .writeText(decodeEmail(USER.email))
            .then(() => toast.success("Email copied")),
      },
      {
        group: "Actions",
        label: "Toggle theme",
        run: () => {
          const next = resolvedTheme === "dark" ? "light" : "dark";
          setTheme(next);
          setMetaColor(META_THEME_COLORS[next]);
        },
      },
    ],
    [resolvedTheme, setTheme, setMetaColor]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q
      ? items.filter((i) => `${i.label} ${i.group}`.toLowerCase().includes(q))
      : items;
  }, [items, query]);

  const open = () => {
    setQuery("");
    setActive(0);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (dialogRef.current?.open) close();
        else open();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const select = (item: Item | undefined) => {
    if (!item) return;
    close();
    if (item.run) return item.run();
    if (!item.href) return;
    if (item.href.startsWith("#")) {
      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", item.href);
    } else {
      window.open(item.href, "_blank", "noopener,noreferrer");
    }
  };

  const onInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const step = e.key === "ArrowDown" ? 1 : -1;
      setActive(
        (i) => (i + step + filtered.length) % Math.max(filtered.length, 1)
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      select(filtered[active]);
    }
  };

  // Keep the highlighted row in view while moving with the arrow keys.
  useEffect(() => {
    dialogRef.current
      ?.querySelector(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active]);

  let lastGroup: string | undefined;

  return (
    <>
      <Button
        variant="outline"
        className="h-8 gap-1.5 px-2.5 font-mono text-xs text-muted-foreground"
        onClick={open}
        aria-label="Open command menu"
      >
        <SearchIcon className="size-3.5" />
        <kbd className="hidden sm:inline">⌘K</kbd>
      </Button>

      <dialog
        ref={dialogRef}
        aria-label="Command menu"
        onClick={(e) => e.target === dialogRef.current && close()}
        className={cn(
          "command-menu m-auto mt-[15vh] w-[min(100%-2rem,32rem)] overflow-hidden rounded-xl border border-border bg-popover p-0 text-popover-foreground shadow-2xl",
          "backdrop:bg-black/40"
        )}
      >
        <div className="flex items-center gap-2 border-b border-border px-3">
          <SearchIcon className="size-4 shrink-0 text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onInputKeyDown}
            placeholder="Search sections, projects, links…"
            aria-label="Search"
            className="h-11 w-full bg-transparent font-mono text-sm outline-none placeholder:text-muted-foreground"
          />
          <kbd className="rounded border border-border px-1.5 font-mono text-[10px] text-muted-foreground">
            esc
          </kbd>
        </div>

        <ul role="listbox" className="max-h-80 overflow-y-auto p-1.5">
          {filtered.length === 0 && (
            <li className="px-3 py-6 text-center font-mono text-sm text-muted-foreground">
              No results
            </li>
          )}
          {filtered.map((item, i) => {
            const header = item.group !== lastGroup ? item.group : null;
            lastGroup = item.group;
            return (
              <React.Fragment key={`${item.group}-${item.label}`}>
                {header && (
                  <li
                    role="presentation"
                    className="px-2.5 pt-2 pb-1 font-mono text-[10px] tracking-wider text-muted-foreground uppercase"
                  >
                    {header}
                  </li>
                )}
                <li
                  role="option"
                  aria-selected={i === active}
                  data-index={i}
                  onMouseMove={() => setActive(i)}
                  onClick={() => select(item)}
                  className={cn(
                    "flex cursor-pointer items-center justify-between rounded-md px-2.5 py-2 text-sm transition-colors duration-150",
                    i === active && "bg-accent text-accent-foreground"
                  )}
                >
                  {item.label}
                  {i === active && (
                    <CornerDownLeftIcon className="size-3.5 text-muted-foreground" />
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </dialog>
    </>
  );
}
