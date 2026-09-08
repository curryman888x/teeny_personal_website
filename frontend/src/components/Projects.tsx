import type { ProjectItem } from "../types";

export function Projects({ items }: { items: ProjectItem[] }) {
  if (items.length === 0) return null;

  return (
    <section className="section" id="projects">
      <h2 className="section__title">Projects</h2>
      <div className="cards">
        {items.map((project) => (
          <article key={project.name} className="card">
            <h3 className="card__title">
              {project.url ? (
                <a href={project.url} target="_blank" rel="noreferrer">
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p className="card__body">{project.description}</p>
            {project.tech.length > 0 && (
              <ul className="tags">
                {project.tech.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
