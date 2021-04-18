import Nav from 'components/nav';
import styles from 'styles/Home.module.css';
import Footer from 'components/footer';

import Remaining from 'components/budget/remainingbudget';

export default function BudgetView() {
  return (
    <div className={styles.container}>
      <Nav />

      <main className={styles.main}>
        <Remaining />
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
