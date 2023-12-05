import ColorPalette from '../ColorPalette';
import styles from './notesCard.module.css';

export default function NotesCardPresentation({
  title,
  note,
  deleteNote,
  isColorPaletteVisible,
  setIsColorPaletteVisible,
  colorPaletteRef,
  noteId,
  color,
}) {
  return (
    <div
      style={{ background: color ? color : '#fff' }}
      className={styles.notes_card}
    >
      <div className={styles.text_container}>
        <p className={styles.notes_card__title}>{title}</p>
        <p className={styles.notes_card__note}>{note}</p>
      </div>
      <div className={styles.note_actions}>
        <button
          onClick={() => setIsColorPaletteVisible(true)}
          className={styles.color_select_button}
        >
          <img src="/color_palette.png" width="100%" height="100%" />
        </button>
        <button onClick={deleteNote} className={styles.delete_button}>
          <img src="/delete_icon.svg" width="100%" height="100%" />
        </button>
      </div>
      {isColorPaletteVisible && (
        <ColorPalette noteId={noteId} colorPaletteRef={colorPaletteRef} />
      )}
    </div>
  );
}
