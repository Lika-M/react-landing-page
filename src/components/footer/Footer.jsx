/* eslint-disable react/prop-types */
import styles from './Footer.module.css';

const Footer = ({ companyData, footerMenu }) => {
  const sortedMenu = footerMenu.sort((a, b) => a.order - b.order);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <div>
            <a href="#" className={styles.logo}>
              <img src={companyData.logo} alt={`${companyData.name} Logo`} />
            </a>
          </div>
          <div>
            <a href="#" className={styles.button}>
              Request a Call
            </a>
          </div>
        </div>
        <div className={styles.linksSection}>
          <div className={styles.column}>
            <ul className={styles.linksList}>
              {sortedMenu.slice(0, Math.ceil(sortedMenu.length / 2)).map((menuItem) => (
                <li key={menuItem.name}>
                  <a href={menuItem.url}>{menuItem.name}</a>
                  {menuItem.name === "Information" && (
                    <p>{companyData.intro}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.column}>
            <ul className={styles.linksList}>
              {sortedMenu.slice(Math.ceil(sortedMenu.length / 2)).map((menuItem) => (
                <li key={menuItem.name}>
                  <a href={menuItem.url}>{menuItem.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.socialMedia}>
              <p>Follow us:</p>
              <div className={styles.socialLinks}>
                {companyData.social_media.facebook && (
                  <a href={companyData.social_media.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}>
                    <img
                      src="/assets/Icons/chromeye_assignment_facebookicon_v1.svg"
                      alt="Facebook"
                    />
                  </a>
                )}
                {companyData.social_media.twitter && (
                  <a href={companyData.social_media.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}>
                    <img
                      src="/assets/Icons/chromeye_assignment_twittericon_v1.svg"
                      alt="Twitter"
                    />
                  </a>
                )}
                {companyData.social_media.linkedin && (
                  <a href={companyData.social_media.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}>
                    <img
                      src="/assets/Icons/chromeye_assignment_linkedinicon_v1.svg"
                      alt="LinkedIn"
                    />
                  </a>
                )}
              </div>
            </div>
            <div className={styles.contactSection}>
              <p>Contact</p>
              <address>
                {companyData.address}<br />
                Phone: <a href={`tel:${companyData.phone}`}>{companyData.phone}</a><br />
                Email: <a href={`mailto:${companyData.email}`}>{companyData.email}</a>
              </address>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
