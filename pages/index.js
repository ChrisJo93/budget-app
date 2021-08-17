import Head from 'next/head';
import Nav from 'components/Nav';
import Wallet from 'components/Wallet';
import Transaction from 'components/Transaction';

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
      <main className="text-gray-400">
        <Nav />

        <Wallet />
        <Transaction />
      </main>
    </div>
  );
}
