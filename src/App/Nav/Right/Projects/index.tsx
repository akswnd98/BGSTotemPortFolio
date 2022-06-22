import React from 'react';
import { useStore } from '@/src/zustand/SetScrollTopToProjects';

function Projects () {
  const setScrollTop = useStore((state) => state.setScrollTop);

  return (
    <div onClick={() => {
      if (setScrollTop !== undefined) {
        setScrollTop();
      }
    }}>
      Projects
    </div>
  );
}

export default Projects;
