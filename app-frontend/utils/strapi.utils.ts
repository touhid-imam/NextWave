import axios from "axios";

const BASE_URL = process.env.STRAPI_URL || "http://localhost:1337";

export const fetchStrapiData = async (route: String) => {
  const url = `${BASE_URL}/api/${route}`;

  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw new Error(`could not fetch data from ${url}`);
  }
};

export const processInfoBlock = (data: any) => {
  const infoBlocksRaw = data?.attributes?.info_blocks?.data;

  return infoBlocksRaw.map((infoBlock: any) => ({
    ...infoBlock.attributes,
    id: infoBlock.id,
    imageSrc: BASE_URL + infoBlock.attributes?.image?.data?.attributes?.url,
  }));
};
