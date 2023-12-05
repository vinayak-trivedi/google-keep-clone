import { useRef } from 'react';
import { useNotesContext } from '../../../../context/NotesContext';
import useClickOutsideComponent from '../../../../hooks/customHooks';
import NotesCardPresentation from './Presentation';
import { ACTIONS } from '../../../../constants/actions';

export default function NotesCard({ note, openNoteDetailsModal }) {
  const { notesDispatch } = useNotesContext();
  const colorPaletteRef = useRef();
  const { isComponentVisible, setIsComponentVisible } =
    useClickOutsideComponent({ initialIsVisible: false, ref: colorPaletteRef });

  function deleteNote(e) {
    e.stopPropagation();
    notesDispatch({
      type: ACTIONS.DELETE_NOTES,
      payload: { noteId: note?.id },
    });
  }

  function openColorPalette(e) {
    e.stopPropagation();
    setIsComponentVisible(true);

  }

  return (
    <NotesCardPresentation
      title={note?.title}
      note={note?.note}
      color={note?.color}
      noteId={note?.id}
      deleteNote={deleteNote}
      isColorPaletteVisible={isComponentVisible}
      openColorPalette={openColorPalette}
      colorPaletteRef={colorPaletteRef}
      openNoteDetailsModal={openNoteDetailsModal}
    />
  );
}
