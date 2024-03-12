import { useEffect, useState } from "react";

export function useMediaQuery(query) {
  const [isMatched, setIsMatched] = useState(window.matchMedia(`(max-width: ${query})`).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 750px)");

    const handleResize = () => setIsMatched(mediaQuery.matches);

    // Add the event listener on initial render and cleanup on unmount
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return isMatched;
}
