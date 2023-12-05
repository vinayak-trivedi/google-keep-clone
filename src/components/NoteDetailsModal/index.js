import { useRef } from 'react';
import { useGetNotesById, useNotesContext } from '../../context/NotesContext';
import NotesDetailsModalPresentation from './Presentation';
import { ACTIONS } from '../../constants/actions';

export default function NotesDetailsModal({ closeModal, noteId }) {
  const titleRef = useRef();
  const noteRef = useRef();
  const note = useGetNotesById(noteId);
  const { notesDispatch } = useNotesContext();

  function updateNoteAndCloseModal() {
    notesDispatch({
      type: ACTIONS.UPDATE_NOTES,
      payload: {
        noteId,
        payloadToUpdate: {
          title: titleRef.current.value,
          note: noteRef.current.value,
        },
      },
    });

    closeModal();
  }

  return (
    <NotesDetailsModalPresentation
      closeModal={updateNoteAndCloseModal}
      note={note}
      titleRef={titleRef}
      noteRef={noteRef}
    />
  );
}
