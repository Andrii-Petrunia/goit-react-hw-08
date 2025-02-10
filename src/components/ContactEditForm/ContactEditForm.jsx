import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { updateContact } from "../../redux/contacts/operations";
import styles from "./ContactEditForm.module.css";

export default function ContactEditForm({ contact, onCancel }) {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const dispatch = useDispatch();

  useEffect(() => {
    setName(contact.name);
    setNumber(contact.number);
  }, [contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedContact = { id: contact.id, name, number };
    dispatch(updateContact(updatedContact))
      .then(() => {
        toast.success("Contact updated successfully");
        onCancel();
      })
      .catch(() => toast.error("Failed to update contact"));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Number:
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
          className={styles.input}
        />
      </label>
      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.saveButton}>
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className={styles.cancelButton}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
