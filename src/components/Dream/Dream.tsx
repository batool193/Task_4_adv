import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Dream.module.css";
const Dream = () => {
  return (
    <section className={`${styles.dreamSection} margin_Bottom`}>
      <SectionHeader h1="Find Dream Home" p="Lorem ipsum dolor sit amet, consectetur adipiscing eli" c={styles.description}/>
    </section>
  );
}

export default Dream;
