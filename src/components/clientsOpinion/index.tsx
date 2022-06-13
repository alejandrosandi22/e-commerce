import Rate from './rate';
import Comments from './comments';
import styles from 'styles/clientsOpinion.module.scss';

export default function ClientsOpinion() {
  return (
    <section className={styles.clientsOpinionContainer}>
      <Rate rate={[6, 11, 28, 0, 109]} />
      <Comments />
    </section>
  );
}
