import type { ReactNode } from "react";

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <div className="heading">
      <h2 className="heading__title">{children}</h2>
      <span className="heading__rule" aria-hidden="true" />
    </div>
  );
}
