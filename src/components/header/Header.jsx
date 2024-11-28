/* eslint-disable react/prop-types */
import styles from './Header.module.css';

const Header = ({ logo, menuItems }) => {

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <a href="/">
                        <img src={logo} alt="Logo" className={styles.logo} />
                    </a>
                </div>
                <nav className={styles.navContainer}>
                    <ul className={styles.navList}>
                        {menuItems
                            .filter(item => item.url)
                            .map((item, index) => (
                                <li key={index} className={styles.navItem}>
                                    <a href={item.url} className={styles.navLink}>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
