import React, { Component } from 'react';
import Nav from 'components/nav';
import styles from 'styles/Home.module.css';
import Footer from 'components/footer';
import { connect } from 'react-redux';
import { monthGoal } from 'redux/actions';

import MonthDisplay from 'components/month_display_component';

class MonthDisplayView extends Component {
  componentDidMount() {
    this.props.dispatch(monthGoal());
    console.log(this.props.month);
  }

  render() {
    // const monthList = this.props.monthReducer.monthGoal.map((month, index) => {
    //   return <MonthDisplay key={index} month={month} />;
    // });

    return (
      <div className={styles.container}>
        <Nav />
        {/* <article className={styles.month_main}>{monthList}</article> */}
        <Footer />
      </div>
    );
  }
}

export default connect((state) => state)(MonthDisplayView);
