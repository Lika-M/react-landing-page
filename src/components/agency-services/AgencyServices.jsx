/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './AgencyServices.module.css';

const AgencyServices = ({ servicesData }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className={styles.agencyServices}>
            <h2 className={styles.title}>{servicesData.title}</h2>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.accordion}>
                        {servicesData.items.map((service, index) => (
                            <div key={index} className={`${styles.card} ${expandedIndex === index ? styles.expanded : ''}`}>
                                <div>
                                    <p className={`${styles.line} ${expandedIndex === index ? styles.expanded : ''}`}></p>
                                    <div className={`${styles.serviceHeader} ${expandedIndex === index ? styles.expanded : ''}`}>
                                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                                        <button
                                            className={`${styles.expandButton} ${expandedIndex === index ? styles.expanded : ''}`}
                                            onClick={() => toggleExpand(index)}
                                        >
                                            <img
                                                src="/assets/Icons/chromeye_assignment_arrowdown_v1.svg"
                                                className={`${styles.arrow} ${expandedIndex === index ? styles.rotated : ''}`}
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div className={`${styles.description} ${expandedIndex === index ? styles.expanded : ''}`}>
                                    {service.description}
                                </div>
                            </div>
                        ))}
                        <p className={styles.line}></p>
                    </div>
                    <div>
                        <img src={servicesData.items[2].image} alt={servicesData.items[2].title} className={styles.image} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgencyServices;