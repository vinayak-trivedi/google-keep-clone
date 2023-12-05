import styles from './colorPalette.module.css';

export default function ColorPaletteItem({ color, selectColor }) {
  return (
    <div
      onClick={selectColor}
      style={{ background: color }}
      className={styles.color_palette_item}
    ></div>
  );
}
