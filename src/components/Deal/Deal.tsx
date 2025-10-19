import { useMemo, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Deal.module.css";
import DealCard from "../DealCard/DealCard";


interface dealItem {
  type: string;
  images: string[];
}

  const deals:Array<dealItem> = [
    {
      type: "residential",
      images: [
        "./assets/img/deal/card-1.png",
        "./assets/img/deal/card-2.png",
        "./assets/img/deal/card-3.png",
      ],
    },
    {
      type: "commercial",
      images: [
        "./assets/img/deal/card-1.png",
      ],
    },
    {
      type: "agriculture",
      images: [
      "./assets/img/deal/card-1.png",
        "./assets/img/deal/card-2.png",
      ],
    },
    {
      type: "industrial",
      images: [
          "./assets/img/deal/card-3.png",

      ],
    },
  ];
const Deal = () => {

  const [activeButton, setActiveButton] = useState<string>("residential");

  const filteredDeals = useMemo(() => {
    return deals.filter((r) => r.type === activeButton);
  }, [activeButton, deals]);

  return (
    <section className='margin_Bottom container'>
      <SectionHeader
        h1="Best Real Estate Deals"
        p="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      />
      <div className={styles.buttons}>
        <button onClick={() => setActiveButton("residential")}>Residential Property</button>
        <button onClick={() => setActiveButton("commercial")}>Commercial Property</button>
        <button onClick={() => setActiveButton("agriculture")}>Agriculture Property</button>
        <button onClick={() => setActiveButton("industrial")}>Industrial Property</button>
      </div>

      <div className={styles.container} >
        {filteredDeals.map((deal) => (
          <DealCard key={deal.type} {...deal} />
        ))}
      </div>
    </section>
  );
};

export default Deal;
