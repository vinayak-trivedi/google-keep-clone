import styles from './notesInput.module.css'

export default function NotesInputCollapsed() {
  return (
    <input readOnly className={styles.input_collapsed} placeholder='Take a note...' />
  )
}