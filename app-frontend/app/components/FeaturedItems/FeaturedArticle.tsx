import Article from "@/app/Entities/Article";
import Image from "next/image";
import Link from "next/link";

interface Props {
  article: Article;
}

export const FeaturedArticle = ({ article }: Props) => {
  return (
    <Link href={`/blog/${article.slug}`} className="featured-items__article">
      <div className="featured-items__article-image">
        <Image
          className={`featured-items__featured-image`}
          src={article.featuredImage}
          width={500}
          height={0}
          alt={`Go read article ${article.headline}`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="featured-items__article-text">
        <h5>{article.headline}</h5>
        <p className="copy-small">{article.date}</p>
      </div>
    </Link>
  );
};
