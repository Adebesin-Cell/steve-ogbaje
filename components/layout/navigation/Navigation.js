import styles from './Navigation.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = function () {
  const router = useRouter();

  const activeClass = `${styles.nav__link} ${styles['nav__link--active']}`;
  const inActiveClass = `${styles.nav__link}`;

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <Link
            href='/about'
            passHref
            legacyBehavior
            className={styles.nav__link}
            name='About Me'
          >
            <a
              className={
                router.pathname === '/about' ? activeClass : inActiveClass
              }
            >
              About
            </a>
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link
            href='/contact'
            passHref
            legacyBehavior
            className={styles.nav__link}
            name='contact me'
          >
            <a
              className={
                router.pathname === '/contact' ? activeClass : inActiveClass
              }
            >
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
