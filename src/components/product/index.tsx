import styles from 'styles/Product.module.scss';
import { ProductType } from 'types';
import ImageViewer from 'components/imageViwer';
import ViwerLoader from 'components/loader/viwerLoader';
import Details from 'components/details';

export default function Product({ product }: { product: ProductType | null }) {
  return (
    <>
      <section className={styles.info}>
        {product ? <ImageViewer product={product} /> : <ViwerLoader />}
        {product ? <Details product={product} /> : <ViwerLoader />}
      </section>
      <section className={styles.stats}></section>
    </>
  );
}
