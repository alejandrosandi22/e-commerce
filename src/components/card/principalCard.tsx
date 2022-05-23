import Image from 'next/image';
import styles from 'styles/PrincipalCard.module.scss';

interface DataType {
  _id: string;
  team: string;
  image: string;
  endpoint: string;
  locality: string;
  price: string;
  category: string;
  size: Array<string>;
  sold: number;
  createdAt: string;
  updatedAt: string;
}

interface PropsType {
  data: DataType[];
}

export default function PrincipalCard({ data }: PropsType) {
  return (
    <li className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <Image
            src={`http://localhost:4000${data[0].image}`}
            layout="fill"
            alt={data[0].endpoint}
          />
        </div>
        <div className={styles.image}>
          <Image
            src={`http://localhost:4000${data[1].image}`}
            layout="fill"
            alt={data[1].endpoint}
          />
        </div>
        <div className={styles.image}>
          <Image
            src={`http://localhost:4000${data[2].image}`}
            layout="fill"
            alt={data[2].endpoint}
          />
        </div>
        <div className={styles.image}>
          <Image
            src={`http://localhost:4000${data[3].image}`}
            layout="fill"
            alt={data[3].endpoint}
          />
        </div>
      </div>
      <div className={styles.link}>
        <a href="/">Shop now &gt;</a>
      </div>
    </li>
  );
}
