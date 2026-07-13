"use client";

import { useEffect, useState } from "react";

export function useScroll(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let currentState = false;

    const handleScroll = () => {
      const nextState = window.scrollY > threshold;

      if (nextState === currentState) {
        return;
      }

      currentState = nextState;
      setScrolled(nextState);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [threshold]);

  return scrolled;
}