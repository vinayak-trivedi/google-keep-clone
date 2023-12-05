import { ACTIONS } from '../../../../constants/actions';
import { useNotesContext } from '../../../../context/NotesContext';
import ColorPaletteItem from './ColorPaletteItem';
import { COLOR_PALETTE_COLORS } from './colorPalette.constant';
import styles from './colorPalette.module.css';

export default function ColorPalette({ colorPaletteRef, noteId }) {
  const { notesDispatch } = useNotesContext();
  const colorPaletteItems = COLOR_PALETTE_COLORS.map((color) => (
    <ColorPaletteItem
      color={color}
      key={color}
      selectColor={() => selectColor(color)}
    />
  ));

  function selectColor(color) {
    notesDispatch({
      type: ACTIONS.UPDATE_NOTES,
      payload: {
        noteId,
        payloadToUpdate: {
          color,
        },
      },
    });
  }

  return (
    <div ref={colorPaletteRef} className={styles.color_palette}>
      {colorPaletteItems}
    </div>
  );
}
