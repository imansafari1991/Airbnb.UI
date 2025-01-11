import { useEffect, useState } from "react";
import Header from "./Header";
import { MobileHeader } from "./Mobile-Header";

export const ResponsiveHeader: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return isDesktop ? <Header /> : <MobileHeader />;
};
