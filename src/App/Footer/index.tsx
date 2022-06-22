import React from 'react';
import githubFooter from '@/assets/images/github-footer.svg';
import mailFooter from '@/assets/images/mail-footer.svg';
import copyrightFooter from '@/assets/images/copyright-footer.svg';
import styles from './index.module.scss';

function Footer () {
  return (
    <div className={styles.root}>
      <div className={styles.references}>
        <a href='https://github.com/akswnd98'><img src={githubFooter} /></a>
        {/* <a href=''><img src={mailFooter} /></a> */}
      </div>
      <div className={styles.copyright}>
        <img src={copyrightFooter} />
        &nbsp;Kim man joong. All rights reserved
      </div>
    </div>
  );
}

export default Footer;
