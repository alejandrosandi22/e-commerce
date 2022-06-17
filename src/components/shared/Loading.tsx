import styles from 'styles/Loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <i className='fal fa-spinner-third'></i>
    </div>
  );
}
