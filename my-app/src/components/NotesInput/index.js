import React, { useRef, useState } from 'react';
import useClickOutsideComponent from '../../hooks/customHooks';
import styles from './notesInput.module.css';
import NotesInputCollapsed from './NotesInputCollapsed';
import NotesInputExpanded from './NotesInputExpanded';

export default function NotesInput() {
  const notesInputRef = useRef();
  const titleRef = useRef(null);
  const notesRef = useRef(null);
  const { isComponentVisible, setIsComponentVisible } =
    useClickOutsideComponent(false, notesInputRef);
  let inputComponentToShow;

  if (isComponentVisible)
    inputComponentToShow = (
      <NotesInputExpanded
        saveNotesAndCollapse={saveNotesAndCollapse}
        titleValueRef={titleRef}
        noteValueRef={notesRef}
      />
    );
  else inputComponentToShow = <NotesInputCollapsed />;

  function saveNotesAndCollapse() {
    setIsComponentVisible(false);
  }

  return (
    <div className={styles.input_container}>
      <div
        onClick={() => setIsComponentVisible(true)}
        ref={notesInputRef}
        className={styles.input_child_container}
      >
        {inputComponentToShow}
      </div>
      {isComponentVisible && (
        <button onClick={saveNotesAndCollapse} className={styles.close_button}>
          Close
        </button>
      )}
    </div>
  );
}
