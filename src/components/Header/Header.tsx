import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>One2One</div>
      <button className={styles.button}>Записаться</button>
    </header>
  );
};

export default Header;

