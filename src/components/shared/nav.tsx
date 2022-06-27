import Link from 'next/link';
import LinkEffect from './linkEffect';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setProfile } from 'store/profileReducer';
import { useEffect, useState } from 'react';
import SearchButton from './searchButton';

export default function Nav() {
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
            <LinkEffect href={`/cart/${user.id}`} icon='fal fa-shopping-cart' />
          </ul>
        )}
      </div>
    </nav>
  );
}
