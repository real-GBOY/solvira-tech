import { CarePhone } from "./CarePhone";
import { CARE_STEPS } from "./content";

/** Solvira Care phone peeking up from the bottom of a tinted panel. Decorative: the real walkthrough lives on /solvira-care. */
export function AppMockup() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-gradient-to-br from-sage-tint via-cream to-parchment">
      <div className="pointer-events-none absolute start-1/2 top-[8%] w-[330px] origin-top -translate-x-1/2 scale-[0.6] rtl:translate-x-1/2">
        <CarePhone screen={CARE_STEPS[1].screen} stepKey={1} />
      </div>
    </div>
  );
}
