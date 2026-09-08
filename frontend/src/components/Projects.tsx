import { useState } from "react";

import { asset } from "../base";
import type { ProjectItem } from "../types";
import { SectionHeading } from "./SectionHeading";

function Tile({ project }: { project: ProjectItem }) {
  const [failed, setFailed] = useState(false);

  if (!project.image || failed) {
    return (
      <div className="project-card__tile project-card__tile--fallback">
        <span>{project.name}</span>
      </div>
    );
  }
  return (
    <div className="project-card__tile">
      <img
        src={asset(project.image)}
        alt={`${project.name} preview`}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export function Projects({ items }: { items: ProjectItem[] }) {
  return (
    <section id="projects" className="section section--sand">
      <div className="container">
        <SectionHeading>My Projects</SectionHeading>

        <div className="project-grid">
          {items.map((project) => (
            <article key={project.name} className="project-card">
              <Tile project={project} />

              <div className="project-card__body">
                <h3 className="project-card__title">{project.name}</h3>
                {project.subtitle && <p className="project-card__subtitle">{project.subtitle}</p>}
                <p className="project-card__desc">{project.description}</p>

                {project.tech && project.tech.length > 0 && (
                  <ul className="tags">
                    {project.tech.map((t) => (
                      <li key={t} className="tag">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}

                {(project.url || project.repo) && (
                  <p className="project-card__links">
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noreferrer">
                        Live &#8599;
                      </a>
                    )}
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noreferrer">
                        Source &#8599;
                      </a>
                    )}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
