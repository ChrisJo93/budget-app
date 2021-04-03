import Nav from 'components/nav/nav';
import styles from 'styles/Home.module.css';

export default function BudgetView() {
  return (
    <div className={styles.container}>
      <Nav />
      <p>Where Budget Goes.</p>
      <ul>
        <li>Monthly Budget established here.</li>
        <li>Weekly Budget set here</li>
        <li>Goals</li>
        <li>Graph displaying spending trends.</li>
      </ul>
    </div>
  );
}
