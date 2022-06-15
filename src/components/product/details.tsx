import { useState } from 'react';
import styles from 'styles/Details.module.scss';
import { ProductType } from 'types';

function priceFormatter(price: number, amount: number) {
  const newPrice = (price * amount).toFixed(2);
  const splitPrice = newPrice.split('.');

  return `$${splitPrice[0]},${splitPrice[1]}`;
}

export default function Details({ product }: { product: ProductType }) {
  const [amount, setAmount] = useState<number>(1);

  const increaseAmount = () => {
    if (amount === 10) return;
    setAmount(amount + 1);
  };

  const decreaseAmount = () => {
    if (amount === 1) return;
    setAmount(amount - 1);
  };

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
            <button type='button' onClick={decreaseAmount}>
              -
            </button>
            <p>{amount}</p>
            <button type='button' onClick={increaseAmount}>
              +
            </button>
          </span>
        </div>
        <div className={styles.totalWrapper}>
          <h3>Total:</h3>
          <p>{priceFormatter(product.price, amount)}</p>
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
