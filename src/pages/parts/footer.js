import React, { Component } from 'react';

export default class Footer extends Component {
  styles() {
    return {
      footer: {
        position: 'fixed',
        bottom: 0,
        right: 0,
        left: 0
      }
    }
  }
  render() {
    const styles = this.styles();
    return (
      <div className="footer" style={styles.footer}>
        <p className="footer__text">京都旅行のしおり　© 2016 takanorip</p>
      </div>
    );
  }
}
