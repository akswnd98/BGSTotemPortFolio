import React, { useRef } from 'react';
import styles from './index.module.scss';
import Nav from './Nav';
import MenuList from './MenuList';
import Body from './Body';
import Footer from './Footer';

function App () {
  return (
    <div className={styles.root}>
      <div className={styles.nav}>
        <Nav />
      </div>
      <div className={styles.menuList}>
        <MenuList />
      </div>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
