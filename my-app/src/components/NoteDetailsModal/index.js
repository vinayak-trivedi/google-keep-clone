import { useRef } from 'react';
import { useGetNotesById } from '../../context/NotesContext';
import NotesDetailsModalPresentation from './Presentation';

export default function NotesDetailsModal({ closeModal, noteId }) {
  const titleRef = useRef();
  const noteRef = useRef();
  const note = useGetNotesById(noteId);

  function closeModalAndUpdateNote() {
    
  }

  return (
    <NotesDetailsModalPresentation
      closeModal={closeModal}
      note={note}
      titleRef={titleRef}
      noteRef={noteRef}
    />
  );
}
