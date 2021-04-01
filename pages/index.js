import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Count from 'components/count/count';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Budgeter</title>
        <link rel="icon" href="/favicon.ico" />
        <p>Nav bar component goes here</p>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          $<Count />
        </h1>
        <div className={styles.recentTransactions}>
          Transaction table exists here
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Budgetier{' '}
          <img src="/logo.svg" alt="Budgeter Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
