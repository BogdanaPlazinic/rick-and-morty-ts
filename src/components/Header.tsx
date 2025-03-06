import React, { useState, useEffect } from "react";

import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader"

const Header: React.FC = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isDesktop ? <DesktopHeader /> : <MobileHeader />;
}

export default Header;