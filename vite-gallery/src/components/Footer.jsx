import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.credit}>
          Developed with ❤️ by <span className={styles.name}>Prashant Shrivastava</span>
        </p>
        <div className={styles.links}>
          <a href="https://github.com/prashant-018?tab=repositories" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/prashant-shrivastavaprashant-webdev/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:prashantshrivatava651@email.com">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
