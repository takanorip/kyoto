import React, { Component } from 'react';
import { Link } from 'react-router';
import Footer from '../parts/footer.js';

import style from '../../styles/App.styl';

export default class Home extends Component {

  render() {
    return (
      <div className="main_top">
        <h1 className="title">京都旅行</h1>
        <div className="section_top">
          <div className="links">
            <div className="top_link"><Link to='/schedule'>日程</Link></div>
            <div className="top_link"><Link to='/mission'>やること</Link></div>
            <div className="top_link"><Link to='/alllinks'>リンク集</Link></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
