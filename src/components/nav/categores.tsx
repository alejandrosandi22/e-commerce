import React from 'react';
import Link from 'next/link';
import styles from 'styles/Categories.module.scss';

function Categories() {
  return (
    <ul className={styles.categories}>
      <li>
        <Link href="/categories/:category">
          <a>Kits</a>
        </Link>
      </li>
      <li>
        <Link href="/categories/:category">
          <a>Training</a>
        </Link>
      </li>
      <li>
        <Link href="/categories/:category">
          <a>Lifestyle</a>
        </Link>
      </li>
      <li>
        <Link href="/categories/:category">
          <a>Accessories</a>
        </Link>
      </li>
    </ul>
  );
}

export default React.memo(Categories);
