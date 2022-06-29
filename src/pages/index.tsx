import QuadCard from 'components/shared/cards/quadCard';
import Card from 'components/shared/cards/card';
import Footer from 'components/shared/footer';
import Header from 'components/header';
import Categories from 'components/shared/categories';
import Image from 'next/image';
import useFetch from 'hooks/useFetch';
import { CollectionsType } from 'types';

export function QuadCards() {
  const { data, loading } = useFetch<CollectionsType>(
    'https://sp-api.alejandrosandi.com/api/products?sort=sold&limit=4&order=desc'
  );

  return (
    <>
      <QuadCard data={loading ? null : data.kits} type='Kits' />
      <QuadCard
        data={loading ? null : data.training}
        type='Training Products'
      />
      <QuadCard
        data={loading ? null : data.lifestyle}
        type='Lifestyle Products'
      />
      <QuadCard data={loading ? null : data.accessories} type='Accessories' />
    </>
  );
}

export default function Home() {
  const { data, loading } = useFetch<CollectionsType>(
    'https://sp-api.alejandrosandi.com/api/products?sort=createdAt&limit=4&order=desc'
  );

  return (
    <div className='home'>
      <Header />
      <Categories />
      <main className='home__main'>
        <section className='home__header__page'>
          <Image src='/assets/banner.png' layout='fill' />
        </section>
        <section className='home__content'>
          <ul className='home__cards__wrapper'>
            <QuadCards />
          </ul>
          <div className='home__main__products'>
            <Image
              src='/assets/banner2.png'
              layout='fill'
              className='home__main__products'
            />
          </div>
          <ul className='home__cards__wrapper'>
            <Card data={loading ? null : data.kits[0]} />
            <Card data={loading ? null : data.kits[1]} />
            <Card data={loading ? null : data.kits[2]} />
            <Card data={loading ? null : data.kits[3]} />
          </ul>
          <ul className='home__cards__wrapper'>
            <Card data={loading ? null : data.training[0]} />
            <Card data={loading ? null : data.training[1]} />
            <Card data={loading ? null : data.training[2]} />
            <Card data={loading ? null : data.training[3]} />
          </ul>
          <ul className='home__cards__wrapper'>
            <Card data={loading ? null : data.lifestyle[0]} />
            <Card data={loading ? null : data.lifestyle[1]} />
            <Card data={loading ? null : data.lifestyle[2]} />
            <Card data={loading ? null : data.lifestyle[3]} />
          </ul>
          <ul className='home__cards__wrapper'>
            <Card data={loading ? null : data.accessories[0]} />
            <Card data={loading ? null : data.accessories[1]} />
            <Card data={loading ? null : data.accessories[2]} />
            <Card data={loading ? null : data.accessories[3]} />
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
