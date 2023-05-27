import { useEffect, useState } from "react";

const useIsMovible = () => {
  const [is, setIs] = useState(false);

  useEffect(() => {
    if (typeof navigator != "undefined") {
      const isMobile =
        /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(
          navigator.userAgent,
        );
      setIs(isMobile);
    }
  }, []);

  return is;
};

export default useIsMovible;
