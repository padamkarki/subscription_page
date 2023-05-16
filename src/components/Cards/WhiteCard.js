import styles from "./WhiteCard.module.css";

const WhiteCard = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};
export default WhiteCard;
