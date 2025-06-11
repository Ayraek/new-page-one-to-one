import React from 'react';
import styles from './Pricing.module.css';

const plans = [
  {
    title: 'Основной',
    duration: '1 встреча в неделю / 4 месяца',
    price: '90 000 – 100 000 ₽',
    features: [
      '18 индивидуальных сессий (по 90–120 минут)',
      'Наставник — практикующий продукт',
      'Поддержка в Telegram',
      'Финальный проект под портфолио',
      'Домашние задания с проверкой',
      'Помощь с резюме и подготовкой к собеседованиям',
    ],
    note: 'Идеально для комфортного темпа и проработки навыков.',
  },
  {
    title: 'Интенсив',
    duration: '2–3 встречи в неделю / 2.5 месяца',
    price: '130 000 – 150 000 ₽',
    features: [
      '18 индивидуальных сессий (по 90–120 минут)',
      'Наставник — практикующий продукт',
      'Интенсивная программа + сопровождение',
      'Финальный проект под портфолио',
      'Домашние задания с проверкой',
      'Полная помощь: резюме, интервью, выход на рынок',
    ],
    note: 'Максимальный результат за короткий срок. Персональный буткемп.',
  },
  {
    title: 'Senior',
    duration: 'Гибкий график / 1–2 месяца',
    price: 'от 150 000 ₽',
    features: [
      'Индивидуальные стратегические сессии',
      'Разбор личных проектов и целей',
      'Карьерный трек и сопровождение',
      'Доступ к закрытым материалам',
      'Обратная связь от CPO/Lead PM',
      'Персональная рекомендация',
    ],
    note: 'Для продвинутых PM, CPO и лидов. Максимум пользы за минимум времени.',
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="Price" className={styles.pricing}>
      <h2 className={styles.title}>Стоимость</h2>
      <div className={styles.grid}>
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`${styles.card} ${index === 1 ? styles.featuredCard : ''}`}
          >
            <h3>{plan.title}</h3>
            <p className={styles.duration}>{plan.duration}</p>
            <p className={styles.price}>{plan.price}</p>
            <ul>
              {plan.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className={styles.note}>{plan.note}</p>
            <button className={styles.button}>Выбрать</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;



