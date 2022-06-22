import React from 'react';
import { useStore } from '@/src/zustand/SetScrollTopToSkills';

function Skills () {
  const setScrollTop = useStore((state) => state.setScrollTop);

  return (
    <div onClick={() => {
      if (setScrollTop !== undefined) {
        setScrollTop();
      }
    }}>
      Skills
    </div>
  );
}

export default Skills;
