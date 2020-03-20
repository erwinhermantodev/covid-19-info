import React, { Component } from 'react';
import styles from './App.css';
import Navbar from './component/layout/navbar'
import Tabbar from './component/layout/tabbar'

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Navbar/>
        <Tabbar/>
      </div>
    );
  }
}

export default App;
