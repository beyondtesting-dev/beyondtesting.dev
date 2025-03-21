import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import NodejsLogoUrl from "@site/static/img/nodejs.png";
import KotlinLogoUrl from "@site/static/img/kotlin.png";
import PythonLogoUrl from "@site/static/img/python.png";
import JavaLogoUrl from "@site/static/img/java.png";
import ScalaLogoUrl from "@site/static/img/scala.png";
import FSharpLogoUrl from "@site/static/img/fsharp.png";
import WebAssemblyLogoUrl from "@site/static/img/webassembly.png";
import CPPLogoUrl from "@site/static/img/cpp.png";
import CLogoUrl from "@site/static/img/c.png";
import CSharpLogoUrl from "@site/static/img/csharp.png";
import AdaLogoUrl from "@site/static/img/ada.png";
import RustLogoUrl from "@site/static/img/rust.png";
import OCamlLogoUrl from "@site/static/img/ocaml.png";
import TSLogoUrl from "@site/static/img/ts.png";
import SwiftLogoUrl from "@site/static/img/swift.png";
import LuaLogoUrl from "@site/static/img/lua.png";
import CrystalLogoUrl from "@site/static/img/crystal.png";
import DLangLogoUrl from "@site/static/img/dlang.png";
import RubyLogoUrl from "@site/static/img/ruby.png";
import NimLogoUrl from "@site/static/img/nim.png";
import RacketLogoUrl from "@site/static/img/racket.png";
import HaskellLogoUrl from "@site/static/img/haskell.png";
import FreePascalLogoUrl from "@site/static/img/freepascal.png";
import DelphiLogoUrl from "@site/static/img/delphi.png";
import JuliaLogoUrl from "@site/static/img/julia.png";
import ZigLogoUrl from "@site/static/img/zig.png";
import GnuStepLogoUrl from "@site/static/img/gnustep.png";
import GnuSmalltalkLogoUrl from "@site/static/img/gnusmalltalk.png";
import FortranLogoUrl from "@site/static/img/fortran.png";
import FactorLogoUrl from "@site/static/img/factor.png";

import("prismjs/components/prism-lua");
import("prismjs/components/prism-scheme");
import("prismjs/components/prism-racket");
import("prismjs/components/prism-crystal");

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/kb"
          >
            Learn More
          </Link>
        </div>
      </div>
    </header>
  );
}

// {name: 'Node.js', logoUrl: NodejsLogoUrl},

const techs = [
  // { name: "WASM", logoUrl: WebAssemblyLogoUrl },
  {
    name: "Python",
    logoUrl: PythonLogoUrl,
    githubProjectName: "xframes-python",
  },
  { name: "C++", logoUrl: CPPLogoUrl },
  { name: "Java", logoUrl: JavaLogoUrl, githubProjectName: "xframes-java" },
  { name: 'C', logoUrl: CLogoUrl },
  { name: "C#", logoUrl: CSharpLogoUrl, githubProjectName: "xframes-csharp" },
  { name: "TypeScript", logoUrl: TSLogoUrl },
  { name: "Fortran", logoUrl: FortranLogoUrl, githubProjectName: "xframes-fortran" },
  {
    name: "Free Pascal",
    logoUrl: FreePascalLogoUrl,
    githubProjectName: "xframes-freepascal",
  },
  {
    name: "Delphi",
    logoUrl: DelphiLogoUrl,
    githubProjectName: "xframes-delphi",
  },
  { name: 'Rust', logoUrl: RustLogoUrl, githubProjectName: "xframes-rust" },
  { name: "Ruby", logoUrl: RubyLogoUrl, githubProjectName: "xframes-ruby" },
  {
    name: "Swift",
    logoUrl: SwiftLogoUrl,
    githubProjectName: "xframes-swift",
  },
  {
    name: "Kotlin",
    logoUrl: KotlinLogoUrl,
    githubProjectName: "xframes-kotlin",
  },
  { name: "Ada", logoUrl: AdaLogoUrl, githubProjectName: "xframes-ada" },
  { name: "Lua", logoUrl: LuaLogoUrl, githubProjectName: "xframes-lua" },
  { name: "Scala", logoUrl: ScalaLogoUrl, githubProjectName: "xframes-scala" },
  {
    name: "Julia",
    logoUrl: JuliaLogoUrl,
    githubProjectName: "xframes-julia",
  },
  {
    name: "Haskell",
    logoUrl: HaskellLogoUrl,
    githubProjectName: "xframes-haskell",
  },
  {
    name: "Gnu Step",
    logoUrl: GnuStepLogoUrl,
    githubProjectName: "xframes-gnustep-objective-c",
  },
  { name: "D", logoUrl: DLangLogoUrl, githubProjectName: "xframes-dlang" },
  { name: "F#", logoUrl: FSharpLogoUrl, githubProjectName: "xframes-fsharp" },
  { name: "Nim", logoUrl: NimLogoUrl, githubProjectName: "xframes-nim" },
  { name: "OCaml", logoUrl: OCamlLogoUrl, githubProjectName: "xframes-ocaml" },
  {
    name: "Gnu Smalltalk",
    logoUrl: GnuSmalltalkLogoUrl,
    githubProjectName: "xframes-gnu-smalltalk",
  },
  {
    name: "Zig",
    logoUrl: ZigLogoUrl,
    githubProjectName: "xframes-zig",
  },
  {
    name: "Crystal",
    logoUrl: CrystalLogoUrl,
    githubProjectName: "xframes-crystal",
  },
  {
    name: "Racket",
    logoUrl: RacketLogoUrl,
    githubProjectName: "xframes-racket",
  },
  {
    name: "Factor",
    logoUrl: FactorLogoUrl,
    githubProjectName: "xframes-factor",
  },
];

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
              <h1 className="text--center">What if tests were part of production code?</h1>
              <p className="text--center">
              Most testing frameworks focus on <strong>catching</strong> bugs, but what if we could <strong>prevent</strong> them from the start?
              BeyondTesting.dev explores <strong>Design by Contract (DbC)</strong>—a methodology where software correctness is <strong>built-in, not patched later</strong>.
              </p>
              <p>We believe in:</p>
              <ul>
                <li><strong>Self-verifying</strong> code with contracts</li>
                <li>Fewer tests, <strong>more guarantees</strong></li>
                <li><strong>Provably correct software</strong></li>
              </ul>
              <p>New to Design by Contract? <a href="">Learn the basics.</a></p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
