import styles from "./Contact.module.css";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <span>👤 {name}</span>
        <span>📞 {number}</span>
      </div>

      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
