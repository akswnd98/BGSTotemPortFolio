import React, { useEffect, useRef } from 'react';
import styles from './index.module.scss';
import { useStore } from '@/src/zustand/MenuModel';
import AboutMe from './Item/AboutMe';
import Projects from './Item/Projects';
import Career from './Item/Career';
import Skills from './Item/Skills';

function MenuList () {
  const { isOn, toggle } = useStore((state) => ({ ...state }));
  const ref = useRef(null);
  useEffect(() => useStore.subscribe((state) => {
    if (ref.current !== null) {
      if (state.isOn) {
        (ref.current as HTMLDivElement).classList.remove(styles.off);
        (ref.current as HTMLDivElement).classList.add(styles.on);
      } else {
        (ref.current as HTMLDivElement).classList.remove(styles.on);
        (ref.current as HTMLDivElement).classList.add(styles.off);
      }
    }
  }));
  return (
    <div className={[styles.root].join(' ')} ref={ref}>
      <AboutMe />
      <Projects />
      <Career />
      <Skills />
    </div>
  )
}

export default MenuList;
