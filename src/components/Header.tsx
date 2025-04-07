import React, { useState, useEffect } from "react";

import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.stickyHeader}>
      {isDesktop ? <DesktopHeader /> : <MobileHeader />}
    </div>
  );
};

export default Header;
