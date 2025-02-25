import { Button } from 'antd';
import Hamburger from 'hamburger-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.scss'

const Navbar: React.FC = () => {
    const [isOpen, setOpen] = useState<boolean>(false)
    const navigate = useNavigate()

    const handleLoogout = () => {
        navigate('/')
    }
    

    return (
        <header className={styles.headerMainContainer}>
            <nav className={styles.header}>
                <div className={styles.logoContainer}>
                    <h3 className={styles.logoText}>
                        Rick & Morty
                    </h3>
                </div>

                <div className={styles.menuContainer}>
                    <Hamburger 
                    toggled={isOpen}
                    toggle={setOpen}
                    />
                </div>

                {isOpen && (
                    <div className={styles.menuOpen}>
                        <div className={styles.menuMainContainer}>
                            <div className={styles.menuContent}>
                                <Link className={styles.linkElement} to="#">Favourite</Link>
                                <Link className={styles.linkElement} to="/characters">Characters</Link>

                                <div>
                                    <Button
                                    className={styles.menuBtn}
                                    onClick={handleLoogout}
                                    type='primary'
                                    >
                                    Log Out
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Navbar;