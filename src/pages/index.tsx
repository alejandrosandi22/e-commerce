import Card from 'components/card';
import Footer from 'components/footer';
import Header from 'components/header';
import Categories from 'components/nav/categores';
import Nav from '../components/nav';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <Nav />
      <Header />
      <Categories />
      <main>
        <section className={styles.pageHeader}></section>
        <section className={styles.homeContent}>
          <ul className={styles.cardsWrapper}>
            <Card />
            <Card />
            <Card />
            <Card />
          </ul>
          <div className={styles.princialProducts}></div>
          <ul>
            <Card />
            <Card />
            <Card />
            <Card />
          </ul>
          <ul>
            <Card />
            <Card />
            <Card />
            <Card />
          </ul>
          <ul>
            <Card />
            <Card />
            <Card />
            <Card />
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
