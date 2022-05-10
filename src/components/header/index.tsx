import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import styles from 'styles/Header.module.scss';

export default function Header() {
  const links: string[] = [
    '/assets/manchester-city.png',
    '/assets/fc-barcelona.png',
    '/assets/liverpool.png',
    '/assets/ajax.png',
    '/assets/inter.png',
  ];

  const [src, setSrc] = useState<string>(links[0]);
  const [animation, setAnimation] = useState<{ opacity: string }>({
    opacity: '1',
  });
  const index = useRef<number>(1);

  useEffect(() => {
    const changeImageInterval = setInterval(() => {
      setAnimation({ opacity: '0' });
      setTimeout(() => {
        setAnimation({ opacity: '1' });
        setSrc(links[index.current]);
        index.current++;
        if (index.current >= links.length) index.current = 0;
      }, 520);
    }, 5000);

    return () => clearInterval(changeImageInterval);
  }, []);

  return (
    <header className={styles.header}>
      <div>
        <h3>Choose</h3>
        <h3>Your</h3>
        <h3>Favorite</h3>
      </div>
      <span style={animation}>
        <Image src={src} layout="fill" alt="product" />
      </span>
    </header>
  );
}
