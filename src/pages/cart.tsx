import useFetch from 'hooks/useFetch';
import { useEffect } from 'react';

export default function Cart() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, loading } = useFetch<any>(
    '/api/cart?id=62acc1baea78d4d028a69e5b'
  );

  useEffect(() => {
    console.log(data);
  }, [loading]);

  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
}
