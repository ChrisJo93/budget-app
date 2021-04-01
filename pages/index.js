import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Remaining from 'components/remainingbudget/remainingbudget';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Budgeter</title>
        <link rel="icon" href="/favicon.ico" />
        <p>Nav bar component goes here</p>
      </Head>

      <main className={styles.main}>
        <h1>
          <Remaining />
        </h1>

        <h3 className={styles.monthlyBudget}>Total Budget for(month): $</h3>
        <div className={styles.recentTransactions}>
          Transaction table exists here
        </div>
      </main>

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
    </div>
  );
}
