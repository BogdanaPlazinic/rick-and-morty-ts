import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { LogoutOutlined } from "@ant-design/icons";

import styles from "./DesktopHeader.module.scss";

const DesktopHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.headerDesktopContainer}>
      <nav className={styles.navDesktopContainer}>
        <Link to="/characters" className={styles.logoDesktopContainer}>
          <img className={styles.logoImg} src="./src/assets/header-logo.png" />
          <h1>Rick & Morty</h1>
        </Link>

        <div className={styles.desktopNavLinksContainer}>
          <div className={styles.desktopNavItemsContainer}>
            <Link to="/characters">Home</Link>
            <Link to="/favourites">Favourites</Link>
          </div>
          <div className={styles.logoutDesktopBtn}>
            <LogoutOutlined
              className={styles.logoutDesktopBtnElement}
              onClick={() => {
                localStorage.removeItem("loggedUser");
                navigate("/");
              }}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DesktopHeader;
