import React from 'react';
import styles from '../styles/PageBanner.module.css'; // CSS for the component

const PageBanner = ({ title, backgroundImage }) => {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${backgroundImage})` }} // Dynamic background image
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
