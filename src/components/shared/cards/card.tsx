import CardLoader from 'components/shared/loaders/cardLoader';
import Image from 'next/image';
import Link from 'next/link';
import styles from 'styles/Card.module.scss';
import { ProductType } from 'types';

function priceFormatter(price: number) {
  const splitPrice = price.toString().split('.');
  return `$${splitPrice[0]},${splitPrice[1]}`;
}

export default function Card({ data }: { data: ProductType | null }) {
  return (
    <>
      {!data ? (
        <li className={styles.cardLoader}>
          <CardLoader />
        </li>
      ) : (
        <li className={styles.card}>
          <div className={styles.wrapper}>
            <Link href={`/product/${data._id}`}>
              <a className={styles.imageWrapper}>
                <Image src={data.images[0]} layout='fill' alt={data.endpoint} />
              </a>
            </Link>
          </div>
          <Link href={`/product/${data._id}`}>
            <a>
              <h1>{`${data.team} ${data.season ?? ''} ${data.type} ${
                data.category ?? ''
              }`}</h1>
            </a>
          </Link>
          <div className={styles.link}>
            <h2>{`${priceFormatter(data.price)}`}</h2>
            <Link href={`/product/${data._id}`}>
              <a>Shop now &gt;</a>
            </Link>
          </div>
        </li>
      )}
    </>
  );
}
