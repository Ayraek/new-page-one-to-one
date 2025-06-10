import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
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
    image: 'https://source.unsplash.com/random/800x600?mentor',
    title: 'Он созванивается с тобой',
    subtitle: 'Наставник — как коллега по Zoom',
  },
  {
    image: 'https://source.unsplash.com/random/800x601?screen',
    title: 'Показывает экран',
    subtitle: 'Учитесь на практике, не в теории',
  },
  {
    image: 'https://source.unsplash.com/random/800x602?explain',
    title: 'Объясняет на пальцах',
    subtitle: 'Без воды — по делу',
  },
  {
    image: 'https://source.unsplash.com/random/800x603?work',
    title: 'Ты делаешь, он направляет',
    subtitle: 'Работа над реальными задачами',
  },
  {
    image: 'https://source.unsplash.com/random/800x604?project',
    title: 'Реальные задачи — как на работе',
    subtitle: 'Тренируешься, как в бою',
  },
];

const Concept: FC = () => {
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
        modules={[Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title} className={styles.slide}>
            <div className={styles.card}>
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
