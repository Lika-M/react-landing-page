/* eslint-disable react/prop-types */
import { useState } from 'react';

import ServiceCard from '../../ui/service-card/ServiceCard.jsx';
import Button from '../../ui/button/Button.jsx';
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
            <ServiceCard
              key={index}
              item={item}
              isExpanded={expandedItems.includes(index)}
              onToggle={() => toggleExpand(index)}
            />
          ))}
        </div>
        <div className={styles['cta-button']}>
          <Button url={servicesData.buttonUrl} label={servicesData.buttonLabel} />
        </div>
      </div>
    </section >
  );
};

export default Services;