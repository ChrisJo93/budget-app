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

      <main className="main">
        <div className="background1">
          {/* <p>red background</p>
          <p>red background</p>
          <p>red background</p>
          <p>red background</p>
          <p>red background</p>
          <p>red background</p>
          <p>red background</p>
          <p>red background</p>
          <p>red background</p>
          <p>red background</p>
          <p>red background</p>
          <p>red background</p>
          <p>red background</p>
          <p>red background</p>
          <p>red background</p>
          <p>red background</p>
          <p>red background</p> */}
        </div>
        <div className="background2">
          {/* <p>green background</p>
          <p>green background</p>
          <p>green background</p>
          <p>green background</p>
          <p>green background</p>
          <p>green background</p>
          <p>green background</p>
          <p>green background</p>
          <p>green background</p>
          <p>green background</p>
          <p>green background</p>
          <p>green background</p>
          <p>green background</p>
          <p>green background</p>
          <p>green background</p> */}
        </div>
        <div className="background3"></div>

        <div className="app_container">
          {/* <Wallet />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction /> */}
        </div>
      </main>
    </div>
  );
}
