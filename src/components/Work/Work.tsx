import Card from "../Card/Card";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Work.module.css";

type WorkItem = {
  image: string;
  title: string;
  desc: string;
};
  const WorkItems : Array<WorkItem> = [
    {image: "./assets/img/work/search.svg", title: "Search Apartment", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae." },
    {image: "./assets/img/work/select.svg",  title: "Select Apartment", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae." },
    { image: "./assets/img/work/confirm.svg", title: "Confirm Apartment", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae." },
    ];
const Work = () => {
  return (
    <section className={`${styles.workSection} margin_Bottom container`}>
      <SectionHeader h1="How it Works" p="Lorem ipsum dolor sit amet, consectetur adipiscing eli" />
      <div className={styles.work}>
        {WorkItems.map((item) => (
        <Card image={item.image} title={item.title} text={item.desc} c={styles.card} />
        ))}
        </div>
    </section>
  );
}

export default Work;
