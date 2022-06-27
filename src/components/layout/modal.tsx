import Profile from 'components/profile';
import { useAppSelector } from 'hooks';

export default function Modal({ children }: { children: React.ReactNode }) {
  const profile = useAppSelector((state) => state.profile);

  return (
    <div>
      {profile && <Profile />}
      {children}
    </div>
  );
}
