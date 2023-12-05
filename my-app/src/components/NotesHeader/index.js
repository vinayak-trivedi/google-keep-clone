import styles from './notesHeader.module.css';

export default function NotesHeader() {
  return (
    <header className={styles.header}>
      <img src="/keep_icon.svg" width="60px" height="60px" alt="" />
      <h1>Google Keep Clone</h1>
    </header>
  );
}
