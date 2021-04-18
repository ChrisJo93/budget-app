import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Remaining from 'components/budget/remainingbudget';
import Nav from 'components/nav';
import Footer from 'components/footer';
import Test2 from 'class.dispatch';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Budgetier</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Test2 />

      <main className={styles.main}>
        <h1>
          <Remaining />
        </h1>

        <h3 className={styles.monthlyBudget}></h3>
        <div className={styles.recentTransactions}>
          Transaction table exists here
        </div>
      </main>

      <Footer />
    </div>
  );
}
