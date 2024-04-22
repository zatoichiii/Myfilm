import React from 'react';
import styles from "./MobileMenu.module.scss"

const MobileMenu = ({items, active, setActive}) => {
    return (
        <div className={`${styles.menu} ${active ? styles.active : ''}`}>
            <div className={styles.menuContent}>
                <ul>
                    {items.map((item, index) =>
                    <li key={index}>
                        <a href={item.href}>{item.value}</a>
                    </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;
