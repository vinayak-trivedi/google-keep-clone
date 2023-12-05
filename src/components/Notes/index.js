import { useRef, useState } from 'react';
import { useNotes, useNotesContext } from '../../context/NotesContext';
import styles from './notes.module.css';
import NotesCard from './components/NotesCard';
import NotesDetailsModal from '../NoteDetailsModal';
import ConfirmDeleteModal from '../ConfirmDeleteModal';

export default function Notes({}) {
  const notes = useNotes();
  const [noteIdForNoteDetailsModal, setNoteIdForNoteDetailsModal] =
    useState(null);
  const [noteIdForDeleteModal, setNoteIdForDeleteModal] = useState(null);
  const notesItem = notes?.map((note) => (
    <NotesCard
      note={note}
      key={note?.id}
      openNoteDetailsModal={() => openNoteDetailsModal(note?.id)}
      openDeleteConfirmationModal={(e) => openDeleteNotesModal(note?.id, e)}
    />
  ));

  function openNoteDetailsModal(noteId) {
    setNoteIdForNoteDetailsModal(noteId);
  }

  function openDeleteNotesModal(noteId, e) {
    e.stopPropagation();
    setNoteIdForDeleteModal(noteId);
  }

  function closeNoteDetailsModal() {
    setNoteIdForNoteDetailsModal(null);
  }

  function closeDeleteConfirmationModal() {
    setNoteIdForDeleteModal(null);
  }

  return (
    <>
      <div className={styles.note_items}>{notesItem}</div>;
      {noteIdForNoteDetailsModal && (
        <NotesDetailsModal
          closeModal={closeNoteDetailsModal}
          noteId={noteIdForNoteDetailsModal}
        />
      )}
      {noteIdForDeleteModal && (
        <ConfirmDeleteModal
          noteId={noteIdForDeleteModal}
          closeModal={closeDeleteConfirmationModal}
        />
      )}
    </>
  );
}
