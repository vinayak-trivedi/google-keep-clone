import { useRef } from 'react';
import { useNotesContext } from '../../../../context/NotesContext';
import useClickOutsideComponent from '../../../../hooks/customHooks';
import NotesCardPresentation from './Presentation';
import { ACTIONS } from '../../../../constants/actions';

export default function NotesCard({ note, openNoteDetailsModal, openDeleteConfirmationModal }) {
  const { notesDispatch } = useNotesContext();
  const colorPaletteRef = useRef();
  const { isComponentVisible, setIsComponentVisible } =
    useClickOutsideComponent({ initialIsVisible: false, ref: colorPaletteRef });

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
      isColorPaletteVisible={isComponentVisible}
      openColorPalette={openColorPalette}
      colorPaletteRef={colorPaletteRef}
      openNoteDetailsModal={openNoteDetailsModal}
      openDeleteConfirmationModal={openDeleteConfirmationModal}
    />
  );
}
