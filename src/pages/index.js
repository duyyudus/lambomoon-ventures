import React from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

const PORTFOLIO_ITEMS = [
  {
    logo: "project_logo/polkadot-logo.png",
    link: "https://polkadot.network",
  },
  {
    logo: "project_logo/kusama-logo.png",
    link: "https://kusama.network",
  },
  {
    logo: "project_logo/moonbeam-logo.png",
    link: "https://moonbeam.network",
  },
  {
    logo: "project_logo/moonriver-logo.png",
    link: "https://moonbeam.network/networks/moonriver/",
  },
  {
    logo: "project_logo/astar-logo.png",
    link: "https://astar.network",
  },
  {
    logo: "project_logo/acala-logo.png",
    link: "https://acala.network",
  },
];

const PARTNER_ITEMS = [
  {
    logo: "partner_logo/yudus-labs-logo.png",
    link: "https://yudus.dev",
  },
];

function Logo() {
  return (
    <div className="row justify-content-center">
      <div className="col-auto">
        <div className="logo">
          <img
            src="logo-short.png"
            className="img-rounded img-logo"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="intro">
      <span className="color-golden">
        we go all-in on Moonbeam and Polkadot ecosystem
      </span>
      <br />
      <br />
      <span className="color-cyan">
        despite of having a moonboish name, we are serious and professional
      </span>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="row">
        <div className="col">
          <h2 className="section-title">portfolio</h2>
          <p className="section-desc">
            projects we invested and helped to build, including PLO crowdloans
          </p>
          <div className="row justify-content-start g-1">
            {PORTFOLIO_ITEMS.map((item, i) => (
              <div className="col-auto" key={i}>
                <PortfolioItem
                  logoUrl={item.logo}
                  link={item.link}
                  key={"portfolio-item" + i}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioItem(props) {
  return (
    <div className="portfolio-item">
      <a href={props.link}>
        <img
          src={props.logoUrl}
          className="img-rounded portfolio-item-logo"
          alt="portfolio-item-logo"
        />
      </a>
    </div>
  );
}

function Project() {
  return (
    <div className="project">
      <div className="row">
        <div className="col">
          <h2 className="section-title">projects</h2>
          <p className="section-desc">
            projects built by our development partners
          </p>
          <ProjectItem
            title="Lambomoon Metaverse"
            intro="blockbuster NFT game on Moonbeam/Polkadot, powered by Unreal Engine 5"
            github="https://lambomoon.xyz"
            appLink=""
          />
          <ProjectItem
            title="Polka Index"
            intro="keep track of tokens built on Substrate or heavily involved in Polkadot ecosystem"
            github="https://github.com/yudus-labs/polka-index"
            appLink="https://polkaindex.io"
          />
        </div>
      </div>
    </div>
  );
}

function ProjectItem(props) {
  return (
    <div className="project-item">
      <div className="row">
        <div className="col-auto project-item-title">{props.title}</div>
        {props.appLink ? (
          <a className="col-auto custom-link try-it-link" href={props.appLink}>
            try it here
          </a>
        ) : (
          ""
        )}
      </div>

      {props.github ? (
        // <div className="row">
        <a className="custom-link" href={props.github}>
          {props.github}
        </a>
      ) : (
        // </div>
        ""
      )}
      <br />

      <p className="project-item-body">{props.intro}</p>
    </div>
  );
}

function Partner() {
  return (
    <div className="partner">
      <div className="row">
        <div className="col">
          <h2 className="section-title">partners</h2>
          <p className="section-desc">together, we fly to the moon</p>
          <div className="row justify-content-start g-1">
            {PARTNER_ITEMS.map((item, i) => (
              <div className="col-auto" key={i}>
                <PartnerItem
                  logoUrl={item.logo}
                  link={item.link}
                  key={"partner-item" + i}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function PartnerItem(props) {
  return (
    <div className="partner-item">
      <a href={props.link}>
        <img
          src={props.logoUrl}
          className="img-rounded partner-item-logo"
          alt="partner-item-logo"
        />
      </a>
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <div className="row">
        <div className="col">
          <h2 className="section-title">about</h2>
          <p className="section-desc">
            we are a group of early Polkadot/Kusama supporters
          </p>
          <Contact />
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact">
      <div className="row">
        <p className="col">
          <i>founder telegram</i> <br />
          <a
            className="custom-link"
            href="https://t.me/duyyudus"
            alt="Telegram"
          >
            https://t.me/duyyudus
          </a>
          <br />
          <br />
          <i>twitter</i> <br />
          <a
            className="custom-link"
            href="https://twitter.com/lambomoon_vc"
            alt="Twitter"
          >
            https://twitter.com/lambomoon_vc
          </a>
          <br />
          <br />
          <i>medium</i> <br />
          <a
            className="custom-link"
            href="https://medium.com/lambomoon-ventures"
            alt="Medium"
          >
            https://medium.com/lambomoon-ventures
          </a>
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="container home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lambomoon Ventures</title>
        <meta
          name="description"
          content="A crypto fund focused on Moonbeam and Polkadot ecosystem"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://lambomoon.ventures/" />
        <meta property="twitter:title" content="Lambomoon Ventures" />
        <meta
          property="twitter:description"
          content="A crypto fund focused on Moonbeam and Polkadot ecosystem"
        />
        <meta
          property="twitter:image"
          content="https://raw.githubusercontent.com/duyyudus/lambomoon-ventures/master/static/logo-full.png"
        />

        <meta property="og:url" content="https://lambomoon.ventures" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lambomoon Ventures" />
        <meta
          property="og:description"
          content="A crypto fund focused on Moonbeam and Polkadot ecosystem"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/duyyudus/lambomoon-ventures/master/static/logo-full.png"
        />
      </Helmet>
      <div className="row">
        <div className="col">
          <Logo />
          <Intro />
          <Portfolio />
          <Project />
          <Partner />
          <About />
        </div>
      </div>
    </div>
  );
}
