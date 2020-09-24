import { useLayoutEffect, useState } from 'react';

import { BreakPoints } from 'utils/mediaQueries';

const useIsMobile = (breakpoint = BreakPoints.small) => {
  const [isMobile, setIsMobile] = useState(false);
  const matchMedia = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
  const checkWidth = (e: MediaQueryListEvent) => setIsMobile(e.matches);

  useLayoutEffect(() => {
    setIsMobile(matchMedia.matches);
    matchMedia.addListener(checkWidth);

    return () => {
      matchMedia.removeListener(checkWidth);
    };
  }, [matchMedia]);

  return isMobile;
};

export default useIsMobile;
