import React, { Component } from 'react';
import Nav from 'components/nav';
import styles from 'styles/Home.module.css';
import Footer from 'components/footer';
import { connect } from 'react-redux';
import { monthGoal } from 'redux/actions';

import MonthDisplay from 'components/month_display_component';

class MonthDisplayView extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Nav />
        <div className={styles.month_main}>
          <p>Month display</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect((state) => state)(MonthDisplayView);
