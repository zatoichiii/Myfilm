import React, { useState } from 'react';
import styles from './Header.module.scss';
import Container from "../../UI/Container";
import MobileMenu from '../../UI/MobileMenu';

const items = [
  {value: "Главная", href: '/'},
  {value: "Каталог", href: '/'},
  {value: "Кино", href: '/'},
  {value: "Сериалы", href: '/'},
  {value: "Статьи", href: '/'},
];
const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.info}>
            <div className={styles.logo}>MYFILM</div>
            <div className={styles.headerItems}>
              {items.map((item, index) => (
                <div className={styles.items} key={index}>
                  <a href={item.href}>
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.headerButtons}>
            <div className={styles.search}>Поиск</div>
            <div className={styles.sub}>Подписка за 1Р</div>
            <div className={styles.account}>Войти</div>
            <MobileMenu active={menuActive} setActive={setMenuActive} items={items} />
          <div className={styles.mobileMenu}>
            <div className={styles.burgerButton} onClick={() => setMenuActive(!menuActive)}>
              <span></span>
            </div>
          </div>
          </div>

        </div>
      </div>
    </Container>
  );
};


export default Header;
