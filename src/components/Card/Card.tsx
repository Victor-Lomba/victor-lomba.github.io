import styles from "./styles.module.scss";

interface CardProps {
  title: string;
  subTitle: string;
  image: string;
}

export default function Card({ title, subTitle, image }: CardProps) {
  return (
    <div className={styles.container}>
      <img src={image} alt="logo" />
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.subTitle}>{subTitle}</p>
      </div>
    </div>
  );
}
