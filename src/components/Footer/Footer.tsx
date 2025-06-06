import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.column}>
          <div className={styles.logo}>One2One Academy</div>
          <p className={styles.copy}>© {new Date().getFullYear()} Все права защищены</p>
        </div>

        <div className={styles.column}>
          <p>Email: <a href="mailto:hello@one2oneacademy.ru">hello@one2oneacademy.ru</a></p>
          <p>Telegram: <a href="https://t.me/one2one_academy" target="_blank" rel="noreferrer">@one2one_academy</a></p>
        </div>

        <div className={styles.column}>
          <div className={styles.links}>
            <a href="/docs/oferta.pdf" target="_blank" rel="noreferrer">Оферта</a>
            <a href="/docs/policy.pdf" target="_blank" rel="noreferrer">Политика</a>
            <a href="https://t.me/one2one_academy" target="_blank" rel="noreferrer">Telegram</a>
            <a href="https://vk.com/one2oneacademy" target="_blank" rel="noreferrer">VK</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;


