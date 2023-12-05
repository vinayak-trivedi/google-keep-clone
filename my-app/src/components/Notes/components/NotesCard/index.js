import { useRef } from 'react';
import { useNotesContext } from '../../../../context/NotesContext';
import useClickOutsideComponent from '../../../../hooks/customHooks';
import NotesCardPresentation from './Presentation';
import { ACTIONS } from '../../../../constants/actions';

export default function NotesCard({ note }) {
  const { notesDispatch } = useNotesContext();
  const colorPaletteRef = useRef();
  const { isComponentVisible, setIsComponentVisible } =
    useClickOutsideComponent({ initialIsVisible: false, ref: colorPaletteRef });

    console.log(note, 'note')
  function deleteNote() {
    notesDispatch({
      type: ACTIONS.DELETE_NOTES,
      payload: { noteId: note?.id },
    });
  }
  return (
    <NotesCardPresentation
      title={note?.title}
      note={note?.note}
      color={note?.color}
      noteId={note?.id}
      deleteNote={deleteNote}
      isColorPaletteVisible={isComponentVisible}
      setIsColorPaletteVisible={setIsComponentVisible}
      colorPaletteRef={colorPaletteRef}
    />
  );
}
