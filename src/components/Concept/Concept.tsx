import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Concept.module.css';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    image: 'https://picsum.photos/seed/mentor/800/600',
    title: 'Он созванивается с тобой',
    subtitle: 'Наставник — как коллега по Zoom',
  },
  {
    image: 'https://picsum.photos/seed/screen/800/601',
    title: 'Показывает экран',
    subtitle: 'Учитесь на практике, не в теории',
  },
  {
    image: 'https://picsum.photos/seed/explain/800/602',
    title: 'Объясняет на пальцах',
    subtitle: 'Без воды — по делу',
  },
  {
    image: 'https://picsum.photos/seed/work/800/603',
    title: 'Ты делаешь, он направляет',
    subtitle: 'Работа над реальными задачами',
  },
  {
    image: 'https://picsum.photos/seed/project/800/604',
    title: 'Реальные задачи — как на работе',
    subtitle: 'Тренируешься, как в бою',
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
          <span className={styles.highlight}>Теперь этот «кто-то» — твой личный наставник.</span>
        </p>
      </div>
      <Swiper
        className={styles.slider}
        modules={[Pagination, Keyboard]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title} className={styles.slide}>
            <div
              className={styles.card}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <img src={slide.image} alt={slide.title} className={styles.image} />
              <h3 className={styles.cardTitle}>{slide.title}</h3>
              <p className={styles.cardSubtitle}>{slide.subtitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Concept;
