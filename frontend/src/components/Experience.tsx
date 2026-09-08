import type { ExperienceItem } from "../types";

export function Experience({ items }: { items: ExperienceItem[] }) {
  if (items.length === 0) return null;

  return (
    <section className="section" id="experience">
      <h2 className="section__title">Experience</h2>
      <ol className="timeline">
        {items.map((item) => (
          <li key={`${item.company}-${item.start}`} className="timeline__item">
            <div className="timeline__head">
              <span className="timeline__role">{item.role}</span>
              <span className="timeline__company">{item.company}</span>
              <span className="timeline__dates">
                {item.start} – {item.end}
                {item.location ? ` · ${item.location}` : ""}
              </span>
            </div>
            {item.highlights.length > 0 && (
              <ul className="timeline__highlights">
                {item.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
