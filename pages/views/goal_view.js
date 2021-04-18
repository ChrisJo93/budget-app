import React, { Component } from 'react';
import Nav from 'components/nav';
import styles from 'styles/Home.module.css';
import Footer from 'components/footer';
import { connect } from 'react-redux';
import { month } from 'redux/actions';

import Remaining from 'components/budget/remainingbudget';
import MonthDisplay from 'components/month.total';

class BudgetView extends Component {
  state = {
    month: [],
  };

  componentDidMount() {
    this.props.dispatch(month());
  }

  render() {
    const monthList = this.props.reducer.month.map((month, index) => {
      return <MonthDisplay key={index} month={month} />;
    });

    return (
      <div className={styles.container}>
        <Nav />

        <main className={styles.main}>
          <Remaining />
          {monthList}
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
}

export default connect((state) => state)(BudgetView);
