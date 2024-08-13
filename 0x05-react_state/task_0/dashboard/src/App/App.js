import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Notifications from '../Notifications/Notifications';

const styles = StyleSheet.create({
  body: {
    padding: '20px',
    margin: '0',
    fontFamily: 'Arial, sans-serif',
  },
  footer: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    textAlign: 'center',
    borderTop: '1px solid #E7E7E7',
    padding: '10px 0',
    backgroundColor: '#ffffff',
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawr: false });
  }

  render() {
    return (
      <div className="App">
        {/* Your components go here */}
        <Notifications
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <footer className={css(styles.footer)}>
          Copyright 2020 - Holberton School
        </footer>
      </div>
    );
}

export default App;
