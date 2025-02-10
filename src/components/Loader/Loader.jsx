import { Circles } from "react-loader-spinner";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.overlay}>
      <Circles height="80" width="80" color="#4fa94d" ariaLabel="loading" />
    </div>
  );
}
