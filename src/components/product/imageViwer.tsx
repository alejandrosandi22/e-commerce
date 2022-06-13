import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from 'styles/ImageViwer.module.scss';
import { ProductType } from 'types';

export default function ImageViewer({ product }: { product: ProductType }) {
  const [url, setUrl] = useState<string>(product?.images[0] ?? '/noImage.png');

  const handle = (newUrl: string) => setUrl(newUrl);

  useEffect(() => {
    if (!product) return;
    setUrl(product.images[0]);
  }, [product]);

  return (
    <div className={styles.imagesViewer}>
      <div className={styles.viewLayout}>
        <div className={styles.view}>
          <Image priority src={url} layout='fill' alt={product.endpoint} />
        </div>
      </div>
      <ul>
        {product.images.map((image: string, index: number) => (
          <li key={index}>
            <Image
              priority
              src={image}
              layout='fill'
              alt={product.endpoint}
              onClick={() => handle(image)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
