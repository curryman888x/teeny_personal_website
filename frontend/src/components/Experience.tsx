import type { ExperienceItem } from "../types";
import { Logo } from "./Logo";
import { SectionHeading } from "./SectionHeading";

export function Experience({ items }: { items: ExperienceItem[] }) {
  return (
    <section id="experience" className="section section--paper">
      <div className="container">
        <SectionHeading>My Experiences</SectionHeading>

        <ol className="xp-list">
          {items.map((item) => (
            <li key={`${item.company}-${item.start}`} className="xp-item">
              <div className="xp-item__logo">
                <Logo src={item.logo} name={item.company} />
              </div>

              <div className="xp-item__body">
                <h3 className="xp-item__company">{item.company}</h3>
                <p className="xp-item__meta">
                  <em>{item.start} &ndash; {item.end}</em>
                  {item.location && (
                    <>
                      <br />
                      <em>{item.location}</em>
                    </>
                  )}
                  <br />
                  <em>{item.role}</em>
                </p>

                {item.blurb && <p className="xp-item__blurb">{item.blurb}</p>}

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="xp-item__highlights">
                    {item.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
