import React from "react";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const navItems = [
    {
      display: "the camp.",
      slug: "/",
    },
    {
      display: "the experience.",
      slug: "/experience",
    },
    {
      display: "the blog.",
      slug: "/blog",
    },
    {
      display: "the events.",
      slug: "/events",
    },
  ];

  const policies = [
    {
      display: "Imprint",
      slug: "/imprint",
    },
    {
      display: "Terms and Conditions",
      slug: "/toc",
    },
    {
      display: "Data Protection",
      slug: "/data-protection",
    },
  ];

  return (
    <footer className="footer">
      <nav className="footer__nav">
        <Image
          className="footer__logo"
          src="/assets/logo.svg"
          width={0}
          height="0"
          alt="site logo"
          style={{ minWidth: "4rem", height: "auto" }}
        />
        <ul className="footer__links">
          {navItems.map((item) => (
            <li key={item.slug}>
              <Link href={item.slug}>
                <h5>{item.display}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer__policies">
        <ul className="footer__policies-nav">
          {policies.map((policy) => (
            <li key={policy.slug}>
              <Link className="copy" href={policy.slug}>
                {policy.display}
              </Link>
            </li>
          ))}
        </ul>
        <p className="copy">© NextWave - all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
