import React from 'react';
import styles from './Teachers.module.css';

const teachers = [
  {
    name: 'Маргарита Седова',
    subject: '«Группы учат по шаблону. Наставник учит по тебе.» Опыт работы в:Skyeng, МТС',
    photo: 'https://randomuser.me/api/portraits/women/12.jpg',
    bgColor: '#E3F2FD',
    badge: 'Senior Product manager',
  },
  {
    name: 'Владислав Гунар',
    subject: '«Не онлайн-курс, а персональный апгрейд с человеком, который уже там, куда ты идёшь.» Работал в T-Банк, ФосАгро',
    photo: 'https://randomuser.me/api/portraits/men/15.jpg',
    bgColor: '#FCE4EC',
    badge: 'CPO',
  },
  {
    name: 'Марина Соколова',
    subject: ' «Когда тебя учит практик один на один — ты не просто учишься, ты перенимаешь профессию изнутри.» Работала в Яндекс',
    photo: 'https://randomuser.me/api/portraits/women/29.jpg',
    bgColor: '#FFF9C4',
    badge: 'Senior Product manager',
  },
];

const Teachers: React.FC = () => {
  return (
    <section id="Teachers" className={styles.teachers}>
      <h2 className={styles.title}>Преподаватели</h2>
      <div className={styles.grid}>
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ backgroundColor: teacher.bgColor }}
          >
            <div className={styles.avatarWrapper}>
              <img src={teacher.photo} alt={teacher.name} className={styles.avatar} />
            </div>
            <div className={styles.info}>
              <span className={styles.badge}>{teacher.badge}</span>
              <p className={styles.subject}>{teacher.subject}</p>
              <p className={styles.name}>{teacher.name}</p>
              <button className={styles.button}>Подробнее</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teachers;

