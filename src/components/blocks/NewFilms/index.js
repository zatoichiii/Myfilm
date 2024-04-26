import React from 'react';
import styles from './NewFilms.module.scss';
import Container from "../../UI/Container";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const NewFilms = () => {
  return (
    <Container>
        <div className={styles.wrapper}>
            <div className={styles.tittle}>Новое</div>
            <Swiper 
      className={styles.swiper}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={4.5}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className={styles.slide}>
        <div className={styles.card} style={{backgroundImage: "url('../../../../public/image 1.png')"}}>
          <div className={styles.title}>Название фильма</div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
      <div className={styles.card} style={{backgroundImage: "url('../../../../public/image 1.png')"}}>
          <div className={styles.title}>Название фильма</div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
      <div className={styles.card} style={{backgroundImage: "url('../../../../public/image 1.png')"}}>
          <div className={styles.title}>Название фильма</div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
      <div className={styles.card} style={{backgroundImage: "url('../../../../public/image 1.png')"}}>
          <div className={styles.title}>Название фильма</div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
      <div className={styles.card} style={{backgroundImage: "url('../../../../public/image 1.png')"}}>
          <div className={styles.title}>Название фильма</div>
        </div>
      </SwiperSlide>
    </Swiper>
        </div>
    </Container>
  );
};

export default NewFilms;
