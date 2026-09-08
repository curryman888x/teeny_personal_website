import { content } from "./content";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <>
      <Nav />
      <Hero content={content} />
      <About content={content} />
      {content.education.length > 0 && <Education items={content.education} />}
      {content.experience.length > 0 && <Experience items={content.experience} />}
      {content.projects.length > 0 && <Projects items={content.projects} />}
      {content.gallery && content.gallery.images.length > 0 && (
        <Gallery section={content.gallery} />
      )}
      <Contact content={content} />

      <footer className="site-footer">
        © {new Date().getFullYear()} {content.name}
      </footer>
    </>
  );
}
