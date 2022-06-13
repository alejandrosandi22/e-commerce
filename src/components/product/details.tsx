import styles from 'styles/Details.module.scss';
import { ProductType } from 'types';

export default function Details({ product }: { product: ProductType }) {
  return (
    <div className={styles.mainDetails}>
      <h1>
        {`${product.team} ${
          product.type === 'home' ||
          product.type === 'away' ||
          product.type === 'third'
            ? 'Kit'
            : ''
        } ${product.type} ${product.season ?? ''} ${product.category ?? ''}`}
      </h1>
      <form>
        {product.size && (
          <>
            <span className={styles.sizeWrapepr}>
              <label htmlFor='size'>Size:</label>
              <select id='size'>
                <option value='null'>Select your size</option>
                {product.size.map((size) => {
                  return (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  );
                })}
              </select>
            </span>
          </>
        )}
        <div className={styles.amountWrapper}>
          <label>Amount:</label>
          <span>
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </span>
        </div>
        <div className={styles.totalWrapper}>
          <h3>Total:</h3>
          <p>${product.price}</p>
        </div>
        <button className={styles.submitButton}>Add to cart</button>
      </form>
      <p className={styles.buyerProtection}>
        <i className='fal fa-shield-check'></i>75-day Buyer Protection with
        Money Back Guarantee
      </p>
    </div>
  );
}
