import type { EducationItem } from "../types";
import { Logo } from "./Logo";
import { SectionHeading } from "./SectionHeading";

export function Education({ items }: { items: EducationItem[] }) {
  return (
    <section id="education" className="section section--sand">
      <div className="container">
        <SectionHeading>Education</SectionHeading>

        <div className="edu-grid">
          {items.map((item) => (
            <article key={item.school} className="edu-card">
              <div className="edu-card__head">
                <div>
                  <h3 className="edu-card__school">{item.school}</h3>
                  <p className="edu-card__degree">{item.degree}</p>
                  <p className="edu-card__dates">
                    {item.start} &ndash; {item.end}
                  </p>
                </div>
                <Logo src={item.logo} name={item.school} />
              </div>

              {item.courseGroups?.map((g) => (
                <p key={g.label} className="edu-card__courses">
                  <span className="edu-card__courses-label">{g.label}:</span> <em>{g.courses}</em>
                </p>
              ))}

              {item.notes && item.notes.length > 0 && (
                <ul className="edu-card__notes">
                  {item.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
