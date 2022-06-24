import React from 'react';
import Item from '..';
import { useStore } from '@/src/zustand/SetScrollTopToAboutMe';

function AboutMe () {
  const setScrollTop = useStore((state) => state.setScrollTop);

  const handleClick = () => {
    if (setScrollTop !== undefined) {
      setScrollTop();
    }
  };

  return (
    <div>
      <Item title={'About me'} handleClick={handleClick} />
    </div>
  );
}

export default AboutMe;
