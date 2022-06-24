import React from 'react';
import styles from './index.module.scss';

export type PropsType = {
  title: string;
  handleClick: () => void;
};

function Item (props: PropsType) {
  return (
    <div className={styles.root}>
      <p onClick={props.handleClick}>{props.title}</p>
    </div>
  );
}

export default Item;
