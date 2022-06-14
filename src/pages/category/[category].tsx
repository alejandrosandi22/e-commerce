import Card from 'components/shared/cards/card';
import Categories from 'components/shared/categories';
import Nav from 'components/shared/nav';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ProductType } from 'types';
import styles from 'styles/Category.module.scss';
import Footer from 'components/shared/footer';
import ActiveLink from 'components/shared/activeLink';

export default function Category() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<ProductType[]>({} as ProductType[]);

  const router = useRouter();
  const { category, sort, order } = router.query;

  useEffect(() => {
    if (!category) return;
    async function fetchData() {
      const res: Response = await fetch(
        `https://sp-api.alejandrosandi.com/api/${category}?sort=${
          sort ?? 'createdAt'
        }&order=${order ?? 'desc'}`
      );
      const json: ProductType[] = await res.json();
      setData(json);
      setIsLoading(false);
    }
    fetchData();
  }, [category, sort, order]);

  return (
    <div className={styles.categoryContainer}>
      <Nav />
      <Categories />
      <section className={styles.categoryWrapper}>
        <div className={styles.categoryTitle}>
          <h1>{category}</h1>
          <div>
            <span>Sort By:</span>
            <ul>
              <ActiveLink
                href={`/category/${category}?sort=sold&order=desc`}
                className={styles.active}
              >
                Relevance
              </ActiveLink>
              <ActiveLink
                href={`/category/${category}?sort=price&order=desc`}
                className={styles.active}
              >
                Higher Price
              </ActiveLink>
              <ActiveLink
                href={`/category/${category}?sort=price&order=asc`}
                className={styles.active}
              >
                Lower Price
              </ActiveLink>
            </ul>
          </div>
        </div>

        <ul className={styles.categoryCardsWrapper}>
          {isLoading ? (
            <>
              <Card loading={true} data={{} as ProductType} />
              <Card loading={true} data={{} as ProductType} />
              <Card loading={true} data={{} as ProductType} />
              <Card loading={true} data={{} as ProductType} />
            </>
          ) : (
            data.map((product) => (
              <Card key={product._id} data={product} loading={isLoading} />
            ))
          )}
        </ul>
      </section>
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = context.query;

  if (
    category === 'kits' ||
    category === 'training' ||
    category === 'lifestyle' ||
    category === 'accessories'
  ) {
    return {
      props: {},
    };
  }
  return {
    redirect: {
      destination: '/404',
    },
    props: {},
  };
};
