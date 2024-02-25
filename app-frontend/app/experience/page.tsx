import Image from "next/image";
import HeroSection from "../components/HeroSection";
import InfoBlock from "../components/InfoBlock";
import { fetchStrapiData, processInfoBlock } from "@/utils/strapi.utils";

export default async function Home() {
  const data = await fetchStrapiData("infoblocks-experience?populate=deep");
  const infoBlockData = processInfoBlock(data);
  const heroHeadline = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>happiness.</h1>
    </>
  );

  return (
    <main>
      <HeroSection
        imgSrc="/assets/experience/hero-image.png"
        headline={heroHeadline}
        theme="brown"
      />
      {infoBlockData.map((data: any) => {
        return (
          <InfoBlock key={data.id} data={data} reversed={data.showImageRight} />
        );
      })}
      {/* <InfoBlock data={infoBlockData} />
      <InfoBlock data={infoBlockData} reversed={true} />
      <InfoBlock data={infoBlockData} /> */}
    </main>
  );
}

export const revalidate = 300;
