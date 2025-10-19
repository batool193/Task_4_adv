import styles from "./Card.module.css";
interface cardProps {
  image: string,
  title: string,
  text: string,
  span?: string,
  c?: string
}
const Card = ({image,span,title,text,c}: cardProps) => {
  return (
    <div className={c ? `${c}` : styles.card}>
      <img src={image}/>
      <span>{span}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Card;
