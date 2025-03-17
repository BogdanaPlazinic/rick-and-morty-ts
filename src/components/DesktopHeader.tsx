import React from "react";
import { Link } from "react-router-dom";

import { LogoutOutlined } from "@ant-design/icons";

import styles from "./DesktopHeader.module.scss"


const DesktopHeader: React.FC = () => {
    return (
        <header className={styles.headerDesktopContainer}>
            <nav className={styles.navDesktopContainer}>
                <Link to="/characters" className={styles.logoDesktopContainer}>
                    <img 
                    className={styles.logoImg}
                    src="./src/assets/header-logo.png" 
                    />
                    <h1>Rick & Morty</h1>
                </Link>

                <div className={styles.desktopNavLinksContainer}>
                    <div className={styles.desktopNavItemsContainer}>
                        <Link to="/characters">Home</Link>
                        <Link to="/favourites">Favourites</Link>
                    </div>
                    <div className={styles.logoutDesktopBtn}>
                        <Link to="/">
                            <LogoutOutlined />
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default DesktopHeader;