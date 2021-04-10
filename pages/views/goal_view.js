import Footer from 'components/footer/footer';
import Nav from 'components/nav/nav';
import styles from 'styles/Home.module.css';

export default function BudgetView() {
  return (
    <div className={styles.container}>
      <Nav />
      <main className={styles.main}>
        <p>Where Budget Goes.</p>
        <ul>
          <li>Monthly Budget established here.</li>
          <li>Weekly Budget set here</li>
          <li>Goals</li>
          <li>Graph displaying spending trends.</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
