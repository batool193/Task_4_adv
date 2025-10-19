import styles from "./DealCard.module.css";

interface dealCardProps {
  images: string[];
}
const DealCard = ({images}: dealCardProps) => {
  return (
    <>
         {images.map((image) => (
    <div className={styles.card}>
          <img src={image} />
          <div  className={styles.btn}>
          <button  className={styles.btnfeat}>Featured</button>
         <button className={styles.btn3D}>3D</button>
          </div>

         </div>
         ))}
    </>
  );
}

export default DealCard;
