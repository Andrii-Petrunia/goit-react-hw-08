import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <nav className={styles.authNav}>
      <NavLink to="/register" className={styles.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={styles.link}>
        Login
      </NavLink>
    </nav>
  );
}
