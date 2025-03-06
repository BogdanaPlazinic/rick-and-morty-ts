import React from "react";

import { LogoutOutlined } from "@ant-design/icons";

import styles from "./DesktopHeader.module.scss"
import { Link } from "react-router-dom";

const DesktopHeader: React.FC = () => {
    return (
        <header className={styles.headerDesktopContainer}>
            <nav className={styles.navDesktopContainer}>
                <div className={styles.logoDesktopContainer}>
                    <img 
                    className={styles.logoImg}
                    src="./src/assets/header-logo.png" 
                    />
                    <h1>Rick & Morty</h1>
                </div>

                <div className={styles.desktopNavLinksContainer}>
                    <div className={styles.desktopNavItemsContainer}>
                        <Link to="/characters">Home</Link>
                        <Link to="#">Favourites</Link> {/* DODATI LINK ZA FAVOURITES STRANU */}
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