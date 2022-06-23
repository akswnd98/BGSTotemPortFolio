import React from 'react';
import styles from './index.module.scss';

export type PropsType = {
  partName: string;
  skillPictograms: string[];
};

function Part (props: PropsType) {
  return (
    <div className={styles.root}>
      <div className={styles.partName}>{props.partName}</div>
      <div className={styles.badgesWrapper}>
        <div className={styles.badges}>
          {
            props.skillPictograms.map((v, i) => (
              <img key={i} src={v} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Part;
