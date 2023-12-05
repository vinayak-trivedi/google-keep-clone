import Modal from '../Modal';
import styles from './confirmDeleteModal.module.css';

export default function ConfirmDeleteModalPresentation({
  deleteNoteAndCloseModal,
  closeModal,
}) {
  return (
    <Modal onClose={closeModal}>
      <div className={styles.modal_content}>
        <p className={styles.confirmation_text}>
          Are you sure you want to delete this note?
        </p>
        <button className={styles.delete_button} onClick={deleteNoteAndCloseModal}>Delete</button>
      </div>
    </Modal>
  );
}
