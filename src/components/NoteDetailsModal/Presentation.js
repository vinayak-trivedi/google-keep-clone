import Modal from '../Modal';
import styles from './notesDetailsModal.module.css';

export default function NotesDetailsModalPresentation({
  closeModal,
  note,
  titleRef,
  noteRef,
}) {
  return (
    <Modal onClose={closeModal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal_content}
        style={{ background: note?.color || '#fff' }}
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
        <button onClick={closeModal} className={styles.close_button}>
          Close
        </button>
      </div>
    </Modal>
  );
}
