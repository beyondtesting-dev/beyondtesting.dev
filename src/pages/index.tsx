import clsx from "clsx";
import Link from "@docusaurus/Link";
import mermaid from "mermaid";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import("prismjs/components/prism-scheme");
import("prismjs/components/prism-racket");

import styles from "./index.module.css";
import Diagram from "../components/Diagram";

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
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {/* {siteConfig.title} */}
          Beyond Testing
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/kb">
            Learn More
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
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
                What if tests were part of production code?
              </h1>
              <p className="text--left">
                Most testing frameworks focus on <strong>catching</strong> bugs,
                but what if we could <strong>prevent</strong> them from the
                start? BeyondTesting.dev explores{" "}
                <strong>Design by Contract (DbC)</strong>—a methodology where
                software correctness is <strong>built-in</strong>, not patched
                later.
              </p>

              <p>We believe in:</p>
              <ul>
                <li>
                  <strong>Self-verifying</strong> code with contracts
                </li>
                <li>
                  Fewer tests, <strong>more guarantees</strong>
                </li>
                <li>
                  <strong>Provably correct software by design</strong>
                </li>
              </ul>

              <p className="text--center margin-top--lg">
                Here's how{" "}
                <strong>contracts automatically enforce correctness</strong> at
                runtime:
              </p>
              <div className="text--center margin-top--md">
                <Diagram
                  title="Contract Enforcement Lifecycle"
                  description="Diagram showing how Design by Contract enforces correctness: invariant checks before and after, with pre- and postconditions around the method body."
                  chart={`
                  flowchart TD
                    A[Start] --> B[Check Invariant #40;before#41;]
                    B --> C[Check Precondition]
                    C --> D[Run Method Body]
                    D --> E[Check Postcondition]
                    E --> F[Check Invariant #40;after#41;]
                    F --> G[End]
                `}
                />
              </div>
              <p className="margin-top--md text--center">
                Each method call is surrounded by automatic checks:
                <br />
                <strong>Invariants</strong> ensure the object remains valid,
                <br />
                <strong>Preconditions</strong> verify input before the logic
                runs,
                <br />
                and <strong>Postconditions</strong> confirm the output and state
                after execution.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
