import { useRef } from 'react';
import { ACTIONS } from '../../constants/actions';
import { useNotes, useNotesContext } from '../../context/NotesContext';
import useClickOutsideComponent from '../../hooks/customHooks';
import styles from './notes.module.css';
import NotesCard from './components/NotesCard';

export default function Notes() {
  const notes = useNotes();
  const notesItem = notes?.map((note) => (
    <NotesCard note={note} key={note?.id} />
  ));

  return <div className={styles.note_items}>{notesItem}</div>;
}
