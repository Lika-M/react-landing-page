import Button from '../../ui/button/Button.jsx';
import styles from './GetStarted.module.css';

const GetStarted = () => {
  return (
    <section id="ready" className={styles.ready}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ready to Get Started</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed
          scelerisque arcu scelerisque ultrices habitant ac semper lorem.
        </p>
        <Button url="javascript:void(0)" label={"Request a Call"} className={styles['cta-button']} />
      </div>
    </section>
  );
};

export default GetStarted;
