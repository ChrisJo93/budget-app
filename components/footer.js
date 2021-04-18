import styles from '../styles/Home.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/ChrisJo93"
        target="_blank"
        rel="noopener noreferrer"
      >
        Budgetier{' '}
        <img src="/logo.svg" alt="Budgeter Logo" className={styles.logo} />
      </a>
    </footer>
  );
}
