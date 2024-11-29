/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

import styles from './Header.module.css';

const Header = ({ logo, menuItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <a href="/">
                        <img src={logo} alt="Logo" className={styles.logoImg} />
                    </a>
                </div>
                <nav className={styles.navContainer}>
                    <button className={styles.menuToggle} onClick={onToggle}>
                        {isOpen ? (
                            <XMarkIcon className={styles.icon} />
                        ) : (
                            <Bars3Icon className={styles.icon} />
                        )}
                    </button>
                    <ul
                        className={`${styles.navList} ${isOpen ? styles.navOpen : ''
                            }`}
                    >
                        {(menuItems || []).map((item, index) => (
                            <li key={index} className={styles.navItem}>
                                <a
                                    href={item.url}
                                    className={styles.navLink}
                                >
                                    {item.name}
                                </a>
                                <div className={styles.line}></div>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
