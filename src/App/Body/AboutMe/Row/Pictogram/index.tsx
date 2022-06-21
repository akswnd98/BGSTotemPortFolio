import React from 'react';
import styles from './index.module.scss';

export type PropsType = {
  icon: string;
  label: string;
  value: string;
};

function Pictogram (props: PropsType) {
  return (
    <div className={styles.root}>
      <img src={props.icon} />
      <div className={styles.text}>
        <div className={styles.label}>{props.label}</div>
        <div className={styles.value}>{props.value}</div>
      </div>
    </div>
  );
}

export default Pictogram;
