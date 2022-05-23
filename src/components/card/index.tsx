import Image from 'next/image';
import styles from 'styles/Card.module.scss';

interface DataType {
  _id: string;
  team: string;
  image: string;
  endpoint: string;
  locality: string;
  season: string;
  price: string;
  category: string;
  size: Array<string>;
  sold: number;
  createdAt: string;
  updatedAt: string;
}

interface PropsType {
  data: DataType;
}

export default function Card({ data }: PropsType) {
  return (
    <>
      <li className={styles.card}>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Image
              src={`http://localhost:4000${data.image}`}
              layout="fill"
              alt={data.endpoint}
            />
          </div>
        </div>
        <h1>{`${data.team} ${data.season} ${data.locality} ${
          data.category.charAt(0).toUpperCase() + data.category.slice(1)
        }`}</h1>
        <div className={styles.link}>
          <h2>{`$${data.price}`}</h2>
          <a href="/">Shop now &gt;</a>
        </div>
      </li>
    </>
  );
}
