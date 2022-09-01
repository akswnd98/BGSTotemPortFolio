import React from 'react';
import Item from '..';
import { useStore } from '@/src/zustand/SetScrollTopToProjects';

function Projects () {
  const setScrollTop = useStore((state) => state.setScrollTop);

  const handleClick = () => {
    if (setScrollTop !== undefined) {
      setScrollTop();
    }
  };

  return (
    <div>
      <Item title={'Projects'} handleClick={handleClick} />
    </div>
  );
}

export default Projects;
