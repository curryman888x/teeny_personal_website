import type { CSSProperties } from "react";

import { asset } from "../base";
import type { SiteContent } from "../types";

export function Hero({ content }: { content: SiteContent }) {
  const style: CSSProperties | undefined = content.hero.image
    ? {
        backgroundImage:
          `linear-gradient(180deg, rgba(18,22,31,0.32), rgba(18,22,31,0.58)), ` +
          `url(${asset(content.hero.image)})`,
      }
    : undefined;

  return (
    <header className={`hero ${content.hero.image ? "" : "hero--plain"}`} style={style}>
      <div className="hero__inner">
        <p className="hero__greeting">{content.hero.greeting}</p>
        <h1 className="hero__name">{content.name}</h1>
        {content.hero.tagline && <p className="hero__tagline">{content.hero.tagline}</p>}
      </div>
      <a className="hero__scroll" href="#about" aria-label="Scroll to About">
        &darr;
      </a>
    </header>
  );
}
