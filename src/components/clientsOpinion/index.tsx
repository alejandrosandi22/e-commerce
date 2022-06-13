import Rate from './rate';
import Comments from './comments';
import styles from 'styles/ClientsOpinion.module.scss';
import { CommentType } from 'types';

export default function ClientsOpinion({
  rate,
  comments,
}: {
  rate: number[] | null;
  comments: CommentType[] | null;
}) {
  return (
    <section className={styles.clientsOpinionContainer}>
      {rate ? <Rate rate={rate} /> : <h1>Loading...</h1>}
      {comments ? <Comments comments={comments} /> : <h1>Loading...</h1>}
    </section>
  );
}
