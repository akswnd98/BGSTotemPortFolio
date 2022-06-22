import React, { useRef } from 'react';
import styles from './index.module.scss';
import Project from './Project';
import randomYoutubeScreenshot from '@/assets/images/random-youtube-screenshot.png';
import spreadlogScreenshot from '@/assets/images/spreadlog-screenshot.png';
import typescriptBadge from '@/assets/images/typescript-badge.svg';
import nodejsBadge from '@/assets/images/nodejs-badge.svg';
import expressBadge from '@/assets/images/express-badge.svg';
import sequelizeBadge from '@/assets/images/sequelize-badge.svg';
import mariadbBadge from '@/assets/images/mariadb-badge.svg';
import seleniumBadge from '@/assets/images/selenium-badge.svg';
import codemirrorBadge from '@/assets/images/codemirror-badge.svg';
import reactBadge from '@/assets/images/react-badge.svg';
import { useStore } from '@/src/zustand/SetScrollTopToProjects';

function Projects () {
  const setInterface = useStore((state) => state.setInterface);
  const ref = useRef(null);
  setInterface(() => {
    if (ref.current !== null) {
      window.scrollTo(0, (ref.current as HTMLDivElement).offsetTop);
    }
  });

  return (
    <div className={styles.root} ref={ref}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Projects</div>
        <div className={styles.projectsWrapper}>
          <div className={styles.projectWrapper}>
            <Project
              screenshots={[ randomYoutubeScreenshot, spreadlogScreenshot ]}
              title={'random youtube crawler'}
              date={new Date(2022, 3)}
              description={'특수한 알고리즘을 통해서 최대한 다양한 주제를 크롤링합니다.\n크롤링한 데이터를 바탕으로 랜덤 유튜브 추천 서비스를 제공합니다.'}
              githubUrl={'https://github.com/akswnd98/RandomYoutubeWebServer'}
              webUrl={'https://rantents.tk'}
              skillStacks={[typescriptBadge, nodejsBadge, expressBadge, sequelizeBadge, mariadbBadge, seleniumBadge]}
            />
          </div>
          <div className={styles.projectWrapper}>
            <Project
              screenshots={[ randomYoutubeScreenshot, spreadlogScreenshot ]}
              title={'spread log'}
              date={new Date(2022, 6)}
              description={'전파거북이의 블로그와 velog의 fusion형태입니다.\n그래프를 통해 학습 과정을 DAG형태로 정렬하여 정리할 수 있습니다.'}
              githubUrl={'https://github.com/akswnd98/SpreadLogDesktopWebClient'}
              webUrl={'http://spreadlog.tk'}
              skillStacks={[typescriptBadge, nodejsBadge, expressBadge, sequelizeBadge, mariadbBadge, codemirrorBadge]}
            />
          </div>
          <div className={styles.projectWrapper}>
            <Project
              screenshots={[ randomYoutubeScreenshot, spreadlogScreenshot ]}
              title={'김만중’s Portfolio'}
              date={new Date(2022, 6)}
              description={'지금 보고 계시는 포트폴리오입니다.'}
              githubUrl={'https://github.com/akswnd98/BGSTotemPortfolio'}
              webUrl={''}
              skillStacks={[typescriptBadge, reactBadge]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
