import { useAppSelector } from 'hooks';
import React, { useEffect, useState } from 'react';
import { CartType } from 'types';

type ContextType = {
  length: number;
  refetch: () => void;
};

export const CartLengthContext = React.createContext<ContextType>({
  length: 0,
  refetch: () => {
    // do nothing
  },
});

export function CartLengthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartLength, setCartLength] = useState<number>(0);

  const user = useAppSelector((state) => state.user);

  const refetch = async () => {
    const res: Response = await fetch(`/api/cart?id=${user?.id}`);
    const data: CartType[] = await res.json();
    setCartLength(data.length);
  };

  useEffect(() => {
    if (!user) return;
    refetch();
  }, [user]);

  return (
    <CartLengthContext.Provider
      value={{
        length: cartLength,
        refetch,
      }}
    >
      {children}
    </CartLengthContext.Provider>
  );
}
