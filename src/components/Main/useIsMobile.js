import { useState, useEffect } from "react";

export default function useIsMobile(threshold = 948) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= threshold);

  useEffect(() => {
    const handleResize = () =>
      setIsMobile(window.innerWidth <= threshold);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [threshold]);

  return isMobile;
}