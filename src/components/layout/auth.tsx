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
      const status = res.status;

      if (status === 202) {
        dispatch(setUser(user.user));
      }

      return () => {
        dispatch(setUser(null));
      };
    })();
  }, []);

  return <div>{children}</div>;
}
