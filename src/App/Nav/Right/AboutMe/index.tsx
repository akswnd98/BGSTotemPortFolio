import React from 'react';
import { useStore } from '@/src/zustand/SetScrollTopToAboutMe';

function AboutMe () {
  const setScrollTop = useStore((state) => (state.setScrollTop));

  return (
    <div onClick={() => {
      if (setScrollTop !== undefined) {
        setScrollTop();
      }
    }}>
      About me
    </div>
  );
}

export default AboutMe;
