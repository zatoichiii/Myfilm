import React, { useState, useRef } from 'react';
import styles from './Banner.module.scss';
import Container from "../../UI/Container";


const Banner = () => {
  const [showMore, setShowMore] = useState(false);
  const descriptionRef = useRef(null);
  const descriptionHeight = descriptionRef.current ? descriptionRef.current.scrollHeight : 0;

  const toggleMoreDescription = () => {
    setShowMore(!showMore);
  };

  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.title}>Главная</div>
          <div
            ref={descriptionRef}
            className={styles.description}
            style={{ maxHeight: showMore ? `${descriptionHeight}px` : '75px' }}
          >
            MyFilm: Ваш ключ к мировому кинематографу
            Широкий Каталог: Откройте для себя огромный каталог фильмов и сериалов. У нас есть все — от вечных классик до актуальных премьер.
            Персональные Рекомендации: Наши умные рекомендации помогут вам найти идеальный фильм для просмотра на основе ваших предпочтений и интересов.
            Мобильность: Смотрите любимые фильмы и сериалы где угодно и когда угодно — на любом устройстве и в любом месте.
            Эксклюзивный Контент: Получите доступ к эксклюзивным фильмам и сериалам, которые вы не найдете нигде больше.
            MyFilm — это не просто платформа для просмотра фильмов, это целая вселенная кино, в которой каждый найдет что-то для себя.

          </div>
          <button className={styles.buttonMore} onClick={toggleMoreDescription}>
            {showMore ? 'Скрыть' : 'Читать далее'}
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
