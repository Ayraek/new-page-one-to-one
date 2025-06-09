import React from 'react';
import styles from './ConsultationForm.module.css';

interface ConsultationFormProps {
  onClose: () => void;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.formWrapper}>
        <button className={styles.close} onClick={onClose} aria-label="Закрыть">
          &times;
        </button>
        <h2 className={styles.title}>Запись на бесплатную консультацию</h2>
        <p className={styles.subTitle}>Мы ответим в Telegram в течение 10 минут</p>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input type="text" className={styles.input} placeholder="Имя" />
          <input type="text" className={styles.input} placeholder="Ссылка на Telegram" />
          <button type="submit" className={styles.submit}>Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
