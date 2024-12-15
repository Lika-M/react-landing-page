/* eslint-disable react/prop-types */
import styles from './Button.module.css';

const Button = ({ url, label, className }) => {
    return (
        <a href={url} className={`${styles.btn} ${className || ''}`}>
            {label}
        </a>
    );
};

export default Button;
