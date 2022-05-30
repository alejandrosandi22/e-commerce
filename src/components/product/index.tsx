import { ProductType } from 'types';

export default function Product({ product }: { product: ProductType }) {
  return (
    <div style={{ height: '100vh' }}>
      {product ? (
        <>
          <img
            src={`http://localhost:4000${product.image}`}
            alt={product.endpoint}
          />
          <h2>{product.team}</h2>
        </>
      ) : (
        <h4>Loading</h4>
      )}
    </div>
  );
}
