import styles from 'styles/CartCard.module.scss';

export default function CartCard() {
  return (
    <div className={styles.cartCard}>
      <div className={styles.cartCard__image}>
        <img src='https://via.placeholder.com/150' alt='product' />
      </div>
      <div className={styles.cartCard__info}>
        <div className={styles.cartCard__info__title}>
          <h3>Product Title</h3>
          <p>$19,99</p>
        </div>
      </div>
      <div className={styles.cartCard__actions}>
        <button>
          <i className='fal fa-trash'></i>
        </button>
      </div>
    </div>
  );
}
