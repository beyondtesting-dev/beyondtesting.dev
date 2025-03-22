// components/Mermaid.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import mermaid from "mermaid";
import Spinner from "./Spinner";

mermaid.initialize({ startOnLoad: false });

export default function Mermaid({ chart, id }: { chart: string; id: string }) {
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      if (ref.current) {
        ref.current.innerHTML = "";

        requestIdleCallback(
          () => {
            mermaid
              .render(id, chart)
              .then((result) => {
                ref.current!.innerHTML = result.svg;
              })
              .catch((err) => {
                console.error("Mermaid render error:", err);
                ref.current!.innerHTML = `<pre style="color:red;">Mermaid render error</pre>`;
              })
              .finally(() => {
                setLoading(false);
              });
          },
          { timeout: 2000 }
        );
      }
    }
  }, [chart]);

  const style = useMemo(
    () => ({
      minHeight: "700px",
      opacity: loading ? 0 : 1,
      transition: "opacity 0.3s ease-in-out",
    }),
    [loading]
  );

  return (
    <>
      {loading && <Spinner />}
      <div ref={ref} style={style} />
    </>
  );
}
