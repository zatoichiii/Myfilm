import React, { useState } from 'react';
import styles from './RecFilms.module.scss';
import Container from "../../UI/Container";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const RecFilms = () => {
  const [showMenu, setShowMenu] = useState({
    genres: false,
    countries: false,
    years: false,
    new: false
  });

  const toggleMenu = (menu) => {
    setShowMenu(prevState => ({
      genres: menu === "genres" ? !prevState.genres : false,
      countries: menu === "countries" ? !prevState.countries : false,
      years: menu === "years" ? !prevState.years : false,
      new: menu === "new" ? !prevState.new : false
    }));
  };

  const MenuButton = ({ category }) => (
    <div className={styles.button} onClick={() => toggleMenu(category)}>
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </div>
  );

  const renderMenu = (category) => {
    if (showMenu[category]) {
      return (
        <div className={`${styles.menu} ${styles[category]}`}>
          {category === "genres" && (
            <div>
              <label>
                <input type="checkbox" value="экшн" /> Экшн
              </label>
              <label>
                <input type="checkbox" value="детектив" /> Детектив
              </label>
            </div>
          )}
          {category === "countries" && (
           <div>
           <label>
             <input type="checkbox" value="экшн" /> Россия
           </label>
           <label>
             <input type="checkbox" value="детектив" /> Омерика
           </label>
         </div>
          )}
          {category === "years" && (
            <div>
            <label>
              <input type="checkbox" value="экшн" /> 2007
            </label>
            <label>
              <input type="checkbox" value="детектив" /> 2010
            </label>
            {/* Добавь другие жанры */}
          </div>
          )}
          {category === "new" && (
            <div>
              {/* Список новых фильмов */}
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  

  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.tittle}>Рекомендации</div>
        <div className={styles.buttons}>
          <MenuButton category="genres" />
          <MenuButton category="countries" />
          <MenuButton category="years" />
          <MenuButton category="new" />
        </div>
        {renderMenu("genres")}
        {renderMenu("countries")}
        {renderMenu("years")}
        {renderMenu("new")}
            
            <Swiper 
      className={styles.swiper}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={4.5}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        480: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        512: {
          slidesPerView: 2.5,
          spaceBetween: 30
        },
        808: {
          slidesPerView: 3.5,
          spaceBetween: 40
        },
        1200: {
          slidesPerView: 4.5,
          spaceBetween: 40
        }
      }}
    >
            <SwiperSlide className={styles.slide}>
      <div className={styles.card} style={{backgroundImage: "url('/image 1.png')"}}>

          <div className={styles.title}>Название фильма</div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
      <div className={styles.card} style={{backgroundImage: "url('/image 1.png')"}}>

          <div className={styles.title}>Название фильма</div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
      <div className={styles.card} style={{backgroundImage: "url('/image 1.png')"}}>

          <div className={styles.title}>Название фильма</div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
      <div className={styles.card} style={{backgroundImage: "url('/image 1.png')"}}>

          <div className={styles.title}>Название фильма</div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
      <div className={styles.card} style={{backgroundImage: "url('/image 1.png')"}}>

          <div className={styles.title}>Название фильма</div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
      <div className={styles.card} style={{backgroundImage: "url('/image 1.png')"}}>

          <div className={styles.title}>Название фильма</div>
        </div>
      </SwiperSlide>
    </Swiper>
        </div>
    </Container>
  );
};

export default RecFilms;
