import Image from 'next/image';
import Link from 'next/link';
import styles from 'styles/PrincipalCard.module.scss';

interface DataType {
  _id: string;
  team: string;
  image: string;
  endpoint: string;
  price: string;
  category: string;
  sold: number;
}

interface PropsType {
  data: DataType[];
  type: string;
}

export default function PrincipalCard({ data, type }: PropsType) {
  return (
    <li className={styles.card}>
      <h1>{type}</h1>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <Link href={`/product/${data[0]._id}`}>
            <a>
              <Image
                src={`http://localhost:4000${data[0].image}`}
                layout="fill"
                alt={data[0].endpoint}
              />
            </a>
          </Link>
        </div>
        <div className={styles.image}>
          <Link href={`/product/${data[1]._id}`}>
            <a>
              <Image
                src={`http://localhost:4000${data[1].image}`}
                layout="fill"
                alt={data[1].endpoint}
              />
            </a>
          </Link>
        </div>
        <div className={styles.image}>
          <Link href={`/product/${data[2]._id}`}>
            <a>
              <Image
                src={`http://localhost:4000${data[2].image}`}
                layout="fill"
                alt={data[2].endpoint}
              />
            </a>
          </Link>
        </div>
        <div className={styles.image}>
          <Link href={`/product/${data[3]._id}`}>
            <a>
              <Image
                src={`http://localhost:4000${data[3].image}`}
                layout="fill"
                alt={data[3].endpoint}
              />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.link}>
        <a href="/">Shop now &gt;</a>
      </div>
    </li>
  );
}
