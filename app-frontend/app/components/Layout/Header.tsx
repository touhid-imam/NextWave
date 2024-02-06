import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
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
  ];
  return (
    <header className="header">
      <Image
        className="header__logo"
        src="/assets/logo.svg"
        width={0}
        height="0"
        alt="site logo"
        style={{ minWidth: "4rem", height: "auto" }}
      />
      <ul className="header__nav">
        {navItems.map((item) => (
          <li key={item.slug}>
            <Link href={item.slug}>
              <h5>{item.display}</h5>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/events">
        <button className="btn btn--black btn--small">BOOK NOW</button>
      </Link>
    </header>
  );
};

export default Header;
