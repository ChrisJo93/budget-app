import Head from 'next/head';
import Nav from 'components/Nav/Nav';
import Wallet from 'components/Wallet/Wallet';
import Transaction from 'components/Transaction/Transaction';

import styles from './index.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Budgetier</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <main>
        <div className="background1">
          <div className="background2">
            <div className="container">
              <Wallet />
              <div className={styles.test}>
                <Transaction />
                <Transaction />
              </div>
              <Transaction />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
