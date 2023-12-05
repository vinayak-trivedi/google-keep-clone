import styles from './notesDetailsModal.module.css';

export default function NotesDetailsModalPresentation({
  closeModal,
  note,
  titleRef,
  noteRef,
}) {
  return (
    <div onClick={closeModal} className={styles.modal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal_content}
        style={{ background: note?.color ? note?.color : '#fff' }}
      >
        <input
          ref={titleRef}
          className={styles.title_input}
          defaultValue={note.title}
          placeholder="Title"
        />
        <textarea
          defaultValue={note.note}
          className={styles.note_input}
          placeholder="Note"
          ref={noteRef}
        />
        <button
          onClick={closeModal}
          className={styles.close_button}
        >
          Close
        </button>
      </div>
    </div>
  );
}
