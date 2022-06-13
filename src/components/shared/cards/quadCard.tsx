import styles from 'styles/QuadCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { ProductType } from 'types';
import QuadCardLoader from 'components/shared/loaders/quadCardLoader';

export default function QuadCard({
  data,
  loading,
  type,
}: {
  data: ProductType[];
  loading: boolean;
  type: string;
}) {
  return (
    <>
      <li className={styles.card}>
        {loading ? (
          <QuadCardLoader />
        ) : (
          <>
            <h1>{type}</h1>
            <div className={styles.wrapper}>
              <Link href={`/product/${data[0]._id}`}>
                <a className={styles.imageWrapper}>
                  <Image
                    src={data[0].images[0]}
                    layout='fill'
                    alt={data[0].endpoint}
                  />
                </a>
              </Link>
              <Link href={`/product/${data[1]._id}`}>
                <a className={styles.imageWrapper}>
                  <Image
                    src={data[1].images[0]}
                    layout='fill'
                    alt={data[1].endpoint}
                  />
                </a>
              </Link>
              <Link href={`/product/${data[2]._id}`}>
                <a className={styles.imageWrapper}>
                  <Image
                    src={data[2].images[0]}
                    layout='fill'
                    alt={data[2].endpoint}
                  />
                </a>
              </Link>
              <Link href={`/product/${data[3]._id}`}>
                <a className={styles.imageWrapper}>
                  <Image
                    src={data[3].images[0]}
                    layout='fill'
                    alt={data[3].endpoint}
                  />
                </a>
              </Link>
            </div>
            <div className={styles.link}>
              <a href='/'>Shop now &gt;</a>
            </div>
          </>
        )}
      </li>
    </>
  );
}
