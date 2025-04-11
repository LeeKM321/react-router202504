import React from 'react';
import styles from './MainNav.module.scss';
import { Link, NavLink } from 'react-router-dom';

const MainNav = () => {
  const activateLink = ({ isActive }) =>
    `${styles.navLink} ${isActive ? styles.active : ''}`;

  /*
  NavLink는 클래스 작성란에 콜백 함수를 선언할 수 있음.
  콜백 함수의 매개값으로 객체가 전달, 그 객체에 NavLink의 기능을 제어할 수 있는 프로퍼티 존재.
  isActive: 현재 페이지인지를 확인할 수 있게 하는 값.
  */

  return (
    <nav className={styles.nav}>
      <NavLink className={activateLink} to='/'>
        Home
      </NavLink>
      <NavLink className={activateLink} to='/blog'>
        Blog
      </NavLink>
      <NavLink className={activateLink} to='/about'>
        About
      </NavLink>
    </nav>
  );
};

export default MainNav;
