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

      <main>
        <div className={styles.test}>Boop</div>
      </main>
    </div>
  );
}
