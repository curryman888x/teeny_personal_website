import type { Profile } from "../types";

export function Hero({ profile }: { profile: Profile }) {
  return (
    <header className="hero">
      <h1 className="hero__name">{profile.name}</h1>
      <p className="hero__tagline">{profile.tagline}</p>
      <p className="hero__about">{profile.about}</p>

      <ul className="hero__links">
        {profile.links.map((link) => (
          <li key={link.label}>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {profile.skills.length > 0 && (
        <ul className="tags">
          {profile.skills.map((skill) => (
            <li key={skill} className="tag">
              {skill}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
