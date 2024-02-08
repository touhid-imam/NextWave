import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
  data: {
    headline: String;
    text: ReactNode;
    button: ReactNode;
  };
  reversed?: Boolean;
}

const InfoBlock = ({ data: { headline, text, button }, reversed }: Props) => {
  return (
    <div className={`info ${reversed ? "info--reversed" : ""}`}>
      <Image
        src="/assets/info-blocks/info-block-1.png"
        alt="info block image"
        width={300}
        height={0}
        className="info__image"
        style={{ minWidth: "400px", height: "auto", objectFit: "cover" }}
      />
      <div className="info__text">
        <h2 className="info__headline">{headline}</h2>
        {text}
        {button}
      </div>
    </div>
  );
};

export default InfoBlock;
