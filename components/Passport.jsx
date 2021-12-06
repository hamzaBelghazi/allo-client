import styles from "../styles/passport.module.scss";
import { FacebookOutlined, Google } from "@mui/icons-material";

export default function passport() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Sign in With</h3>
      <div className={styles.btn_pass}>
        <Google className={styles.icon + " " + styles.google} />
        <span className={styles.text}>Use Gmail</span>
      </div>
      <div className={styles.btn_pass}>
        <FacebookOutlined className={styles.icon + " " + styles.facebook} />
        <span className={styles.text}>Use Facebook</span>
      </div>
    </div>
  );
}
