import React from 'react';
import styles from './index.module.scss';
import mobileMenu from '@/assets/images/mobile-menu.svg';

function Menu () {
  return (
    <div id={styles.root}>
      <img src={mobileMenu} />
    </div>
  );
}

export default Menu;
