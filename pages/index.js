import Head from 'next/head';
import Nav from 'components/Nav/Nav';
import Wallet from 'components/Wallet/Wallet';
import Test2 from 'dispatch.class';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Budgetier</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Test2 />
      <main>
        <div className="container">
          <Wallet />
          <Wallet />
          <Wallet />
        </div>
      </main>
    </div>
  );
}
