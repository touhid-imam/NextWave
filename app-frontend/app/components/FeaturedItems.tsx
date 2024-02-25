import Article from "../Entities/Article";
import { FeaturedArticle } from "./FeaturedItems/FeaturedArticle";

interface Props {
  title: string;
  articles: Article[];
}

const FeaturedItems = ({ title, articles }: Props) => {
  //   console.log(articles);
  return (
    <section className="featured-items">
      <h3 className="featured-items__headline">
        {title || "Our Featured Articles"}
      </h3>
      <div className="featured-items__container">
        {articles.map((article) => (
          <FeaturedArticle key={article.slug} article={article} />
        ))}
      </div>
      <button className="btn btn--medium btn--turquoise">See more</button>
    </section>
  );
};

export default FeaturedItems;
