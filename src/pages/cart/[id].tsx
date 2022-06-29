import Link from 'next/link';
import Invoice from 'components/invoice';
import Suggestions from 'components/suggestions';
import CartCard from 'components/shared/cards/cartCard';
import Categories from 'components/shared/categories';
import Footer from 'components/shared/footer';
import Loading from 'components/shared/Loading';
import { useEffect, useState } from 'react';
import { CartType, InvoiceData, ItemType, ProductType } from 'types';
import { GetServerSideProps } from 'next';
import useFetch from 'hooks/useFetch';
import toastr from 'toastr';

export default function Cart({ id }: { id: string }) {
  const [invoiceData, setInvoiceData] = useState<InvoiceData>({
    products: 0,
    shipping: 0,
    total: 0,
  });
  const {
    data: cartData,
    loading,
    error,
    refetch,
  } = useFetch<CartType[]>(`/api/cart?id=${id}`);

  useEffect(() => {
    if (error) {
      toastr.error('Something went wrong');
      console.error(error);
    }
  }, [error]);

  useEffect(() => {
    if (!cartData) return;
    (async () => {
      await Promise.all(
        cartData.map(async (item: CartType) => {
          const res: Response = await fetch(
            `https://sp-api.alejandrosandi.com/api/products/${item.productId}`
          );
          const data = await res.json();
          return data;
        })
      )
        .then((products: ProductType[]) => {
          const productsTotal = products.reduce(
            (acc: number, product: ProductType) => {
              const quantity = cartData.find(
                (cartItem) => cartItem.productId === product._id
              );
              if (quantity) {
                return acc + product.price * quantity.quantity;
              }
              return acc;
            },
            0
          );

          setInvoiceData({
            products: productsTotal,
            shipping: 5.45,
            total: productsTotal + 5.45,
          });
        })
        .catch((e) => {
          toastr.error('Something went wrong', 'Error');
          console.error(e.message);
        });
    })();
  }, [cartData]);

  return (
    <div className='cart__container'>
      <Categories />
      <section className='cart__wrapper'>
        <div
          className={`cart__products ${
            cartData && cartData.length === 0 && 'cart__products__empty'
          }`}
        >
          {loading || !cartData ? (
            <Loading />
          ) : (
            <>
              {cartData &&
                cartData.map((item: ItemType, index: number) => (
                  <CartCard
                    key={`${item.productId}-${index}`}
                    userId={id}
                    item={item}
                    refetch={refetch}
                  />
                ))}
            </>
          )}
          {cartData && cartData.length === 0 && (
            <div className='cart__empty'>
              <h1 className='cart__empty__title'>Your cart is empty</h1>
              <Link href='/'>
                <a className='cart__empty__button'>Continue shopping</a>
              </Link>
            </div>
          )}
        </div>
        <div className='cart__invoice'>
          {cartData && cartData.length > 0 && (
            <>
              <h1 className='cart__invoice__title'>Order Summary</h1>
              {!cartData ? (
                <h1>Loading...</h1>
              ) : (
                <Invoice invoiceData={invoiceData} />
              )}
            </>
          )}
        </div>
      </section>
      <Suggestions />
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  return {
    props: { id },
  };
};
