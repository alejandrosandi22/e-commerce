import Counter from 'components/shared/counter';
import { CartLengthContext } from 'context/cartLength';
import { useAppSelector } from 'hooks';
import usePriceFormatter from 'hooks/usePriceFormatter';
import React, { useContext, useState } from 'react';
import styles from 'styles/Details.module.scss';
import { success, warning } from 'toastr';
import { ProductType } from 'types';

export default function Details({ product }: { product: ProductType }) {
  const { refetch } = useContext(CartLengthContext);
  const [amount, setAmount] = useState<number>(1);
  const [sizeProduct, setSizeProduct] = useState<string>('');
  const { finalPrice } = usePriceFormatter(product.price, amount);

  const user = useAppSelector((state) => state.user);

  const handleAddToCart = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (product.size) {
      if (!sizeProduct) {
        warning('Please select a size', 'Warning');
        return;
      }
    }

    if (!user) {
      warning('You must be logged in to add to cart');
      return;
    }

    const data = {
      productId: product._id,
      quantity: amount,
      size: sizeProduct,
    };

    await fetch(`/api/cart?id=${user.id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    success('Added to cart');
    refetch();
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
      <form onSubmit={handleAddToCart}>
        {product.size && (
          <>
            <span className={styles.sizeWrapepr}>
              <label htmlFor='size'>Size:</label>
              <select
                onChange={(e) => setSizeProduct(e.target.value)}
                id='size'
              >
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
          <Counter setAmount={setAmount} amount={amount} />
        </div>
        <div className={styles.totalWrapper}>
          <h3>Total:</h3>
          <p>{finalPrice}</p>
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
