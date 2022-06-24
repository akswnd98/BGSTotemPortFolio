import React from 'react';
import Item from '..';
import { useStore } from '@/src/zustand/SetScrollTopToCareer';

function Career () {
  const setScrollTop = useStore((state) => state.setScrollTop);

  const handleClick = () => {
    if (setScrollTop !== undefined) {
      setScrollTop();
    }
  };

  return (
    <div>
      <Item title={'Career'} handleClick={handleClick} />
    </div>
  );
}

export default Career;
