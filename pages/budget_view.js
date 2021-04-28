import React, { Component } from 'react';
import Nav from 'components/nav';
import styles from 'styles/Home.module.css';
import Footer from 'components/footer';
import { connect } from 'react-redux';
import { monthList } from 'redux/actions';

import MonthDisplay from 'components/month.total';

class BudgetView extends Component {
  state = {
    month: [],
  };

  componentDidMount() {
    this.props.dispatch(monthList());
  }

  render() {
    const monthList = this.props.reducer.month.map((month, index) => {
      return <MonthDisplay key={index} month={month} />;
    });

    return (
      <div className={styles.container}>
        <Nav />
        <article className={styles.month_main}>{monthList}</article>
        <Footer />
      </div>
    );
  }
}

export default connect((state) => state)(BudgetView);
