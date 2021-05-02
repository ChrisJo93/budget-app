import Head from 'next/head';
import Nav from 'components/Nav';
import Test from 'dispatch.class';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Budgetier</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Test />
      <main>
        <div className="container"></div>
      </main>
    </div>
  );
}
