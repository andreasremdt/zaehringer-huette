import { useEffect, useState } from "react";

export default function useMediaQuery(width: number) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    function handleMediaChange(event: MediaQueryList | MediaQueryListEvent) {
      setMatches(event.matches);
    }

    const mediaQuery = window.matchMedia(`(max-width: ${width}px)`);

    mediaQuery.addEventListener("change", handleMediaChange);

    handleMediaChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [width]);

  return matches;
}
