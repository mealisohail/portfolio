import { Slot } from "@radix-ui/react-slot";
import { ChevronDownIcon } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function CollapsibleList<T>({
  items,
  max = 3,

  keyExtractor,
  renderItem,
}: {
  items: T[];
  max?: number;

  keyExtractor?: (item: T) => string;
  renderItem: (item: T) => React.ReactNode;
}) {
  return (
    <Collapsible>
      {items.slice(0, max).map((award, index) => (
        <Slot
          key={typeof keyExtractor === "function" ? keyExtractor(award) : index}
          className="border-b border-grid"
        >
          {renderItem(award)}
        </Slot>
      ))}

      <CollapsibleContent>
        {items.slice(max).map((award, index) => (
          <Slot
            key={
              typeof keyExtractor === "function"
                ? keyExtractor(award)
                : max + index
            }
            className="border-b border-grid"
          >
            {renderItem(award)}
          </Slot>
        ))}
      </CollapsibleContent>

      {items?.length > 3 && (
        <CollapsibleTrigger asChild>
          <Button className="group/collapsible-trigger mx-auto -mt-px flex">
            <ChevronDownIcon className="group-[&[data-state=open]]/collapsible-trigger:rotate-180" />
            <span className="hidden group-[&[data-state=closed]]/collapsible-trigger:block">
              Show more ({items.length - max})
            </span>

            <span className="hidden group-[&[data-state=open]]/collapsible-trigger:block">
              Show less ({items.length - max})
            </span>
          </Button>
        </CollapsibleTrigger>
      )}
    </Collapsible>
  );
}
