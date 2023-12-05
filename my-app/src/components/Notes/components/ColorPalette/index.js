import styles from './colorPalette.module.css';

export default function ColorPalette({ colorPaletteRef }) {
  return <div ref={colorPaletteRef} className={styles.color_palette}></div>;
}
