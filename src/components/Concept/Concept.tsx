import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Concept.module.css';

const slides = [
  { title: 'Он созванивается с тобой', subtitle: 'Наставник — как коллега по Zoom' },
  { title: 'Показывает экран', subtitle: 'Учитесь на практике, не в теории' },
  { title: 'Объясняет на пальцах', subtitle: 'Без воды — по делу' },
  { title: 'Ты делаешь, он направляет', subtitle: 'Работа над реальными задачами' },
  { title: 'Реальные задачи — как на работе', subtitle: 'Тренируешься, как в бою' },
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
          <span className={styles.highlight}>Теперь этот «кто-то» — твой личный наставник.</span>
        </p>
      </div>

      <div className={styles.sliderWrapper}>
        <Swiper
          className={styles.slider}
          modules={[Pagination, Keyboard]}
          slidesPerView="auto"
          spaceBetween={24}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{slide.title}</h3>
                <p className={styles.cardSubtitle}>{slide.subtitle}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Concept;
