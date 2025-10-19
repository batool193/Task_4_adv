import Card from "../Card/Card";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Trending.module.css";

const TrendingItems = [
  {
    image: "./assets/img/trending/card-1.png",
    span: "$300000",
    title: "Luxury Apartment in California",
    text: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    image: "./assets/img/trending/card-2.png",
    span: "$300000",
    title: "Luxury Apartment in California",
    text: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    image: "./assets/img/trending/card-3.png",
    span: "$300000",
    title: "Luxury Apartment in California",
    text: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    image: "./assets/img/trending/card-4.png",
    span: "$300000",
    title: "Luxury Apartment in California",
    text: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    image: "./assets/img/trending/card-5.png",
    span: "$300000",
    title: "Luxury Apartment in California",
    text: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    image: "./assets/img/trending/card-6.png",
    span: "$300000",
    title: "Luxury Apartment in California",
    text: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
];
const Trending = () => {
  return (
    <section className={`${styles.trendingSection} margin_Bottom container`}>
      <SectionHeader
        h1="Most Trending"
        p="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      />
      <div className={styles.trending}>
        {TrendingItems.map((item) => (
          <Card
            image={item.image}
            span={item.span}
            title={item.title}
            text={item.text}
            c={styles.card}
          />
        ))}
      </div>
    </section>
  );
};

export default Trending;
