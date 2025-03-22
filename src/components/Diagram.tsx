// components/Diagram.tsx
import React from "react";
import Mermaid from "./Mermaid";

export default function Diagram({
  chart,
  title,
  description,
}: {
  chart: string;
  title: string;
  description: string;
}) {
  const id = title.toLowerCase().replace(/\s+/g, "-");
  return (
    <figure role="img" aria-labelledby={`${id}-desc`}>
      <Mermaid chart={chart} id={id} />
      <figcaption className="sr-only" id={`${id}-desc`}>
        {description}
      </figcaption>
    </figure>
  );
}
