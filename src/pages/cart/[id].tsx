import CartCard from 'components/shared/cards/cartCard';
import Categories from 'components/shared/categories';
import Footer from 'components/shared/footer';
import Loading from 'components/shared/Loading';
import Nav from 'components/shared/nav';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from 'styles/Cart.module.scss';

export default function Cart() {
  const [cartData, setCartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    async function fetchCartData() {
      const res: Response = await fetch(`/api/cart?id=${id}`);
      const data = await res.json();
      console.log(data);
      setIsLoading(false);
      setCartData(data);
    }
    fetchCartData();
  }, [id]);

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
              {cartData.map((item, index) => (
                <>
                  <CartCard key={index} />
                  <CartCard key={index} />
                </>
              ))}
            </>
          )}
        </div>
        <div className={styles.cartTotal}></div>
      </section>
      <Footer />
    </div>
  );
}
