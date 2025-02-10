import styles from "./Modal.module.css";

export default function Modal({ onConfirm, onCancel, contactName }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Are you sure you want to delete {contactName}?</h2>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onConfirm}>Delete</button>
      </div>
    </div>
  );
}
