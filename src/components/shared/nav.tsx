import { useAppSelector } from 'hooks';
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

  const user = useAppSelector((state) => state.user);

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
            <Link href='/category/men'>
              <a>Men</a>
            </Link>
          </li>
          <li>
            <Link href='/category/women'>
              <a>Women</a>
            </Link>
          </li>
          <li>
            <Link href='/category/kids'>
              <a>Kids</a>
            </Link>
          </li>
        </ul>
        <div className={styles.userList}>
          <SearchButton />
          {!user ? (
            <li>
              <Link href='/signin'>
                <a>Sign In</a>
              </Link>
            </li>
          ) : (
            <ul>
              <li>
                <Link href={`/profile/${user.id}`}>
                  <a>
                    <i className='fal fa-user'></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href={`/cart/${user.id}`}>
                  <a>
                    <i className='fal fa-shopping-cart'></i>
                  </a>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}
