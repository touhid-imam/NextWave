import HighlightArticle from "../components/Blog/HighlightArticle";
import SubscribeToNewsletter from "../components/Blog/SubscribeToNewsletter";
import FeaturedItems from "../components/FeaturedItems";

const Blog = () => {
  const highlightArticleData = {
    heading: "3 tips for a super fast takeoff",
    excerpt: `Improving your take-off phase in surfing is a fundamental step toward riding waves with more confidence and style.Improving your take-off phase is a gradual process, and it may take time to master. Be patient, stay committed to practice, and enjoy the journey of becoming a better surfer. With dedication and persistence, you'll see progress and have more enjoyable rides. Here is how:`,
    button: { text: "Read More", slug: "/blog/slug", color: "turquoise" },
    featuredImage: "/assets/info-blocks/info-block-1.png",
  };

  const featuredArticle = [
    {
      headline:
        "surfboard shaping and  design behind the scenes of crafting the perfect board ",
      slug: "/blog/surfboard",
      date: "Monday, June 05, 2023",
      featuredImage: "/assets/experience/hero-image.png",
    },
    {
      headline:
        "surfboard shaping and  design behind the scenes and  design behind the scenes of crafting the perfect board ",
      slug: "/blog/surfboard",
      date: "Monday, June 05, 2023",
      featuredImage: "/assets/experience/hero-image.png",
    },
    {
      headline:
        "surfboard shaping and  design behind the scenes of crafting the perfect board ",
      slug: "/blog/surfboard",
      date: "Monday, June 05, 2023",
      featuredImage: "/assets/experience/hero-image.png",
    },
  ];

  return (
    <main className="blog-area">
      <HighlightArticle data={highlightArticleData} />
      <SubscribeToNewsletter />
      <FeaturedItems title="Our featured articles" articles={featuredArticle} />
    </main>
  );
};

export default Blog;
