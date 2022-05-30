import Card from 'components/card';
import PrincipalCard from 'components/card/principalCard';
import Footer from 'components/footer';
import Header from 'components/header';
import Categories from 'components/nav/categories';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Nav from '../components/nav';
import styles from '../styles/Home.module.scss';
import { ProductType, PrincipalType } from 'types';

export default function Home({
  kits,
  training,
  lifestyle,
  accesories,
  kitsCreatedAtOrder,
  trainingCreatedAtOrder,
  lifestyleCreatedAtOrder,
  accesoriesCreatedAtOrder,
}: PrincipalType) {
  return (
    <div className={styles.home}>
      <Nav />
      <Header />
      <Categories />
      <main>
        <section className={styles.pageHeader}>
          <Image src="/assets/banner.png" layout="fill" />
        </section>
        <section className={styles.homeContent}>
          <ul className={styles.cardsWrapper}>
            <PrincipalCard data={kits} type="Kits" />
            <PrincipalCard data={training} type="Training Products" />
            <PrincipalCard data={lifestyle} type="Lifestyle Products" />
            <PrincipalCard data={accesories} type="Accesories" />
          </ul>
          <div className={styles.princialProducts}>
            <Image
              src="/assets/banner2.png"
              layout="fill"
              className={styles.princialProducts}
            />
          </div>
          <ul>
            <Card data={kitsCreatedAtOrder[0]} />
            <Card data={kitsCreatedAtOrder[1]} />
            <Card data={kitsCreatedAtOrder[2]} />
            <Card data={kitsCreatedAtOrder[3]} />
          </ul>
          <ul>
            <Card data={trainingCreatedAtOrder[0]} />
            <Card data={trainingCreatedAtOrder[1]} />
            <Card data={trainingCreatedAtOrder[2]} />
            <Card data={trainingCreatedAtOrder[3]} />
          </ul>
          <ul>
            <Card data={lifestyleCreatedAtOrder[0]} />
            <Card data={lifestyleCreatedAtOrder[1]} />
            <Card data={lifestyleCreatedAtOrder[2]} />
            <Card data={lifestyleCreatedAtOrder[3]} />
          </ul>
          <ul>
            <Card data={accesoriesCreatedAtOrder[0]} />
            <Card data={accesoriesCreatedAtOrder[1]} />
            <Card data={accesoriesCreatedAtOrder[2]} />
            <Card data={accesoriesCreatedAtOrder[3]} />
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  //kits
  const kitsResult: Response = await fetch(
    'http://localhost:4000/products/kits/sold/4'
  );
  const kitsCreatedAtOrderResult: Response = await fetch(
    'http://localhost:4000/products/kits/createdAt/4'
  );

  const kitsCreatedAtOrder = await kitsCreatedAtOrderResult.json();
  const kits = await kitsResult.json();

  //training
  const trainingCreatedAtOrderResult: Response = await fetch(
    'http://localhost:4000/products/training/createdAt/4'
  );
  const trainingResult: Response = await fetch(
    'http://localhost:4000/products/training/sold/4'
  );

  const trainingCreatedAtOrder: ProductType =
    await trainingCreatedAtOrderResult.json();
  const training: ProductType = await trainingResult.json();

  //lifestyle
  const lifestyleResult: Response = await fetch(
    'http://localhost:4000/products/lifestyle/sold/4'
  );
  const lifestyleCreatedAtOrderResult: Response = await fetch(
    'http://localhost:4000/products/lifestyle/createdAt/4'
  );

  const lifestyleCreatedAtOrder: ProductType =
    await lifestyleCreatedAtOrderResult.json();
  const lifestyle: ProductType = await lifestyleResult.json();

  //accesories
  const accesoriesResult: Response = await fetch(
    'http://localhost:4000/products/accesories/sold/4'
  );
  const accesoriesCreatedAtOrderResult: Response = await fetch(
    'http://localhost:4000/products/accesories/createdAt/4'
  );

  const accesoriesCreatedAtOrder: ProductType =
    await accesoriesCreatedAtOrderResult.json();
  const accesories: ProductType = await accesoriesResult.json();

  return {
    props: {
      kits,
      training,
      lifestyle,
      accesories,
      kitsCreatedAtOrder,
      trainingCreatedAtOrder,
      lifestyleCreatedAtOrder,
      accesoriesCreatedAtOrder,
    },
  };
};
