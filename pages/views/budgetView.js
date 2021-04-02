import Link from 'next/link';
import Nav from 'components/nav/nav';

export default function BudgetView() {
  return (
    <div>
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
