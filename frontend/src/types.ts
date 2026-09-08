// Response shapes from the backend API. Keep in sync with backend/app/models.py.

export interface Link {
  label: string;
  url: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string | null;
  start: string;
  end: string;
  highlights: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  tech: string[];
  url: string | null;
}

export interface Profile {
  name: string;
  tagline: string;
  about: string;
  location: string | null;
  email: string | null;
  links: Link[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: string[];
}

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}
