import { useEffect, useState } from "react";

export default function useMediaQuery(width: number) {
  let [matches, setMatches] = useState(false);

  function handleMediaChange(event: MediaQueryList | MediaQueryListEvent) {
    setMatches(event.matches);
  }

  useEffect(() => {
    let mediaQuery = window.matchMedia(`(max-width: ${width}px)`);

    mediaQuery.addEventListener("change", handleMediaChange);

    handleMediaChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [width]);

  return matches;
}
