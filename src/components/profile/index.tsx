import { removeCookies } from 'cookies-next';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useRouter } from 'next/router';
import { setProfile } from 'store/profileReducer';
import { setUser } from 'store/userReducer';
import styles from 'styles/Profile.module.scss';
import { success } from 'toastr';

export default function Profile() {
  const router = useRouter();
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleDeleteAccount = async () => {
    if (!user) return;

    await fetch('/api/auth/user', {
      method: 'DELETE',
      body: JSON.stringify({ id: user.id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    success('Account deleted successfully', 'Success');
    dispatch(setProfile(false));
    router.push('/');
    dispatch(setUser(null));
    removeCookies('e-commerce-user-token');
  };

  const handleClose = () => {
    dispatch(setProfile(false));
  };

  const handleSignOut = () => {
    dispatch(setProfile(false));

    router.push('/');
    dispatch(setUser(null));
    removeCookies('e-commerce-user-token');
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profile}>
        <div className={styles.profile__title}>
          <h1>Profile</h1>
          <button onClick={handleClose}>
            <i className='fal fa-times'></i>
          </button>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{user && user.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{user && user.email}</td>
            </tr>
            <tr>
              <td>
                <button onClick={handleDeleteAccount}>Delete Account</button>
              </td>
              <td>
                <button onClick={handleSignOut}>Sign Out</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
