import Search from "./Search";
import styles from "../styles/Hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.container}>
      <Search />
      <img src="vector-hero.png" alt="allo maalem" className={styles.vector} />
    </div>
  );
}
