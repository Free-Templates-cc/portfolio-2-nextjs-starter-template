import { useEffect } from "react";

const useVerticalScrollEvent = (callback: (evt: Event) => void) => {
  useEffect(() => {
    window.addEventListener("scroll", callback);
    return () => {
      window.removeEventListener("scroll", callback);
    };
  }, [callback]);
};

export default useVerticalScrollEvent;