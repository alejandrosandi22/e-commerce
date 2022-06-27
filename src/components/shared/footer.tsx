import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__info'>
        <div className='footer__title__wrapper'>
          <div className='footer__logo__wrapper'>
            <Image src='/logo.png' layout='fill' />
          </div>
          <h2 className='footer__title'>E-Commerce</h2>
        </div>
        <div className='footer__links__wrapper'>
          <ul className='footer__unordered__list__links'>
            <li className='footer__list__link'>Size</li>
            <li className='footer__list__link'>
              <Link href='/category/men'>
                <a className='footer__anchor'>Men</a>
              </Link>
            </li>
            <li className='footer__list__link'>
              <Link href='/category/women'>
                <a className='footer__anchor'>Women</a>
              </Link>
            </li>
            <li className='footer__list__link'>
              <Link href='/category/kids'>
                <a className='footer__anchor'>Kids</a>
              </Link>
            </li>
          </ul>
          <ul className='footer__unordered__list__links'>
            <li className='footer__list__link'>Type</li>
            <li className='footer__list__link'>
              <Link href='/category/kits'>
                <a className='footer__anchor'>Kits</a>
              </Link>
            </li>
            <li className='footer__list__link'>
              <Link href='/category/training'>
                <a className='footer__anchor'>Training</a>
              </Link>
            </li>
            <li className='footer__list__link'>
              <Link href='/category/lifestyle'>
                <a className='footer__anchor'>Lifestyle</a>
              </Link>
            </li>
            <li className='footer__list__link'>
              <Link href='/category/accessories'>
                <a className='footer__anchor'>Accessories</a>
              </Link>
            </li>
          </ul>
          <ul className='footer__unordered__list__links'>
            <li className='footer__list__link'>Support</li>
            <li className='footer__list__link'>
              <a
                href='mailto:e-commercesupport@gmail.com'
                className='footer__anchor'
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer__social__wrapper'>
        <h3 className='footer__social__title'>Our social networks</h3>
        <ul className='footer__social__unodered__list'>
          <li className='footer__social__list'>
            <a
              className='footer__social__anchor'
              href='https://www.facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-facebook'></i>
            </a>
          </li>
          <li className='footer__social__list'>
            <a
              className='footer__social__anchor'
              href='https://www.instagram.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-instagram'></i>
            </a>
          </li>
          <li className='footer__social__list'>
            <a
              className='footer__social__anchor'
              href='https://www.twitter.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-twitter'></i>
            </a>
          </li>
          <li className='footer__social__list'>
            <a
              className='footer__social__anchor'
              href='mailto:e-commercesupport@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fal fa-envelope'></i>
            </a>
          </li>
        </ul>
      </div>
      <div className='footer__payment__methods'>
        <img
          className='footer__payment__method__image'
          src='/assets/payments/visa.png'
          title='visa'
          alt='visa'
        />
        <img
          className='footer__payment__method__image'
          src='/assets/payments/paypal.png'
          title='paypal'
          alt='paypal'
        />
        <img
          className='footer__payment__method__image'
          src='/assets/payments/mastercard.png'
          title='mastercard'
          alt='mastercard'
        />
        <img
          className='footer__payment__method__image'
          src='/assets/payments/american-express.png'
          title='american express'
          alt='american express'
        />
      </div>
      <div className='footer__legal'>
        <h3 className='footer__legal__copyright'>
          © 2022. All rights reserved /
        </h3>
        <Link href='/terms'>
          <a className='footer__legal__anchor'>Terms of Use /</a>
        </Link>
        <Link href='/privacy'>
          <a className='footer__legal__anchor'>Privacy Policy</a>
        </Link>
      </div>
    </footer>
  );
}
