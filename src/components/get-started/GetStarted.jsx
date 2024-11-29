import styles from './GetStarted.module.css';

const GetStarted = () => {
  return (
    <section className={styles.ready}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ready to Get Started</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed
          scelerisque arcu scelerisque ultrices habitant ac semper lorem.
        </p>
        <button className={styles.ctaButton}>Request a Call</button>
      </div>
    </section>
  );
};

export default GetStarted;
