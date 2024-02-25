import { fetchStrapiData, processInfoBlock } from "@/utils/strapi.utils";
import HeroSection from "./components/HeroSection";
import InfoBlock from "./components/InfoBlock";

export default async function Home() {
  const data = await fetchStrapiData("infoblocks-landing?populate=deep");
  const infoBlockData = processInfoBlock(data);
  // console.log(infoBlockData);

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
      {infoBlockData.map((data: any) => {
        return (
          <InfoBlock key={data.id} data={data} reversed={data.showImageRight} />
        );
      })}
      {/* <InfoBlock data={infoBlockData} reversed={false} />
      <InfoBlock data={infoBlockData} reversed={true} /> */}
    </main>
  );
}

export const revalidate = 300;
