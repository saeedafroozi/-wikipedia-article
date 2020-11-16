import { useEffect, useState } from 'react';
import { Scroll_Accuracy } from '../utils/constants'

export function useScroll() {
  const [scrollStart, setScrollStart] = useState(false);
  const handleScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    setScrollStart(winScroll > Scroll_Accuracy)
  };
  useEffect(
    () => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    },
    []
  )
  return scrollStart;
};

