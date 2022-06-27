import Link from 'next/link';
import Invoice from 'components/invoice';
import Suggestions from 'components/suggestions';
import CartCard from 'components/shared/cards/cartCard';
import Categories from 'components/shared/categories';
import Footer from 'components/shared/footer';
import Loading from 'components/shared/Loading';
import Nav from 'components/shared/nav';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CartType, InvoiceData, ItemType, ProductType } from 'types';
import styles from 'styles/Cart.module.scss';

export default function Cart() {
  const [cartData, setCartData] = useState<CartType[]>([] as CartType[]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [invoiceData, setInvoiceData] = useState<InvoiceData>({
    products: 0,
    shipping: 0,
    total: 0,
  });
  const router = useRouter();
  const { id } = router.query;

  const refetch = async () => {
    const res: Response = await fetch(`/api/cart?id=${id}`);
    const data = await res.json();
    setCartData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!id) return;
    async function fetchCartData() {
      const res: Response = await fetch(`/api/cart?id=${id}`);
      const data = await res.json();
      const status = res.status;

      if (status === 200) {
        return setCartData(data);
      }

      setIsLoading(false);
      router.push('/404');
    }
    fetchCartData();
  }, [id]);

  useEffect(() => {
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
        .then((data: ProductType[]) => {
          const products = data.reduce(
            (acc: number, item: ProductType) => acc + Number(item.price),
            0
          );

          setIsLoading(false);
          setInvoiceData({ products, shipping: 5.45, total: products + 5.45 });
        })
        .catch((error) => {
          setIsLoading(false);
          toastr.error('Something went wrong', 'Error');
          console.error(error.message);
        });
    })();
  }, [cartData]);

  return (
    <div className={styles.cartContainer}>
      <Nav />
      <Categories />
      <section className={styles.cartWrapper}>
        <div className={styles.cartProducts}>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {cartData.map((item: ItemType, index: number) => (
                <CartCard
                  key={`${item.productId}-${index}`}
                  userId={id}
                  item={item}
                  refetch={refetch}
                />
              ))}
            </>
          )}
          {cartData.length === 0 && (
            <div className={styles.cartEmpty}>
              <h1>Your cart is empty</h1>
              <Link href='/'>
                <a>
                  <button>Continue shopping</button>
                </a>
              </Link>
            </div>
          )}
        </div>
        <div className={styles.cartTotal}>
          <h1 className='invoice__title'>Order Summary</h1>
          {isLoading ||
          invoiceData.products === 0 ||
          invoiceData.total === 0 ||
          invoiceData.shipping === 0 ? (
            <h1>Loading...</h1>
          ) : (
            <Invoice invoiceData={invoiceData} />
          )}
        </div>
      </section>
      <Suggestions />
      <Footer />
    </div>
  );
}
