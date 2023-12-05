import React, { useRef, useState } from 'react';
import useClickOutsideComponent from '../../hooks/customHooks';
import styles from './notesInput.module.css';
import NotesInputCollapsed from './NotesInputCollapsed';
import NotesInputExpanded from './NotesInputExpanded';
import { useNotesContext } from '../../context/NotesContext';
import { ACTIONS } from '../../constants/actions';

export default function NotesInput() {
  const titleRef = useRef();
  const notesRef = useRef();
  const { notesDispatch } = useNotesContext();
  const [isNotesExpanded, setIsNotesExpanded] = useState(false);
  let inputComponentToShow;

  if (isNotesExpanded)
    inputComponentToShow = (
      <NotesInputExpanded
        saveNotesAndCollapse={saveNotesAndCollapse}
        titleValueRef={titleRef}
        noteValueRef={notesRef}
      />
    );
  else inputComponentToShow = <NotesInputCollapsed />;

  function saveNotesAndCollapse(e) {
    e.stopPropagation();
    setIsNotesExpanded(false);
    if (!notesRef.current.value && !titleRef.current.value) return;

    const id = Math.floor(Date.now() / 1000);
    const payload = {
      id,
      title: titleRef.current.value,
      note: notesRef.current.value,
    };

    notesDispatch({
      type: ACTIONS.ADD_NOTES,
      payload: { note: payload },
    });
  }

  return (
    <div
      onClick={() => setIsNotesExpanded(true)}
      className={styles.input_container}
    >
      {inputComponentToShow}
    </div>
  );
}
