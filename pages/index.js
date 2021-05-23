import Head from 'next/head';
import Nav from 'components/Nav/Nav';
import Wallet from 'components/Wallet/Wallet';
import Transaction from 'components/Transaction/Transaction';

/* To Do Items: 
1. Nav
2. Transaction
3. Wallet.
Further details listed in component files.
 */

export default function Home() {
  return (
    <div>
      <Head>
        <title>Budgetier</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="background1">
        <Nav />
        <div className="background2"></div>
        <div className="background3"></div>
        <div className="background4"></div>
        <Wallet />
      </div>
    </div>
  );
}
