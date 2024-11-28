/* eslint-disable react/prop-types */
import styles from './Hero.module.css';


const Hero = ({ heroData }) => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        {heroData.title}
                    </h1>
                    <p className={styles.description}>{heroData.description}</p>
                    <a href={heroData.buttonUrl} className={styles.ctaButton}>
                        {heroData.buttonLabel}
                    </a>
                </div>
                <div className={styles.image}>
                    <img src={heroData.image} alt={heroData.title} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
