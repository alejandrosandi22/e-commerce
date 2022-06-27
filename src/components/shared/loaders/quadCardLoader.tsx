import ContentLoader from 'react-content-loader';

const QuadCardLoader = () => (
  <ContentLoader
    speed={2}
    width={274.172}
    height={420}
    viewBox='0 0 274.172 420'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    id='quad-card-loader'
  >
    <rect x='10' y='340' rx='3' ry='3' width='88' height='17' />
    <rect x='10' y='18' rx='3' ry='3' width='150' height='17' />
    <rect x='10' y='55' rx='0' ry='0' width='113' height='113' />
    <rect x='144' y='55' rx='0' ry='0' width='113' height='113' />
    <rect x='10' y='200' rx='0' ry='0' width='113' height='113' />
    <rect x='144' y='200' rx='0' ry='0' width='113' height='113' />
  </ContentLoader>
);

export default QuadCardLoader;
