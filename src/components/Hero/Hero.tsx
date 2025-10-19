import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={`${styles.hero} margin_Bottom`}>
      <SectionHeader
        h1="Discover a place you will love to live"
        p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
        tempus felis vitae sit est quisque."
        c={styles.description}
      />
      <div className={styles.info}>
        <div className={styles.details}>
          <img src="./assets/img/hero/location.svg"></img>
          <div>
            <p>Location</p>
            <span>Ahmedabad, India</span>
          </div>
        </div>
        <div className={styles.details}>
          <img src="./assets/img/hero/price.svg"></img>
          <div>
            <p>Price</p>
            <span>$1000 - $10,000</span>
          </div>
        </div>
        <div className={styles.details}>
          <img src="./assets/img/hero/house.svg"></img>
          <div>
            <p>Type of Property</p>
            <span>Apartment</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
