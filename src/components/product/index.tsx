import styles from 'styles/Product.module.scss';
import { ProductType } from 'types';
import ImageViewer from './imageViwer';
import ViwerLoader from 'components/shared/loaders/viwerLoader';
import Details from './details';
import DetailsLoader from 'components/shared/loaders/detailsLoader';

export default function Product({ product }: { product: ProductType | null }) {
  return (
    <section className={styles.info}>
      <div className={styles.viewerContainer}>
        {product ? <ImageViewer product={product} /> : <ViwerLoader />}
      </div>
      <div className={styles.detailsContainer}>
        {product ? <Details product={product} /> : <DetailsLoader />}
      </div>
    </section>
  );
}
