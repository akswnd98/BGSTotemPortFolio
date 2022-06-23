import React from 'react';
import Card from '../Card';
import styles from './index.module.scss';
import githubProjectUrl from '@/assets/images/github-project-url.svg';
import webProjectUrl from '@/assets/images/web-project-url.svg';

export type PropsType = {
  screenshots: string[];
  title: string;
  date: Date;
  description: string;
  githubUrl: string;
  webUrl: string;
  skillStacks: string[];
}

function Desktop (props: PropsType) {
  return (
    <div className={styles.root}>
      <div className={styles.cardWrapper}>
        <Card screenshots={props.screenshots} />
      </div>
      <div className={styles.rightWrapper}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.date}>{`${props.date.getFullYear()}.${props.date.getMonth()}`}</div>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.urls}>
          <a href={props.githubUrl}><img src={githubProjectUrl} /></a>
          <a href={props.webUrl}><img src={webProjectUrl} /></a>
        </div>
        <div className={styles.skillStacks}>
          {
            props.skillStacks.map((v, i) => (
              <img src={v} key={i} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Desktop;
