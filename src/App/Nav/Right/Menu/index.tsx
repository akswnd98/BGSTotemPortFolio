import React from 'react';
import styles from './index.module.scss';
import mobileMenu from '@/assets/images/mobile-menu.svg';
import { useStore } from '@/src/zustand/MenuModel';

function Menu () {
  const toggle = useStore((state) => state.toggle)
  const handleClick = () => {
    toggle();
  }

  return (
    <div className={styles.root} onClick={handleClick}>
      <img src={mobileMenu} />
    </div>
  );
}

export default Menu;
