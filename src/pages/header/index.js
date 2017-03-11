import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Link } from 'react-router';

export default class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
    this.setState({open: false});
  }

  styles() {
    return {
      header: {
        background: '#F24C27',
        boxShadow: 'none',
        position: 'fixed',
        top: '0',
        left: '0',
      }
    }
  }

  render() {
    const styles = this.styles();
    return (
      <div>
        <MuiThemeProvider>
          <div className="container">
            <AppBar
              title="旅のしおり"
              onLeftIconButtonTouchTap={this.handleToggle}
              style={styles.header}
              />

            <Drawer
              docked={false}
              open={this.state.open}
              width={300}
              onRequestChange={(open) => this.setState({open})}
              >
              <h2 className="menu_title">MENU</h2>
              <Link to="/" className="menu_item"><MenuItem onTouchTap={this.handleClose}>TOP</MenuItem></Link>
              <Link to="/schedule" className="menu_item"><MenuItem onTouchTap={this.handleClose}>スケジュール</MenuItem></Link>
              <Link to="/mission" className="menu_item"><MenuItem onTouchTap={this.handleClose}>ミッション</MenuItem></Link>
              <Link to="/alllinks" className="menu_item"><MenuItem onTouchTap={this.handleClose}>リンク集</MenuItem></Link>
            </Drawer>
            {this.props.children}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
