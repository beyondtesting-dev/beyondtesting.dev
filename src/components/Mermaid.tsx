// components/Mermaid.tsx
import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({ startOnLoad: false });

export default function Mermaid({ chart, id }: { chart: string; id: string }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      if (ref.current) {
        ref.current.innerHTML = "";
        mermaid
          .render(id, chart)
          .then((result) => {
            ref.current!.innerHTML = result.svg;
          })
          .catch((err) => {
            console.error("Mermaid render error:", err);
            ref.current!.innerHTML = `<pre style="color:red;">Mermaid render error</pre>`;
          });
      }
    }
  }, [chart]);

  return <div ref={ref} />;
}
