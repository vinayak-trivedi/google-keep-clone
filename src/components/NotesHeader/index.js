import styles from './notesHeader.module.css';

export default function NotesHeader() {
  return (
    <header className={styles.header}>
      <img src="/keep_icon.svg"  alt="" />
      <h1 className={styles.heading}>Google Keep Clone</h1>
    </header>
  );
}
