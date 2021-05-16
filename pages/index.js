import Head from 'next/head';
import Nav from 'components/Nav/Nav';
import Wallet from 'components/Wallet/Wallet';
import Transaction from 'components/Transaction/Transaction';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Budgetier</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="background1">
        <Nav />
      </main>
      <div className="background2"></div>
    </div>
  );
}
