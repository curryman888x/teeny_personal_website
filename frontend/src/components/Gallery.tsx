import { useState } from "react";

import { asset } from "../base";
import type { GallerySection } from "../types";
import { SectionHeading } from "./SectionHeading";

export function Gallery({ section }: { section: GallerySection }) {
  const [index, setIndex] = useState(0);
  const count = section.images.length;
  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);
  const current = section.images[index];

  return (
    <section id="gallery" className="section section--paper">
      <div className="container">
        <SectionHeading>{section.title}</SectionHeading>
        {section.intro && <p className="gallery__intro">{section.intro}</p>}

        <div className="carousel">
          <button className="carousel__nav carousel__nav--prev" aria-label="Previous" onClick={() => go(-1)}>
            &lsaquo;
          </button>
          <img className="carousel__img" src={asset(current.src)} alt={current.alt} />
          <button className="carousel__nav carousel__nav--next" aria-label="Next" onClick={() => go(1)}>
            &rsaquo;
          </button>
        </div>

        <div className="carousel__dots">
          {section.images.map((img, i) => (
            <button
              key={img.src}
              className={`carousel__dot ${i === index ? "is-active" : ""}`}
              aria-label={`Go to image ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
