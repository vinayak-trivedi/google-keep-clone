import { ACTIONS } from '../../constants/actions';
import { useNotes, useNotesContext } from '../../context/NotesContext';
import NotesCard from './NotesCard';
import styles from './notesCard.module.css';

export default function Notes() {
  const notes = useNotes();
  const { notesDispatch } = useNotesContext();

  function deleteNote(noteId) {
    notesDispatch({
      type: ACTIONS.DELETE_NOTES,
      payload: { noteId },
    });
  }

  const notesItem = notes?.map((note) => (
    <NotesCard
      title={note.title}
      note={note.note}
      deleteNote={() => deleteNote(note.id)}
    />
  ));

  return <div className={styles.note_items}>{notesItem}</div>;
}
