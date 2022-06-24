import React from 'react';
import styles from './index.module.scss';
import Left from './Left';
import MenuList from './MenuList';
import Right from './Right';

function Nav () {
  return (
    <div className={styles.root}>
      <div className={styles.topWrapper}>
        <Left />
        <Right />
      </div>
      <div className={styles.menuListWrapper}>
        <MenuList />
      </div>
    </div>
  );
}

export default Nav;
