import React, { Component } from 'react';

export default class PageTitle extends Component {

  styles() {
    return {
      title: {
        marginBottom: '24px',
        fontSize: '22px',
        color: '#262320',
      },
      text: {
        marginTop: '48px',
        lineHeight: '1',
      }
    }
  }

  render() {
    const styles = this.styles();
    return (
      <div className="pagetitle" style={styles.title}>
        <h3 className="pagetitle__text" style={styles.text}>{this.props.title}</h3>
      </div>
    );
  }
}
