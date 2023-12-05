import styles from './notesInput.module.css';

export default function NotesInputExpanded({
  titleValueRef,
  noteValueRef,
  saveNotesAndCollapse,
}) {
  return (
    <div className={styles.input_expanded}>
      <input
        ref={titleValueRef}
        className={styles.input_expanded__title_input}
        placeholder="Title"
      />
      <input
        autoFocus
        ref={noteValueRef}
        className={styles.input_expanded__note_input}
        placeholder="Take a notes.."
      />
    </div>
  );
}
