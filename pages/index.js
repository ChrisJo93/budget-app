import Head from 'next/head';
import Nav from 'components/Nav';
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
        <div className="container"></div>
      </main>
    </div>
  );
}
