import React from 'react';
import ContentLoader from 'react-content-loader';

const CartCardLoader = () => (
  <ContentLoader
    speed={2}
    width={543.2}
    height={60}
    viewBox='0 0 543.2 60'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='70' y='7' rx='3' ry='3' width='88' height='6' />
    <rect x='70' y='25' rx='3' ry='3' width='52' height='6' />
    <rect x='501' y='9' rx='3' ry='3' width='25' height='25' />
    <rect x='10' y='7' rx='0' ry='0' width='40' height='40' />
  </ContentLoader>
);

export default CartCardLoader;
