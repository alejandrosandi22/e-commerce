import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import Card from 'components/shared/cards/card';
import ActiveLink from 'components/shared/activeLink';
import Categories from 'components/shared/categories';
import Footer from 'components/shared/footer';
import styles from 'styles/Category.module.scss';
import { CollectionsType, ProductType } from 'types';

export default function Category() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<ProductType[]>({} as ProductType[]);

  const router = useRouter();
  const { category, sort, order } = router.query;

  useEffect(() => {
    if (!category) return;

    let categoryToFetch = category;

    if (category === 'men' || category === 'women' || category === 'kids')
      categoryToFetch = 'products';

    async function fetchData() {
      const res: Response = await fetch(
        `https://sp-api.alejandrosandi.com/api/${categoryToFetch}?sort=${
          sort ?? 'createdAt'
        }&order=${order ?? 'desc'}`
      );

      if (categoryToFetch === 'products') {
        const json: CollectionsType = await res.json();
        const kits = json.kits.filter((kit) => kit.category === category);
        const training = json.training.filter(
          (product) => product.category === category
        );
        const lifestyle = json.lifestyle.filter(
          (product) => product.category === category
        );
        const accessories = json.accessories.map((accessory) => accessory);

        setIsLoading(false);
        return setData([...kits, ...training, ...lifestyle, ...accessories]);
      }

      const json: ProductType[] = await res.json();

      setData(json);
      setIsLoading(false);
    }
    fetchData();
  }, [category, sort, order]);

  return (
    <div className={styles.categoryContainer}>
      <Categories />
      <section className={styles.categoryWrapper}>
        <div className={styles.categoryTitle}>
          <h1>{category}</h1>
          <div>
            <span>Sort By:</span>
            <ul>
              <ActiveLink
                href={`/category/${category}?sort=sort&order=desc`}
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
              <Card data={null} />
              <Card data={null} />
              <Card data={null} />
              <Card data={null} />
            </>
          ) : (
            data.map((product) => <Card key={product._id} data={product} />)
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
    category === 'men' ||
    category === 'women' ||
    category === 'kids' ||
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
