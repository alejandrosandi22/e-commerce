import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useFetch from 'hooks/useFetch';
import usePriceFormatter from 'hooks/usePriceFormatter';
import CartCardLoader from '../loaders/cartCardLoader';
import { success } from 'toastr';
import { ItemType, ProductType } from 'types';
import styles from 'styles/CartCard.module.scss';

function CartCard({
  userId,
  item,
  refetch,
}: {
  userId: string | string[] | undefined;
  item: ItemType;
  refetch: () => void;
}) {
  const { data, loading } = useFetch<ProductType>(
    `https://sp-api.alejandrosandi.com/api/products/${item.productId}`
  );

  const { finalPrice } = usePriceFormatter(data.price, item.quantity);

  const handleDelete = async () => {
    await fetch(`/api/cart?id=${userId}`, {
      method: 'DELETE',
      body: JSON.stringify({
        productId: item.productId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    success('Deleted from cart', 'Success');
    refetch();
  };

  if (loading) {
    return (
      <div className={styles.cartCard}>
        <CartCardLoader />
      </div>
    );
  }

  return (
    <div className={styles.cartCard}>
      <div className={styles.cartCard__image}>
        <Link href={`/product/${item.productId}`}>
          <a
            style={{
              position: 'relative',
              display: 'block',
              width: '100%',
              height: '100%',
            }}
          >
            <Image src={data.images[0]} layout='fill' alt='product' />
          </a>
        </Link>
      </div>
      <div className={styles.cartCard__info}>
        <div className={styles.cartCard__info__title}>
          <Link href={`/product/${item.productId}`}>
            <a>
              <h3>{`${data.team} ${data.season ?? ''} ${data.type} ${
                data.category ?? ''
              }`}</h3>
            </a>
          </Link>
          <p>Size: {item.size}</p>
          <p>Quantity: {item.quantity}</p>
          <p>{finalPrice}</p>
        </div>
      </div>
      <div className={styles.cartCard__actions}>
        <button onClick={handleDelete}>
          <i className='fal fa-trash'></i>
        </button>
      </div>
    </div>
  );
}

export default React.memo(CartCard);
