import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <div className={styles.userMenu}>
      <span className={styles.username}>Welcome, {user.name}</span>
      <button className={styles.button} onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}
