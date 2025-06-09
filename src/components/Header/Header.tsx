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


