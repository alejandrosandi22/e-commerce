import { useEffect, useState } from 'react';

export default function usePriceFormatter(price: number, amount: number) {
  const [finalPrice, setFinalPrice] = useState<string>('');

  const newPrice = (price * amount).toFixed(2);
  const splitPrice = newPrice.split('.');

  useEffect(() => {
    setFinalPrice(`$${splitPrice[0]},${splitPrice[1]}`);
  }, [amount, price]);

  return { finalPrice };
}
