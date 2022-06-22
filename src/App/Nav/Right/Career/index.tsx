import { useStore } from '@/src/zustand/SetScrollTopToCareer';
import React from 'react';

function Career () {
  const setScrollTop = useStore((state) => state.setScrollTop);

  return (
    <div onClick={() => {
      if (setScrollTop !== undefined) {
        setScrollTop();
      }
    }}>
      Career
    </div>
  );
}

export default Career;
