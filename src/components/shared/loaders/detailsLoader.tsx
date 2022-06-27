import ContentLoader from 'react-content-loader';

const DetailsLoader = () => (
  <ContentLoader
    speed={2}
    width={654}
    height={492}
    viewBox='0 0 654 492'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    id='details-loader'
  >
    <rect x='30' y='151' rx='3' ry='3' width='528' height='20' />
    <rect x='30' y='29' rx='0' ry='0' width='500' height='70' />
    <rect x='30' y='120' rx='3' ry='3' width='120' height='19' />
    <rect x='30' y='278' rx='3' ry='3' width='120' height='31' />
    <rect x='30' y='332' rx='3' ry='3' width='120' height='48' />
    <rect x='30' y='192' rx='3' ry='3' width='120' height='19' />
    <circle cx='40' cy='235' r='10' />
    <circle cx='101' cy='235' r='10' />
    <rect x='30' y='406' rx='0' ry='0' width='280' height='19' />
  </ContentLoader>
);

export default DetailsLoader;
