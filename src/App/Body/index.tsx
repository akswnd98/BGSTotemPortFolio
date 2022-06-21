import React from 'react';
import AboutMe from './AboutMe';
import styles from './index.module.scss';

function Body () {
  return (
    <div className={styles.root}>
      <div className={styles.sectionWrapper}>
        <AboutMe />
      </div>
    </div>
  );
}

export default Body;
