import { ACTIONS } from '../../constants/actions';
import { useNotesContext } from '../../context/NotesContext';
import ConfirmDeleteModalPresentation from './Presentation';

export default function ConfirmDeleteModal({ noteId, closeModal }) {
  const { notesDispatch } = useNotesContext();

  function deleteNoteAndCloseModal(e) {
    notesDispatch({
      type: ACTIONS.DELETE_NOTES,
      payload: { noteId },
    });
    closeModal();
  }

  return (
    <ConfirmDeleteModalPresentation
      deleteNoteAndCloseModal={deleteNoteAndCloseModal}
      closeModal={closeModal}
    />
  );
}
