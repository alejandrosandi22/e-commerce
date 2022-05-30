import Image from 'next/image';
import Link from 'next/link';
import styles from 'styles/Card.module.scss';
import { ProductType } from 'types';

export default function Card({ data }: { data: ProductType }) {
  if (!data) return <h1>Loading</h1>;

  return (
    <>
      <li className={styles.card}>
        <div className={styles.wrapper}>
          <Link href={`/product/${data._id}`}>
            <a className={styles.image}>
              <Image
                src={`http://localhost:4000${data.image}`}
                layout="fill"
                alt={data.endpoint}
              />
            </a>
          </Link>
        </div>
        <Link href={`/product/${data._id}`}>
          <a>
            <h1>{`${data.team} ${data.season ?? ''} ${
              data.locality ?? data.type
            } ${
              data.category
                ? data.category.charAt(0).toUpperCase() + data.category.slice(1)
                : ''
            }`}</h1>
          </a>
        </Link>
        <div className={styles.link}>
          <h2>{`$${data.price}`}</h2>
          <Link href={`/product/${data._id}`}>
            <a>Shop now &gt;</a>
          </Link>
        </div>
      </li>
    </>
  );
}
