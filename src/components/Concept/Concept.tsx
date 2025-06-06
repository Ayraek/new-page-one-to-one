import { useEffect, useRef } from "react";
import styles from "./Concept.module.css";

// Иконки (предварительно сохранить SVG-файлы)
import videoCallIcon from "../../assets/icons/video-call.svg";
import screenShareIcon from "../../assets/icons/screen-share.svg";
import brainIcon from "../../assets/icons/brain.svg";

const Concept = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.card}`);
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className={styles.concept} ref={sectionRef}>
      <h2 className={styles.title}>Обучение, которое работает</h2>

      <p className={styles.description}>
        Ты пользуешься приложениями каждый день.<br />
        Кто-то придумал, как они устроены.<br />
        <span className={styles.highlight}>Теперь этот «кто-то» — твой личный наставник.</span>
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <img src={videoCallIcon} alt="Созвон" className={styles.icon} />
          <p className={styles.cardText}>Он созванивается с тобой</p>
        </div>
        <div className={styles.card}>
          <img src={screenShareIcon} alt="Демонстрация экрана" className={styles.icon} />
          <p className={styles.cardText}>Показывает экран</p>
        </div>
        <div className={styles.card}>
          <img src={brainIcon} alt="Объяснение" className={styles.icon} />
          <p className={styles.cardText}>Объясняет на пальцах — как коллеге</p>
        </div>
      </div>

      <div className={styles.noteBlock}>
        <p className={styles.accentLine}>Это не классический массовый курс!</p>
        <p className={styles.note}>
          Это личная передача знаний и опыта от продактов из Яндекса, Авито, ВКонтакте.<br />
          Так учатся те, кто действительно хочет войти в профессию.
        </p>
      </div>
    </section>
  );
};

export default Concept;


