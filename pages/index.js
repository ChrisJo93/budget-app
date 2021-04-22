import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from 'components/nav';
import Footer from 'components/footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Budgetier</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className={styles.main}>
        <h3 className={styles.monthlyBudget}></h3>
        <div className={styles.recentTransactions}>
          Transaction table exists here
        </div>
      </main>

      <Footer />
    </div>
  );
}
