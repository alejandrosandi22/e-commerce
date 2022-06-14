import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from 'styles/Categories.module.scss';

function Categories() {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 40) setScroll(true);
      else setScroll(false);
    });
  }, []);

  return (
    <ul className={`${styles.categories} ${scroll ? styles.scroll : ''}`}>
      <li>
        <Link href='/category/kits'>
          <a>Kits</a>
        </Link>
      </li>
      <li>
        <Link href='/category/training'>
          <a>Training</a>
        </Link>
      </li>
      <li>
        <Link href='/category/lifestyle'>
          <a>Lifestyle</a>
        </Link>
      </li>
      <li>
        <Link href='/category/accessories'>
          <a>Accessories</a>
        </Link>
      </li>
    </ul>
  );
}

export default React.memo(Categories);
