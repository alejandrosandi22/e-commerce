import QuadCard from 'components/shared/cards/quadCard';
import Card from 'components/shared/cards/card';
import Footer from 'components/shared/footer';
import Header from 'components/header';
import Categories from 'components/shared/categories';
import Image from 'next/image';
import Nav from 'components/shared/nav';
import styles from 'styles/Home.module.scss';
import { CollectionsType } from 'types';
import useFetch from 'hooks/useFetch';

export function QuadCards() {
  const { data, loading } = useFetch<CollectionsType>(
    'https://sp-api.alejandrosandi.com/api/products?sort=sold&limit=4&order=desc'
  );

  return (
    <>
      <QuadCard data={data.kits} loading={loading} type='Kits' />
      <QuadCard
        data={data.training}
        loading={loading}
        type='Training Products'
      />
      <QuadCard
        data={data.lifestyle}
        loading={loading}
        type='Lifestyle Products'
      />
      <QuadCard data={data.accessories} loading={loading} type='Accessories' />
    </>
  );
}

export default function Home() {
  const { data, loading } = useFetch<CollectionsType>(
    'https://sp-api.alejandrosandi.com/api/products?sort=createdAt&limit=4&order=desc'
  );

  return (
    <div className={styles.home}>
      <Nav />
      <Header />
      <Categories />
      <main>
        <section className={styles.pageHeader}>
          <Image src='/assets/banner.png' layout='fill' />
        </section>
        <section className={styles.homeContent}>
          <ul className={styles.cardsWrapper}>
            <QuadCards />
          </ul>
          <div className={styles.princialProducts}>
            <Image
              src='/assets/banner2.png'
              layout='fill'
              className={styles.princialProducts}
            />
          </div>
          <ul>
            <Card data={loading ? null : data.kits[0]} loading={loading} />
            <Card data={loading ? null : data.kits[1]} loading={loading} />
            <Card data={loading ? null : data.kits[2]} loading={loading} />
            <Card data={loading ? null : data.kits[3]} loading={loading} />
          </ul>
          <ul>
            <Card data={loading ? null : data.training[0]} loading={loading} />
            <Card data={loading ? null : data.training[1]} loading={loading} />
            <Card data={loading ? null : data.training[2]} loading={loading} />
            <Card data={loading ? null : data.training[3]} loading={loading} />
          </ul>
          <ul>
            <Card data={loading ? null : data.lifestyle[0]} loading={loading} />
            <Card data={loading ? null : data.lifestyle[1]} loading={loading} />
            <Card data={loading ? null : data.lifestyle[2]} loading={loading} />
            <Card data={loading ? null : data.lifestyle[3]} loading={loading} />
          </ul>
          <ul>
            <Card
              data={loading ? null : data.accessories[0]}
              loading={loading}
            />
            <Card
              data={loading ? null : data.accessories[1]}
              loading={loading}
            />
            <Card
              data={loading ? null : data.accessories[2]}
              loading={loading}
            />
            <Card
              data={loading ? null : data.accessories[3]}
              loading={loading}
            />
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
