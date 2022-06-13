import styles from 'styles/Comments.module.scss';
import { CommentType } from 'types';
import moment from 'moment';

export default function Comments({ comments }: { comments: CommentType[] }) {
  return (
    <div className={styles.commentsWrapper}>
      {comments.map((comment) => (
        <div className={styles.comment} key={comment._id}>
          <div className={styles.commentHeader}>
            <div className={styles.commentAuthor}>{comment.author}</div>
            <div className={styles.commentDate}>
              {moment(comment.date).format('dddd, MMMM Do YYYY')}
            </div>
          </div>
          <div className={styles.commentText}>{comment.body}</div>
        </div>
      ))}
    </div>
  );
}
