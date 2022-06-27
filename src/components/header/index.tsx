import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const links: string[] = [
    '/assets/juventus.png',
    '/assets/fc-barcelona.png',
    '/assets/fc-barcelona.png',
    '/assets/bayern-munich.png',
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
    <header className='header'>
      <div className='header__text__wrapper'>
        <h3 className='header__text'>Choose</h3>
        <h3 className='header__text'>Your</h3>
        <h3 className='header__text'>Favorite</h3>
      </div>
      <span className='header__images__wrapper' style={animation}>
        <Image src={src} layout='fill' alt='product' priority />
      </span>
    </header>
  );
}
