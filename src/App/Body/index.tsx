import React from 'react';
import AboutMe from './AboutMe';
import Career from './Career';
import styles from './index.module.scss';
import Projects from './Projects';
import Skills from './Skills';

function Body () {
  return (
    <div className={styles.root}>
      <div className={styles.sectionWrapper}>
        <AboutMe />
        <Projects />
        <Career />
        <Skills />
      </div>
    </div>
  );
}

export default Body;
