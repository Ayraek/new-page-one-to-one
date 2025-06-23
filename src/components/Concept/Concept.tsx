import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Concept.module.css';
import sozvonImg from '../../assets/images/concept/sozvon.jpg';
import shareImg from '../../assets/images/concept/Share.jpg'; // ← новая картинка
import prostoImg from '../../assets/images/concept/prosto.jpg';
import fingersImg from '../../assets/images/concept/fingers.jpg';
import lightImg from '../../assets/images/concept/light.jpg';

const slides = [
  {
    image: sozvonImg,
    title: 'Он созванивается с тобой',
    subtitle: 'Наставник — как коллега по Zoom',
  },
  {
    image: shareImg,
    title: 'Он делится опытом',
    subtitle: 'Показывает, как решает задачи сам',
    size: 'half',
  },
  {
    image: prostoImg,
    title: 'Показывает экран',
    subtitle: 'Учитесь на практике, не в теории',
    size: 'half',
  },
  {
    image: fingersImg,
    title: 'Объясняет на пальцах',
    subtitle: 'Без воды — по делу',
    size: 'full',
  },
  {
    image: lightImg,
    title: 'Ты делаешь, он направляет',
    subtitle: 'Работа над реальными задачами',
    size: 'seventy',
  },
  {
    title: 'Реальные задачи — как на работе',
    subtitle: 'Тренируешься, как в бою',
    size: 'full',
  },
];

const Concept: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={styles.concept}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>Обучение, которое работает</h2>
        <p className={styles.description}>
          Ты пользуешься приложениями каждый день. Кто-то придумал, как они устроены.
          <br />
          <span className={styles.highlight}>
            Теперь этот «кто-то» — твой личный наставник.
          </span>
        </p>
      </div>
      <Swiper
        className={styles.slider}
        slidesPerView={'auto'}
        spaceBetween={0}
        pagination={{ clickable: true }}
        keyboard
        modules={[Pagination, Keyboard]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          768: {
            slidesPerView: 'auto',
            spaceBetween: 0,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div
              className={`${styles.card} 
                ${'image' in slide ? styles.cardImageOnly : ''} 
                ${slide.size === 'half' ? styles.cardHalf : ''} 
                ${slide.size === 'full' ? styles.cardFull : ''} 
                ${slide.size === 'seventy' ? styles.cardSeventy : ''}`}
            >
              {'image' in slide ? (
                <>
                  <img src={slide.image} alt="Concept visual" className={styles.cardImage} />
                  <div className={styles.overlay}>
                    <h3 className={styles.overlayTitle}>{slide.title}</h3>
                    <p className={styles.overlaySubtitle}>{slide.subtitle}</p>
                  </div>
                </>
              ) : (
                <>
                  <h3 className={styles.cardTitle}>{slide.title}</h3>
                  <p className={styles.cardSubtitle}>{slide.subtitle}</p>
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Concept;








