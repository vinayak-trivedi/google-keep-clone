import styles from './notesCard.module.css';

export default function NotesCard({ title, note, deleteNote }) {
  return (
    <div className={styles.notes_card}>
      <button onClick={deleteNote} className={styles.delete_button}>
        <img src="/delete_icon.svg" width="100%" height="100%" />
      </button>
      <div className={styles.text_container}>
        <p className={styles.notes_card__title}>{title}</p>
        <p className={styles.notes_card__note}>{note}</p>
      </div>
      <div></div>
    </div>
  );
}
