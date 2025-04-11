import React from 'react';
import styles from './MainNav.module.scss';
import { Link } from 'react-router-dom';

const MainNav = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.navLink} to='/'>
        Home
      </Link>
      <Link className={styles.navLink} to='/blog'>
        Blog
      </Link>
      <Link className={styles.navLink} to='/about'>
        About
      </Link>
    </nav>
  );
};

export default MainNav;
