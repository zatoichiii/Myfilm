import React  from 'react';
import styles from './Banner.module.scss';
import Container from "../../UI/Container";


const Banner = () => {

  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
            <div className={styles.tittle}>Главная</div>
        </div>
      </div>
    </Container>
  );
};


export default Banner;
