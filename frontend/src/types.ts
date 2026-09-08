// Shapes for the site content in content.ts. This is a static site — no API.

export interface LinkItem {
  label: string;
  url: string;
}

export interface DetailRow {
  label: string;
  value: string;
}

export interface CourseGroup {
  label: string;
  courses: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  start: string;
  end: string;
  logo?: string; // path under frontend/public/, e.g. "img/logos/nyu.png"
  courseGroups?: CourseGroup[];
  notes?: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  logo?: string;
  blurb?: string;
  highlights?: string[];
}

export interface ProjectItem {
  name: string;
  subtitle?: string;
  description: string;
  tech?: string[];
  url?: string; // live demo / primary link
  repo?: string; // source code
  image?: string; // tile image, path under frontend/public/
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GallerySection {
  title: string;
  intro?: string;
  images: GalleryImage[];
}

export interface SiteContent {
  name: string;
  hero: {
    greeting: string;
    tagline?: string;
    image?: string;
  };
  about: {
    heading: string;
    body: string;
    portrait?: string;
    details: DetailRow[];
    resumeFile?: string; // path under frontend/public/, e.g. "resume.pdf"
  };
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  gallery?: GallerySection;
  contact: {
    heading: string;
    blurb?: string;
    email: string;
    links: LinkItem[];
  };
  skills: string[];
}
