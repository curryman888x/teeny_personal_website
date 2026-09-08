import { useState } from "react";

import { asset } from "../base";
import type { SiteContent } from "../types";
import { SectionHeading } from "./SectionHeading";

function Portrait({ src, name }: { src?: string; name: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(/\s+/)
    .map((w) => w.charAt(0))
    .slice(0, 2)
    .join("");

  if (!src || failed) {
    return (
      <div className="portrait portrait--fallback" aria-hidden="true">
        {initials}
      </div>
    );
  }
  return (
    <img
      className="portrait"
      src={asset(src)}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export function About({ content }: { content: SiteContent }) {
  const { about, name } = content;

  return (
    <section id="about" className="section section--cream">
      <div className="container">
        <SectionHeading>{about.heading}</SectionHeading>

        <p className="about__body">{about.body}</p>

        <div className="about__details">
          <Portrait src={about.portrait} name={name} />

          <div className="about__details-body">
            <h3 className="subheading">More Details</h3>
            <dl className="detail-list">
              {about.details.map((row) => (
                <div key={row.label} className="detail-list__row">
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>

            {about.resumeFile && (
              <a className="resume-link" href={asset(about.resumeFile)} target="_blank" rel="noreferrer">
                Resume <span aria-hidden="true">&darr;</span>
              </a>
            )}
          </div>
        </div>

        {content.skills.length > 0 && (
          <ul className="tags about__skills">
            {content.skills.map((s) => (
              <li key={s} className="tag">
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
