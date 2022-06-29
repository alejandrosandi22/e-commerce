import Categories from 'components/shared/categories';
import Footer from 'components/shared/footer';
import Nav from 'components/shared/nav';
import Link from 'next/link';

export default function FourOhFour() {
  return (
    <div className='not__fonud__container'>
      <Nav />
      <Categories />
      <div className='not__fonud__wrapper'>
        <h1 className='not__found__title'>404</h1>
        <p className='not__found__text'>
          The page you are looking for does not exist.
          <br />
          <Link href='/'>
            <a className='not__found__link'>Go back to the homepage</a>
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}
