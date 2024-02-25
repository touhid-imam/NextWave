import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import Markdown from "react-markdown";
import Button from "./Button";

interface Props {
  data: {
    headline: string;
    text: string;
    button: {
      text: string;
      color: string;
      slug: string;
    };
    imageSrc: string;
  };
  reversed?: boolean;
}

const InfoBlock = ({
  data: { headline, text, button, imageSrc },
  reversed,
}: Props) => {
  return (
    <div className={`info ${reversed ? "info--reversed" : ""}`}>
      <Image
        src={imageSrc || "/assets/info-blocks/info-block-1.png"}
        alt="info block image"
        width={300}
        height={0}
        className="info__image"
        style={{ minWidth: "400px", height: "auto", objectFit: "cover" }}
      />
      <div className="info__text">
        <h2 className="info__headline">{headline}</h2>
        <Markdown className="copy">{text}</Markdown>
        {button && (
          <Button text={button.text} color={button.color} slug={button.slug} />
        )}
      </div>
    </div>
  );
};

export default InfoBlock;
