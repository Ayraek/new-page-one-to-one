import React, { useState } from 'react';
import styles from './Header.module.css';
import ConsultationForm from '../ConsultationForm/ConsultationForm';

const Header: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <header className={styles.header}>
      {showForm && (
        <ConsultationForm onClose={() => setShowForm(false)} />
      )}
      <div className={styles.logo}>One to One</div>
      <nav className={styles.nav}>
        <a href="#AboutProgram" className={styles.link}>Программа</a>
        <a href="#Price" className={styles.link}>Тарифы</a>
        <a href="#Teachers" className={styles.link}>Преподаватели</a>
      </nav>
      <button
        className={styles.button}
        onClick={() => setShowForm(true)}
      >
        Записаться
      </button>
    </header>
  );
};

export default Header;


