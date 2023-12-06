import styles from './notesEmpty.module.css';

export default function NotesEmpty() {
  return (
    <div className={styles.notes_empty}>
      <p className={styles.notes_empty_text}>
        No Notes Found! Click on Take a note to add notes.
      </p>
    </div>
  );
}
