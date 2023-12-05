import { useRef, useState } from 'react';
import { useNotes, useNotesContext } from '../../context/NotesContext';
import styles from './notes.module.css';
import NotesCard from './components/NotesCard';
import NotesDetailsModal from '../NoteDetailsModal';

export default function Notes({}) {
  const notes = useNotes();
  const [noteIdForNoteDetailsModal, setNoteIdForNoteDetailsModal] =
    useState(null);
  const notesItem = notes?.map((note) => (
    <NotesCard
      note={note}
      key={note?.id}
      openNoteDetailsModal={() => openNoteDetailsModal(note?.id)}
    />
  ));

  function openNoteDetailsModal(noteId) {
    setNoteIdForNoteDetailsModal(noteId);
  }

  function closeModal() {
    setNoteIdForNoteDetailsModal(null);
  }

  return (
    <>
      <div className={styles.note_items}>{notesItem}</div>;
      {noteIdForNoteDetailsModal && (
        <NotesDetailsModal
          closeModal={closeModal}
          noteId={noteIdForNoteDetailsModal}
        />
      )}
    </>
  );
}
