import styles from './searchComponent.module.css';

export default function SearchComponent({ value, setValue }) {
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search here"
      className={styles.search_input}
    />
  );
}
