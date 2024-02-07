import Image from "next/image";
import HeroSection from "./components/Layout/HeroSection";

export default function Home() {
  const heroHeadline = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>happiness.</h1>
    </>
  );
  return (
    <main>
      <HeroSection imgSrc="" headline={heroHeadline} theme="turquoise" />
    </main>
  );
}
