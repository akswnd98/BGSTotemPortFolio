import React from 'react';
import Item from '..';
import { useStore } from '@/src/zustand/SetScrollTopToSkills';

function Skills () {
  const setScrollTop = useStore((state) => state.setScrollTop);

  const handleClick = () => {
    if (setScrollTop !== undefined) {
      setScrollTop();
    }
  };

  return (
    <div>
      <Item title={'Skills'} handleClick={handleClick} />
    </div>
  );
}

export default Skills;
