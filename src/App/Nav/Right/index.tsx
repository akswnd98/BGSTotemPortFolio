import React from 'react';
import AboutMe from './AboutMe';
import Career from './Career';
import styles from './index.module.scss';
import Projects from './Projects';
import Skills from './Skills';

function Right () {
  return (
    <div className={styles.root}>
      <div className={styles.sectionWrapper}>
        <AboutMe />
      </div>
      <div className={styles.sectionWrapper}>
        <Projects />
      </div>
      <div className={styles.sectionWrapper}>
        <Career />
      </div>
      <div className={styles.sectionWrapper}>
        <Skills />
      </div>
    </div>
  );
}

export default Right;
