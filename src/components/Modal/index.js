import styles from './modal.module.css';

export default function Modal({ children, onClose }) {
  return (
    <div onClick={onClose} className={styles.modal}>
      {children}
    </div>
  )
}