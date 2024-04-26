import React, { useState } from 'react';
import styles from './RecFilms.module.scss';
import Container from "../../UI/Container";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const sort = [
  { title: 'Комедия', year: 1994 },
  { title: 'Драма', year: 1972 },
  { title: 'Детектив', year: 1974 },
  { title: 'Ужасы', year: 2008 },
  { title: 'Боевик', year: 1957 },
  { title: "Фантастика", year: 1993 },
  { title: 'Мистика', year: 1994 },
];
 const year = [
  {title: '1999'},
  {title: '2000'},
  {title: '2001'},
  {title: '2002'},
  {title: '2003'},
  {title: '2004'},
 ]

 const country = [
  {title: 'Россия'},
  {title: 'Германия'},
  {title: 'Америка'},
  {title: 'Великобритания'},
  {title: 'Франция'},
 ]
const RecFilms = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.tittle}>Рекомендации</div>
        <div className={styles.sort}>
    <Autocomplete
      multiple
      limitTags={2}
      id="Janry"
      options={sort}
      getOptionLabel={(option) => option?.title || ''}
      renderInput={(params) => (
        <TextField {...params} label="Жанры" placeholder="Жанр" />
      )}
      sx={{
        width: '20%',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'rgb(110, 110, 110)', // Цвет обводки при фокусировке
          },
          '&:hover fieldset': {
            borderColor: 'rgb(110, 110, 110)', // Цвет обводки при фокусировке
          },
          '&.Mui-focused fieldset': {
            borderColor: 'rgb(110, 110, 110)', // Цвет обводки при фокусировке
          },
        },
        '& .MuiInputLabel-root': {
          color: 'rgb(110, 110, 110)', // Цвет метки
        },
        '& .MuiAutocomplete-tag': {
          backgroundColor: 'rgb(110, 110, 110)', // Цвет тегов выбранных элементов
        },
      }}
    />

<Autocomplete
      multiple
      limitTags={1}
      id="Year"
      options={year}
      getOptionLabel={(option) => option?.title || ''}
      renderInput={(params) => (
        <TextField {...params} label="Год" placeholder="Год" />
      )}
      sx={{
        width: '10%',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'rgb(110, 110, 110)', // Цвет обводки при фокусировке
          },
          '&:hover fieldset': {
            borderColor: 'rgb(110, 110, 110)', // Цвет обводки при фокусировке
          },
          '&.Mui-focused fieldset': {
            borderColor: 'rgb(110, 110, 110)', // Цвет обводки при фокусировке
          },
        },
        '& .MuiInputLabel-root': {
          color: 'rgb(110, 110, 110)', // Цвет метки
        },
        '& .MuiAutocomplete-tag': {
          backgroundColor: 'rgb(110, 110, 110)', // Цвет тегов выбранных элементов
        },
      }}
    />



<Autocomplete
      multiple
      limitTags={2}
      id="Janry"
      options={country}
      getOptionLabel={(option) => option?.title || ''}
      renderInput={(params) => (
        <TextField {...params} label="Страны" placeholder="Страна" />
      )}
      sx={{
        width: '13%',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'rgb(110, 110, 110)', // Цвет обводки при фокусировке
          },
          '&:hover fieldset': {
            borderColor: 'rgb(110, 110, 110)', // Цвет обводки при фокусировке
          },
          '&.Mui-focused fieldset': {
            borderColor: 'rgb(110, 110, 110)', // Цвет обводки при фокусировке
          },
        },
        '& .MuiInputLabel-root': {
          color: 'rgb(110, 110, 110)', // Цвет метки
        },
        '& .MuiAutocomplete-tag': {
          backgroundColor: 'rgb(110, 110, 110)', // Цвет тегов выбранных элементов
        },
      }}
    />
        </div>

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
