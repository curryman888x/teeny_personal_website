import { useEffect, useState } from "react";

import { getProfile } from "./api";
import type { Profile } from "./types";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { ContactForm } from "./components/ContactForm";

export default function App() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProfile()
      .then(setProfile)
      .catch((e: unknown) => setError(e instanceof Error ? e.message : "Failed to load"));
  }, []);

  return (
    <div className="page">
      <main className="container">
        {error && (
          <p className="notice notice--error">
            Couldn&apos;t reach the API ({error}). Is the backend running on port 8000?
          </p>
        )}

        {!profile && !error && <p className="notice">Loading…</p>}

        {profile && (
          <>
            <Hero profile={profile} />
            <Experience items={profile.experience} />
            <Projects items={profile.projects} />
            <ContactForm />
          </>
        )}
      </main>

      <footer className="container footer">
        <span>© {new Date().getFullYear()} Tyler Ni</span>
      </footer>
    </div>
  );
}
