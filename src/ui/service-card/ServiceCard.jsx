/* eslint-disable react/prop-types */
import styles from './ServiceCard.module.css';

const ServiceCard = ({item, isExpanded, onToggle}) => {
    return (
        <div className={styles.card}>
              <img
                src="/assets/Icons/chromeye_assignment_checkhighlights_v1.svg"
                alt="Dynamic Digital Ads"
                className={styles.checkIcon}
              />
              <div className={styles.info}>
                <h3>{item.title}</h3>
                <button
                  className={`${styles['expand-button']} ${isExpanded ? styles['expanded'] : ''}`}
                  onClick={onToggle}
                >
                  {isExpanded
                    ? (<img
                      src="/assets/Icons/chromeye_assignment_minus_v1.svg"
                      alt="Plus icon"
                      className={styles.operatorIcon}
                    />)
                    : (<img
                      src="/assets/Icons/chromeye_assignment_plus_v1.svg"
                      alt="Minus icon"
                      className={styles.operatorIcon}
                    />)
                  }
                </button>
              </div>
              <p className={`${styles['service-description']} ${isExpanded ? styles['expanded'] : ''}`}>
                {item.description}
              </p>
            </div>
    );
}

export default ServiceCard;