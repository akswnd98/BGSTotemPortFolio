import React, { useRef } from 'react';
import styles from './index.module.scss';
import person from '@/assets/images/person-pictogram.svg';
import call from '@/assets/images/call-pictogram.svg';
import calendar from '@/assets/images/calendar-pictogram.svg';
import mail from '@/assets/images/mail-pictogram.svg';
import star from '@/assets/images/star-pictogram.svg';
import github from '@/assets/images/github-pictogram.svg';
import { useStore } from '@/src/zustand/SetScrollTopToAboutMe';
import Pictogram from './Pictogram';

function AboutMe () {
  const ref = useRef(null);
  const setInterface = useStore((state) => state.setInterface);
  setInterface(() => {
    if (ref.current !== null) {
      window.scrollTo({ left: 0, top: (ref.current as HTMLDivElement).offsetTop, behavior: 'smooth' });
    }
  });

  return (
    <div className={styles.root} ref={ref}>
      <div className={styles.wrapper}>
        <p className={styles.title}>About me</p>
        <div className={styles.pictograms}>
          <div className={styles.pictogramWrapper}>
            <Pictogram icon={person} label={'이름'} value={'김만중'} />
          </div>
          <div>
            <Pictogram icon={calendar} label={'생년월일'} value={'98.09.15'} />
          </div>
          <div>
            <Pictogram icon={star} label={'특징'} value={'합리적 경험주의자'} />
          </div>
          <div>
            <Pictogram icon={call} label={'연락처'} value={'010-8933-4509'} />
          </div>
          <div>
            <Pictogram icon={mail} label={'이메일'} value={'akswnd98@gmail.com'} />
          </div>
          <div>
            <Pictogram icon={github} label={'github'} value={'https://github.com/akswnd98'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
