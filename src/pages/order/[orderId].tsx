import Categories from 'components/shared/categories';
import useFetch from 'hooks/useFetch';
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';

export default function Order({ orderId }: { orderId: string }) {
  const { data, loading } = useFetch<unknown>(
    `/api/order?id=62b0a1faea18d3e077021d45&orderId=${orderId}`
  );

  return (
    <div className='order__container'>
      <Categories />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { orderId, userId } = context.query;

  return {
    props: { orderId },
  };
};
