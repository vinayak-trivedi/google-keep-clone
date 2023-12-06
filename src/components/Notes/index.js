import { useState } from 'react';
import { useNotes } from '../../context/NotesContext';
import styles from './notes.module.css';
import NotesCard from './components/NotesCard';
import NotesDetailsModal from '../NoteDetailsModal';
import ConfirmDeleteModal from '../ConfirmDeleteModal';
import SearchComponent from '../SearchComponent';
import NotesEmpty from './components/NotesEmpty';

export default function Notes({}) {
  const [searchQuery, setSearchQuery] = useState('');
  const notes = useNotes(searchQuery);
  const [noteIdForNoteDetailsModal, setNoteIdForNoteDetailsModal] =
    useState(null);
  const [noteIdForDeleteModal, setNoteIdForDeleteModal] = useState(null);
  let notesItem;
  if (notes.length) {
    notesItem = notes?.map((note) => (
      <NotesCard
        note={note}
        key={note?.id}
        openNoteDetailsModal={() => openNoteDetailsModal(note?.id)}
        openDeleteConfirmationModal={(e) => openDeleteNotesModal(note?.id, e)}
      />
    ));
  } else notesItem = <NotesEmpty />;

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
      <SearchComponent value={searchQuery} setValue={setSearchQuery} />
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
