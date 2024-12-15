/* eslint-disable react/prop-types */
import Button from '../../ui/button/Button.jsx';
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
                    <Button url={heroData.buttonUrl} label={heroData.buttonLabel}/>
                </div>
                <div className={styles.image}>
                    <img src={heroData.image} alt={heroData.title} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
