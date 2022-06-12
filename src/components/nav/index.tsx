import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from 'styles/Nav.module.scss';
import SearchButton from './searchButton';

export default function Nav() {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => setToggle(!toggle);
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 40) setScroll(true);
      else setScroll(false);
    });
  }, []);

  const user = {
    id: '46541dsf5d4fd148h7',
    name: 'Thomas Gould',
    cart: {},
  };

  return (
    <>
      <nav className={`${styles.nav} ${scroll ? styles.scroll : ''}`}>
        <Link href='/'>
          <a>
            <h1>E-Commerce</h1>
          </a>
        </Link>
        <div onClick={() => handleToggle()} className={styles.toggleWrapper}>
          <span className={styles.toggle}></span>
        </div>
        <ul className={styles.list}>
          <li>
            <a href='/'>Men</a>
          </li>
          <li>
            <a href='/'>Women</a>
          </li>
          <li>
            <a href='/'>Kids</a>
          </li>
        </ul>
        <ul className={styles.userList}>
          <SearchButton />
          <li>
            {!user ? (
              <Link href='/signin'>
                <a>Sign In</a>
              </Link>
            ) : (
              <>
                <Link href='/profile/:id'>
                  <a>
                    <i className='fal fa-user'></i>
                  </a>
                </Link>
                <Link href='/cart'>
                  <a>
                    <i className='fal fa-shopping-cart'></i>
                  </a>
                </Link>
              </>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}
