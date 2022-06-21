import React from 'react';
import styles from './index.module.scss';
import Left from './Left';
import Right from './Right';

function Nav () {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default Nav;
