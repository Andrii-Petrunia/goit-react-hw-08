import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import styles from "./AppBar.module.css";

export default function AppBar() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);


  return (
    <header className={styles.appBar}>
      <h1 className={styles.title}>Phonebook App</h1>
      <nav className={styles.nav}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
}
