import React, { useRef } from 'react';
import styles from './index.module.scss';
import Desktop from './Project/Desktop';
import Mobile from './Project/Mobile';
import randomYoutubeScreenshot from '@/assets/images/random-youtube-screenshot.png';
import spreadlogScreenshot from '@/assets/images/spreadlog-screenshot.png';
import spreadlogMain from '@/assets/images/spreadlog-main.png';
import spreadlogLogin from '@/assets/images/spreadlog-login.png';
import spreadlogGraph from '@/assets/images/spreadlog-graph.png';
import spreadlogNewNode from '@/assets/images/spreadlog-new-node.png';
import spreadlogEditor from '@/assets/images/spreadlog-editor.png';
import spreadlogUpper from '@/assets/images/spreadlog-upper.png';
import spreadlogLower from '@/assets/images/spreadlog-lower.png';
import bfmakerNewSubject from '@/assets/images/bfmaker-new-subject.png';
import bfmakerNewCourse from '@/assets/images/bfmaker-new-course.png';
import bfmakerTimeInput from '@/assets/images/bfmaker-time-input.png';
import bfmakerResult from '@/assets/images/bfmaker-result.png';
import typescriptBadge from '@/assets/images/typescript-badge.svg';
import nodejsBadge from '@/assets/images/nodejs-badge.svg';
import expressBadge from '@/assets/images/express-badge.svg';
import sequelizeBadge from '@/assets/images/sequelize-badge.svg';
import mariadbBadge from '@/assets/images/mariadb-badge.svg';
import seleniumBadge from '@/assets/images/selenium-badge.svg';
import codemirrorBadge from '@/assets/images/codemirror-badge.svg';
import reactBadge from '@/assets/images/react-badge.svg';
import javaBadge from '@/assets/images/java-badge.svg';
import { useStore } from '@/src/zustand/SetScrollTopToProjects';

function Projects () {
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
        <div className={styles.title}>Projects</div>
        <div className={styles.desktopsWrapper}>
          <div className={styles.desktopWrapper}>
            <Desktop
              screenshots={[ randomYoutubeScreenshot ]}
              title={'random youtube crawler'}
              date={new Date(2022, 3)}
              description={'특수한 알고리즘을 통해서 최대한 다양한 주제를 크롤링합니다.\n크롤링한 데이터를 바탕으로 랜덤 유튜브 추천 서비스를 제공합니다.'}
              githubUrl={'https://github.com/akswnd98/RandomYoutubeWebServer'}
              webUrl={'https://rantents.tk'}
              skillStacks={[typescriptBadge, nodejsBadge, expressBadge, sequelizeBadge, mariadbBadge, seleniumBadge]}
            />
          </div>
          <div className={styles.desktopWrapper}>
            <Desktop
              screenshots={[ spreadlogMain,spreadlogLogin, spreadlogGraph, spreadlogNewNode, spreadlogEditor, spreadlogUpper, spreadlogLower ]}
              title={'spread log'}
              date={new Date(2022, 6)}
              description={'전파거북이의 블로그와 velog의 fusion형태입니다.\n그래프를 통해 학습 과정을 DAG형태로 정렬하여 정리할 수 있습니다.'}
              githubUrl={'https://github.com/akswnd98/SpreadLogDesktopWebClient'}
              webUrl={'http://spreadlog.tk'}
              skillStacks={[typescriptBadge, nodejsBadge, expressBadge, sequelizeBadge, mariadbBadge, codemirrorBadge]}
            />
          </div>
          <div className={styles.desktopWrapper}>
            <Desktop
              screenshots={[]}
              title={'김만중’s Portfolio'}
              date={new Date(2022, 6)}
              description={'지금 보고 계시는 포트폴리오입니다.'}
              githubUrl={'https://github.com/akswnd98/BGSTotemPortfolio'}
              webUrl={''}
              skillStacks={[typescriptBadge, reactBadge]}
            />
          </div>
          <div className={styles.desktopWrapper}>
            <Desktop
              screenshots={[bfmakerNewSubject, bfmakerNewCourse, bfmakerTimeInput, bfmakerResult]}
              title={'bfmaker (burning friday maker)'}
              date={new Date(2019, 7)}
              description={'금요공강을 위해 시간표를 자동으로 제작해주는 머신입니다.'}
              githubUrl={'https://github.com/akswnd98/bfmaker_javafx'}
              webUrl={'https://github.com/akswnd98/bfmaker-release'}
              skillStacks={[javaBadge]}
            />
          </div>
        </div>
        <div className={styles.mobilesWrapper}>
          <div className={styles.mobileWrapper}>
            <Mobile
              screenshots={[ randomYoutubeScreenshot ]}
              title={'random youtube crawler'}
              date={new Date(2022, 3)}
              description={'특수한 알고리즘을 통해서 최대한 다양한 주제를 크롤링합니다.\n크롤링한 데이터를 바탕으로 랜덤 유튜브 추천 서비스를 제공합니다.'}
              githubUrl={'https://github.com/akswnd98/RandomYoutubeWebServer'}
              webUrl={'https://rantents.tk'}
              skillStacks={[typescriptBadge, nodejsBadge, expressBadge, sequelizeBadge, mariadbBadge, seleniumBadge]}
            />
          </div>
          <div className={styles.mobileWrapper}>
            <Mobile
              screenshots={[ spreadlogMain,spreadlogLogin, spreadlogGraph, spreadlogNewNode, spreadlogEditor, spreadlogUpper, spreadlogLower ]}
              title={'spread log'}
              date={new Date(2022, 6)}
              description={'전파거북이의 블로그와 velog의 fusion형태입니다.\n그래프를 통해 학습 과정을 DAG형태로 정렬하여 정리할 수 있습니다.'}
              githubUrl={'https://github.com/akswnd98/SpreadLogDesktopWebClient'}
              webUrl={'http://spreadlog.tk'}
              skillStacks={[typescriptBadge, nodejsBadge, expressBadge, sequelizeBadge, mariadbBadge, codemirrorBadge]}
            />
          </div>
          <div className={styles.mobileWrapper}>
            <Mobile
              screenshots={[]}
              title={'김만중’s Portfolio'}
              date={new Date(2022, 6)}
              description={'지금 보고 계시는 포트폴리오입니다.'}
              githubUrl={'https://github.com/akswnd98/BGSTotemPortfolio'}
              webUrl={''}
              skillStacks={[typescriptBadge, reactBadge]}
            />
          </div>
          <div className={styles.mobileWrapper}>
            <Mobile
              screenshots={[bfmakerNewSubject, bfmakerNewCourse, bfmakerTimeInput, bfmakerResult]}
              title={'bfmaker (burning friday maker)'}
              date={new Date(2019, 7)}
              description={'금요공강을 위해 시간표를 자동으로\n제작해주는 머신입니다.'}
              githubUrl={'https://github.com/akswnd98/bfmaker_javafx'}
              webUrl={'https://github.com/akswnd98/bfmaker-release'}
              skillStacks={[javaBadge]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
