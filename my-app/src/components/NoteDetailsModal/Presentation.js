import styles from './notesDetailsModal.module.css';

export default function NotesDetailsModalPresentation({ closeModal }) {
  return (
    <div onClick={closeModal} className={styles.modal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal_content}
      >
        <h1>Hello</h1>
      </div>
    </div>
  );
}
