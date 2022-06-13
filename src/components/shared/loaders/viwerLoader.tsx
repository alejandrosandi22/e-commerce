import React from 'react';
import ContentLoader from 'react-content-loader';

const ViwerLoader = () => (
  <ContentLoader
    speed={2}
    width={641.719}
    height={500}
    viewBox='0 0 641.719 500'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='5' y='360' rx='3' ry='3' width='120' height='120' />
    <rect x='132' y='15' rx='0' ry='0' width='297' height='297' />
    <rect x='163' y='360' rx='3' ry='3' width='120' height='120' />
    <rect x='308' y='360' rx='3' ry='3' width='120' height='120' />
    <rect x='455' y='360' rx='3' ry='3' width='120' height='120' />
  </ContentLoader>
);

export default ViwerLoader;
