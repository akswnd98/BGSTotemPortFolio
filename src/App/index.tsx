import React from 'react';
import styles from './index.module.scss';
import Nav from './Nav';
import Body from './Body';
import Footer from './Footer';

function App () {
  return (
    <div className={styles.root}>
      <Nav />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
