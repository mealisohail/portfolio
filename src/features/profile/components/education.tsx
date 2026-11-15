import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { EDUCATION } from "../data/experiences";
import { ExperiencePositionItem } from "./experiences/experience-position-item";
import { Panel, PanelHeader, PanelTitle } from "./panel";

export function Education() {
  return (
    <Panel id="education" className="scroll-mt-[4.75rem]">
      <PanelHeader>
        <PanelTitle>Education</PanelTitle>
      </PanelHeader>

      <AccordionPrimitive.Root type="multiple" asChild>
        <div className="px-4 py-4">
          {/* Same tree line as the Experience section */}
          <div className="relative space-y-4 pl-1 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
            {EDUCATION.map((position) => (
              <ExperiencePositionItem key={position.id} position={position} />
            ))}
          </div>
        </div>
      </AccordionPrimitive.Root>
    </Panel>
  );
}
