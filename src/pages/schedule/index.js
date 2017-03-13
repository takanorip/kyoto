import React, { Component } from 'react';
import Title from '../parts/title';
import Footer from '../parts/footer.js';

export default class Schedule extends Component {

  render() {
    return (
      <div className="main">
        <div className="section">
          <Title title="スケジュール" />
          <p className="sec_title">京都駅</p>
          <div className="links">
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
