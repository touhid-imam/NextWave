import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  imgSrc: String;
  headline: ReactNode;
  theme: String;
}

const HeroSection = ({ imgSrc, headline, theme = "turquoise" }: Props) => {
  return (
    <section className="hero">
      <div className="hero__background">
        <Image
          src={`${imgSrc}` || "/assets/hero-home.png"}
          alt="site-image"
          fill
        />
      </div>
      <div className={`hero__headline hero__headline--${theme}`}>
        {headline}
      </div>
      <button className={`btn btn--medium btn--${theme}`}>
        <Link href="/events">BOOK NOW</Link>
      </button>
      <Image
        className={`hero__logo hero__logo--${theme}`}
        src="/assets/logo.svg"
        width={0}
        height={0}
        alt="site logo"
        style={{ width: "10rem", height: "auto" }}
      />
    </section>
  );
};

export default HeroSection;
