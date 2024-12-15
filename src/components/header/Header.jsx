/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Button from '../../ui/button/Button.jsx';
import styles from './Header.module.css';

const Header = ({ logo, menuItems }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const onToggle = () => {
        setIsAnimating(true);
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };

    return (
        <header
            className={`${styles.header} 
            ${isAnimating && (isOpen ? styles.navOpen : styles.navClose)}`}
        >
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
                        className={`${styles.navList} 
                        ${isAnimating && (isOpen ? styles.navOpen : styles.navClose)}`}
                    >
                        {(menuItems || []).map((item, index) => (
                            index !== menuItems.length - 1 ? (
                                <li key={index} className={styles.navItem}>
                                    <a href={item.url} className={styles.navLink}>
                                        {item.name}
                                    </a>
                                    <div className={styles.line}></div>
                                </li>
                            ) : (
                                <li key={index} className={styles.navItem}>
                                    <Button url={item.url} label={item.name} className={styles.navLink} />
                                </li>
                            )
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
