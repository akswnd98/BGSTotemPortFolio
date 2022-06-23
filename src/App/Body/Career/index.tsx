import { useStore } from '@/src/zustand/SetScrollTopToCareer';
import React, { useRef } from 'react';
import styles from './index.module.scss';

function Career () {
  const setInterface = useStore((state) => state.setInterface);
  const ref = useRef(null);
  setInterface(() => {
    if (ref.current !== null) {
      window.scrollTo({ left: 0, top: (ref.current as HTMLDivElement).offsetTop, behavior: 'smooth' });
    }
  });

  return (
    <div className={styles.root} ref={ref}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Career</div>
        <div className={styles.preparring}>준비중...</div>
      </div>
    </div>
  );
}

export default Career;
