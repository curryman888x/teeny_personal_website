import { useState } from "react";

import { asset } from "../base";

/** Company / school mark. Falls back to a lettered tile if the image is absent. */
export function Logo({ src, name }: { src?: string; name: string }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="logo logo--fallback" aria-hidden="true">
        {name.charAt(0)}
      </div>
    );
  }
  return (
    <img
      className="logo"
      src={asset(src)}
      alt={`${name} logo`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
