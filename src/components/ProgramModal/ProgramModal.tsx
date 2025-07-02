import React from 'react';
import styles from './ProgramModal.module.css';

interface ProgramModalProps {
  onClose: () => void;
}

const program = [
  {
    title: 'Профессия Продакт-менеджер',
    items: ['Роль продакт-менеджера, его обязанности и функционал.'],
  },
  {
    title: 'Исследование',
    items: [
      'Качественные и количественные исследования. Оценка емкости рынка. Конкурентный анализ.',
      'Customer development.',
      'Прототипирование. CJM. Юзабилити тестирование.',
    ],
  },
  {
    title: 'Продукт и MVP',
    items: [
      'Стадии жизненного цикла продукта. Создание MVP.',
      'Управление гипотезами. Бизнес-модель Остервальдера-Пинье. Юнит-экономика.',
    ],
  },
  {
    title: 'Маркетинг IT-продуктов',
    items: ['Позиционирование. Каналы привлечения. Ценностное предложение.'],
  },
  {
    title: 'Управление командой разработки',
    items: [
      'Состав команды. Роли участников команды. Agile-философия.',
      'Scrum: концепция, ритуалы. Планирование и оценка задач',
      'Наполнение и приоритезация бэклога. Флоу разработки. Описание задач и требований.',
    ],
  },
  {
    title: 'Продуктовая аналитика',
    items: [
      'Метрики продукта. Маркетинговые метрики.',
      'Древо метрик, NSM. Событийные метрики. Системы аналитики.',
    ],
  },
  {
    title: 'ИИ для продакта',
    items: [
      'Промт-инжиниринг: структура, ошибки, мини-практика на примерах анализа отзывов и генерации идей.',
      'Инструменты ИИ в работе продакта: генерация текстов, анализ данных, визуализация, AI-помощники. Практика на учебном проекте.',
    ],
  },
  {
    title: 'Стратегия продукта',
    items: ['Ресурсное планирование. Road map. USM.'],
  },
  {
    title: 'Коммуникация со стейкхолдерами',
    items: ['Управление ожиданиями. Правила экологичной обратной связи. Решение конфликтов.'],
  },
  {
    title: 'Поиск работы',
    items: ['Составление резюме. План поиска работы. Решение кейсов.'],
  },
  {
    title: 'Аттестация/Дипломный проект',
    items: [],
  },
];

const ProgramModal: React.FC<ProgramModalProps> = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose} aria-label="Закрыть">
          &times;
        </button>
        <h2 className={styles.title}>Программа курса</h2>
        <ol className={styles.list}>
          {program.map((module, idx) => (
            <li key={idx} className={styles.module}>
              <h3 className={styles.moduleTitle}>{module.title}</h3>
              {module.items.length > 0 && (
                <ol className={styles.subList}>
                  {module.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ProgramModal;
