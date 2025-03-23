import clsx from "clsx";
import Link from "@docusaurus/Link";
import mermaid from "mermaid";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import("prismjs/components/prism-scheme");
import("prismjs/components/prism-racket");

import styles from "./index.module.css";
import Diagram from "../components/Diagram";
import MarkdownText from "../components/MarkdownText";
import { useMemo } from "react";

mermaid.initialize({
  theme: "base",
  themeVariables: {
    fontFamily: "Inter, sans-serif",
    background: "transparent",
    primaryColor: "#0D1B2A",
    primaryTextColor: "#ffffff",
    secondaryTextColor: "#ffffff",
    tertiaryTextColor: "#ffffff",
    textColor: "#ffffff",
    primaryBorderColor: "#4ECDC4",
    lineColor: "#005A9C",
    secondaryColor: "#13283F",
    tertiaryColor: "#1B3550",
    clusterBkg: "#0D1B2A",
    clusterBorder: "#4ECDC4",
  },
});

function HomepageHeader() {
  const { siteConfig, i18n } = useDocusaurusContext();

  console.log(i18n);

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate id="siteName">Beyond Testing</Translate>
        </Heading>
        <p className="hero__subtitle">
          <Translate id="tagLine">Correctness by Design</Translate>
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/kb">
            <Translate id="learnMore">Learn More</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const graphCode = useMemo(
    () =>
      [
        "flowchart TD",
        `A[${translate({ id: "homepageChart.start", message: "Start" })}] --> B[${translate({ id: "homepageChart.checkInvariantBefore", message: "Check Invariant #40;before#41;" })}]`,
        `B --> C[${translate({ id: "homepageChart.checkPrecondition", message: "Check Precondition" })}]`,
        `C --> D[${translate({ id: "homepageChart.runMethodBody", message: "Run Method Body" })}]`,
        `D --> E[${translate({ id: "homepageChart.checkPostcondition", message: "Check Postcondition" })}]`,
        `E --> F[${translate({ id: "homepageChart.checkInvariantAfter", message: "Check Invariant #40;after#41;" })}]`,
        `F --> G[${translate({ id: "homepageChart.end", message: "End" })}]`,
      ].join("\n"),
    []
  );

  return (
    <Layout
      title={`${siteConfig.title} - open source library for GPU-accelerated GUI development`}
      description="Open source library for GPU-accelerated GUI development for Node.js and the browser"
    >
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures className="margin-bottom--xl" /> */}
        <div className="container">
          <div className="row margin-bottom--sm">
            <div className={clsx("col col--offset-2 col--8 padding-top--lg")}>
              <h1 className="text--center">
                <Translate id="homepage.title">
                  What if tests were part of production code?
                </Translate>
              </h1>
              <div className="text--left">
                <MarkdownText
                  content={translate({
                    id: "homepage.intro",
                    message:
                      "Most testing frameworks focus on **catching** bugs, but what if we could **prevent** them from the start? BeyondTesting.dev explores **Design by Contract (DbC)**—a methodology where software correctness is **built-in**, not patched later.",
                  })}
                />
              </div>

              <MarkdownText
                content={translate({
                  id: "homepage.principles",
                  message: `We believe in:

- **Self-verifying** code with contracts
- Fewer tests, **more guarantees**
- **Provably correct software by design**`,
                })}
              />

              <div className="text--center margin-top--lg">
                <MarkdownText
                  content={translate({
                    id: "homepage.diagram.intro",
                    message:
                      "Here's how **contracts automatically enforce correctness** at runtime:",
                  })}
                />
              </div>

              <div className="text--center margin-top--md">
                <Diagram
                  id="contractLifecycle"
                  title={translate({
                    id: "diagram.contractLifecycle.title",
                    message: "Contract Enforcement Lifecycle",
                  })}
                  description={translate({
                    id: "diagram.contractLifecycle.description",
                    message:
                      "Diagram showing how Design by Contract enforces correctness: invariant checks before and after, with pre- and postconditions around the method body.",
                  })}
                  chart={graphCode}
                />
              </div>

              <div className="margin-top--md text--center">
                <MarkdownText
                  content={translate({
                    id: "homepage.diagram.explanation",
                    message: `Each method call is surrounded by automatic checks:  
**Invariants** ensure the object remains valid,  
**Preconditions** verify input before the logic runs,  
and **Postconditions** confirm the output and state after execution.`,
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
