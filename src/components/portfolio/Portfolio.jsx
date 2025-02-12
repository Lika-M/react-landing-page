/* eslint-disable react/prop-types */
import Button from '../../ui/button/Button.jsx';
import styles from './Portfolio.module.css';

const Portfolio = ({ portfolioData }) => {
    
    return (
        <section id="portfolio" className={styles.portfolio}>
            <div className={styles.headings}>
                <h2>{portfolioData.title}</h2>
                <p>{portfolioData.description}</p>
            </div>
            <div className={styles.projects}>
                {portfolioData.items.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.content}>
                            <h2>{item.title}</h2>
                            <p className={styles.line}></p>
                            <p className={styles.cardDescription}>{item.description}</p>
                            <div>
                                <Button url={item.buttonUrl} label={item.buttonLabel} />
                            </div>
                        </div>
                        <div>
                            <img src={item.image} alt={item.title} className={styles.image} />
                        </div>
                    </div>
                ))}
            </div>
            <p className={styles.line}></p>
        </section>
    );
};

export default Portfolio;
