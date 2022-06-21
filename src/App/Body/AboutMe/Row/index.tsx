import React from 'react';
import styles from './index.module.scss';
import Pictogram, { PropsType as PictogramPropsType } from './Pictogram';

export type PropsType = {
  pictogramProps: PictogramPropsType[];
};

function Row (props: PropsType) {
  return (
    <div className={styles.root}>
      {
        props.pictogramProps.map((v) => (
          <div className={styles.pictogramWrapper}>
            <Pictogram icon={v.icon} label={v.label} value={v.value} />
          </div>
        ))
      }
    </div>
  );
}

export default Row;
