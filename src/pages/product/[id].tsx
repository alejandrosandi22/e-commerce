import styles from 'styles/Product.module.scss';
import Nav from 'components/nav';
import Footer from 'components/footer';
import Categories from 'components/nav/categories';
import Product from 'components/product';
import Suggestions from 'components/suggestions';
import { GetServerSideProps } from 'next';
import { SuggestionsType, ProductType } from 'types';

export default function Products({
  product,
  suggestions,
}: {
  product: ProductType;
  suggestions: SuggestionsType;
}) {
  return (
    <div className={styles.product}>
      <Nav />
      <Categories />
      <Product product={product} />
      <Suggestions suggestions={suggestions} />
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const productRes: Response = await fetch(
    `http://localhost:4000/products/${id}`
  );
  const product: ProductType = await productRes.json();

  const suggestionsRes: Response = await fetch(
    `http://localhost:4000/products/team/${product.endpoint}`
  );

  const suggestionData: SuggestionsType = await suggestionsRes.json();

  const kitsRes: Response = await fetch(
    'http://localhost:4000/products/kits/sold/4'
  );

  const trainingRes: Response = await fetch(
    'http://localhost:4000/products/training/sold/4'
  );

  const lifestyleRes: Response = await fetch(
    'http://localhost:4000/products/lifestyle/sold/4'
  );

  const accesoriesRes: Response = await fetch(
    'http://localhost:4000/products/accesories/sold/4'
  );

  const kits: ProductType = await kitsRes.json();
  const training: ProductType = await trainingRes.json();
  const lifestyle: ProductType = await lifestyleRes.json();
  const accesories: ProductType = await accesoriesRes.json();

  const suggestions = {
    related: suggestionData,
    others: { kits, training, lifestyle, accesories },
  };

  return {
    props: {
      product,
      suggestions,
    },
  };
};
