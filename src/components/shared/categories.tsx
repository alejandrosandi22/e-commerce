import React, { useEffect, useState } from 'react';
import LinkEffect from './linkEffect';

function Categories() {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 40) setScroll(true);
      else setScroll(false);
    });
  }, []);

  return (
    <nav
      className={`nav__categories ${scroll ? 'nav__categories__scroll' : ''}`}
    >
      <ul className='nav__categories__unordered__list'>
        <LinkEffect href='/category/kits' caption='Kits' />
        <LinkEffect href='/category/training' caption='Training' />
        <LinkEffect href='/category/lifestyle' caption='Lifestyle' />
        <LinkEffect href='/category/accessories' caption='Accessories' />
      </ul>
    </nav>
  );
}

export default React.memo(Categories);
