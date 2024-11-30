/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './Services.module.css';

const Services = ({ servicesData }) => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleExpand = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.headings}>
          <h2>{servicesData.title}</h2>
          <p>{servicesData.description}</p>
        </div>
        <div className={styles.grid}>
          {servicesData.items && servicesData.items.map((item, index) => (
            <div key={index} className={styles.card}>
              <img
                src="/assets/Icons/chromeye_assignment_checkhighlights_v1.svg"
                alt="Dynamic Digital Ads"
                className={styles.checkIcon}
              />
              <div className={styles.info}>
                <h3>{item.title}</h3>
                <button
                  className={`${styles['expand-button']} ${expandedItems.includes(index) ? styles['expanded'] : ''}`}
                  onClick={() => toggleExpand(index)}
                >
                  {expandedItems.includes(index)
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
              <p className={`${styles['service-description']} ${expandedItems.includes(index) ? styles['expanded'] : ''}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className={styles.button}>
          <a href={servicesData.buttonUrl} className={styles['cta-button']}>
            {servicesData.buttonLabel}
          </a>
        </div>
      </div>
    </section >
  );
};

export default Services;