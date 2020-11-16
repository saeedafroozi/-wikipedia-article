import { useEffect, useState } from 'react';

export function useScroll() {
  const [scrollStart, setscrollStart] = useState(false);
  const handleScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(winScroll);
    setscrollStart(winScroll <= 15 ? false : true)
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },
    []
  )
  return scrollStart;
}

