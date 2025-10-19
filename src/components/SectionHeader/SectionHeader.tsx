import styles from "./SectionHeader.module.css";

interface sectionHeaderProps {
  h1: string;
  p: string;
  c?: string;
};
const SectionHeader = ({ h1, p, c }: sectionHeaderProps) => {
  return (
      <div className={c ? `${c}` : styles.Description}>
            <h1>{h1}</h1>
            <p>{p}</p>
        </div>
  );
}

export default SectionHeader;
