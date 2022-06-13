import styles from 'styles/Product.module.scss';
import Nav from 'components/shared/nav';
import Footer from 'components/shared/footer';
import Categories from 'components/shared/categories';
import Product from 'components/product';
import Suggestions from 'components/suggestions';
import { ProductType } from 'types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ClientsOpinion from 'components/clientsOpinion';

export default function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ProductType>({} as ProductType);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    async function fetchData() {
      const res: Response = await fetch(
        `https://sp-api.alejandrosandi.com/api/products/${id}`
      );
      const json: ProductType = await res.json();
      setData(json);
      setIsLoading(false);
    }
    fetchData();
  }, [id]);

  return (
    <div className={styles.product}>
      <Nav />
      <Categories />
      <Product product={isLoading ? null : data} />
      <ClientsOpinion />
      <Suggestions endpoint={isLoading ? null : data.endpoint} />
      <Footer />
    </div>
  );
}
