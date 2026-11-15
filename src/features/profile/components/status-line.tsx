"use client";

import { useEffect, useState } from "react";

import { USER } from "@/data/user";

const timeFormat = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: USER.timeZone,
});

export function StatusLine() {
  // Rendered only on the client so the server's clock never causes a hydration mismatch.
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(timeFormat.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-success-foreground opacity-60 motion-reduce:hidden" />
        <span className="relative inline-flex size-2 rounded-full bg-success-foreground" />
      </span>
      <span className="line-clamp-1">
        {USER.status}
        {time && (
          <>
            {" · "}
            <span className="tabular-nums">{time}</span> in Akot
          </>
        )}
      </span>
    </div>
  );
}
