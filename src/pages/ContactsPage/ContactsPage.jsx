import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import styles from "./ContactsPage.module.css";
import Loader from "../../components/Loader/Loader";

export default function ContactsPage() {
  const isLoading = useSelector((state) => state.contacts.loading);

  return (
    <div className={styles.container}>
      <h1>Contacts</h1>
      {isLoading && <Loader />}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
