import Link from 'next/link';
import LinkEffect from './linkEffect';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setProfile } from 'store/profileReducer';
import React, { useContext, useEffect, useState } from 'react';
import SearchButton from './searchButton';
import { CartLengthContext } from 'context/cartLength';

function Nav() {
  const { length } = useContext(CartLengthContext);
  const [scroll, setScroll] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleOpen = () => {
    dispatch(setProfile(true));
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 40) setScroll(true);
      else setScroll(false);
    });
  }, []);

  const user = useAppSelector((state) => state.user);

  return (
    <nav className={`nav ${scroll ? 'nav__scroll' : ''}`}>
      <Link href='/'>
        <a>
          <h1 className='nav__logo'>E-Commerce</h1>
        </a>
      </Link>
      <ul className='nav__unordered__list__head'>
        <LinkEffect href='/category/men' caption='Men' />
        <LinkEffect href='/category/women' caption='Women' />
        <LinkEffect href='/category/kids' caption='Kids' />
      </ul>
      <div className='nav__unordered__list__user__wrapper'>
        <SearchButton />
        {!user ? (
          <LinkEffect href='/signin' caption='Sign In' />
        ) : (
          <ul className='nav__unordered__list__user'>
            <li style={{ cursor: 'pointer' }}>
              <i onClick={handleOpen} className='fal fa-user'></i>
            </li>
            <li className='link__effect__list order__cart__wrapper'>
              <Link href={`/cart/${user.id}`}>
                <a className='link__effect__anchor'>
                  <p className='orders__in__cart'>{length}</p>
                  <i className='fal fa-shopping-cart'></i>
                </a>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default React.memo(Nav);
