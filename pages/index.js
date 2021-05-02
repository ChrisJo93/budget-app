import Head from 'next/head';
import Nav from 'components/nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Budgetier</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <div className="container"></div>
      </main>
    </div>
  );
}
