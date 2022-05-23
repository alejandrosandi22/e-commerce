import Card from 'components/card';
import PrincipalCard from 'components/card/principalCard';
import Footer from 'components/footer';
import Header from 'components/header';
import Categories from 'components/nav/categores';
import { GetServerSideProps } from 'next';
import Nav from '../components/nav';
import styles from '../styles/Home.module.scss';

interface DataType {
  _id: string;
  team: string;
  image: string;
  endpoint: string;
  locality: string;
  season: string;
  price: string;
  category: string;
  size: string[];
  sold: number;
  createdAt: string;
  updatedAt: string;
}

interface Data {
  kits: DataType[];
  createdAtOrder: DataType[];
}

export default function Home({ kits, createdAtOrder }: Data) {
  return (
    <div className={styles.home}>
      <Nav />
      <Header />
      <Categories />
      <main>
        <section className={styles.pageHeader}></section>
        <section className={styles.homeContent}>
          <ul className={styles.cardsWrapper}>
            <PrincipalCard data={kits} />
            <PrincipalCard data={kits} />
            <PrincipalCard data={kits} />
            <PrincipalCard data={kits} />
          </ul>
          <div className={styles.princialProducts}></div>
          <ul>
            <Card data={createdAtOrder[0]} />
            <Card data={createdAtOrder[1]} />
            <Card data={createdAtOrder[2]} />
            <Card data={createdAtOrder[3]} />
          </ul>
          <ul>
            <Card data={createdAtOrder[0]} />
            <Card data={createdAtOrder[1]} />
            <Card data={createdAtOrder[2]} />
            <Card data={createdAtOrder[3]} />
          </ul>
          <ul>
            <Card data={createdAtOrder[0]} />
            <Card data={createdAtOrder[1]} />
            <Card data={createdAtOrder[2]} />
            <Card data={createdAtOrder[3]} />
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const kitsResult = await fetch('http://localhost:4000/products/kits/sold/4');
  const createdAtOrderResult = await fetch(
    'http://localhost:4000/products/kits/createdAt/4'
  );

  const createdAtOrder = await createdAtOrderResult.json();
  const kits = await kitsResult.json();

  return {
    props: { kits, createdAtOrder },
  };
};
