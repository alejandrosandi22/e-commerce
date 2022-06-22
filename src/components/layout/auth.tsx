import { ReactNode } from 'react';
import { useAppDispatch } from 'hooks';
import { useEffect } from 'react';
import { setUser } from 'store/userReducer';

export default function Auth({ children }: { children?: ReactNode }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const res: Response = await fetch('/api/auth/user');
      const user = await res.json();

      dispatch(setUser(user));
    })();
  }, []);

  return <>{children}</>;
}
