import React, { useRef, useEffect } from 'react';
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

  useEffect(() => {
    const path = document.getElementById('conceptNeonPath');
    let mouseX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth;
    };

    const animate = () => {
      if (path) {
        const curve1 = 5 + Math.sin(mouseX * Math.PI * 2) * 10;
        const curve2 = 5 - Math.sin(mouseX * Math.PI * 2) * 10;

        path.setAttribute(
          'd',
          `M0 0 Q 250 ${curve1} 500 5 Q 250 ${curve2} 0 10`
        );
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
        <svg
          className={styles.neonLine}
          viewBox="0 0 500 10"
          preserveAspectRatio="none"
        >
          <path
            id="conceptNeonPath"
            d="M0 0 Q 250 5 500 5 Q 250 5 0 10"
            fill="transparent"
            stroke="#00f0ff"
            strokeWidth="2"
          />
        </svg>
      </div>
    </section>
  );
};

export default Concept;
