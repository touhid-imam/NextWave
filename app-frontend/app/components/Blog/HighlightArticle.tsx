import React from "react";
import Button from "../Button";
import Image from "next/image";

interface Props {
  data: {
    heading: string;
    excerpt: string;
    button: {
      text: string;
      color: string;
      slug: string;
    };
    featuredImage: string;
  };
}

const HighlightArticle = ({
  data: { heading, excerpt, button, featuredImage },
}: Props) => {
  return (
    <article className="highlight-article">
      <div className="highlight-article__info">
        <h3>{heading}</h3>
        <p className="copy">{excerpt}</p>
        <Button text={button.text} slug={button.slug} color={button.color} />
      </div>

      <Image
        src={featuredImage || "/assets/info-blocks/info-block-1.png"}
        alt="highlight featured image"
        width={400}
        height={0}
        className="highlight-article__image"
        style={{ minWidth: "49%", minHeight: "500px", objectFit: "cover" }}
      />
    </article>
  );
};

export default HighlightArticle;
