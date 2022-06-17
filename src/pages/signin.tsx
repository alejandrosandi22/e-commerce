import GoogleButton from 'components/shared/googleButton';
import Loading from 'components/shared/Loading';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from 'styles/SignIn.module.scss';
import { error, success } from 'toastr';

export default function SignIn() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const res: Response = await fetch('/api/auth/signin', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const status = await res.status;
    const json = await res.json();

    if (status === 200) {
      success('Successful', 'Sign in Successful');
      setIsLoading(false);
      return router.push('/');
    }
    setIsLoading(false);
    error(json.Error, 'Error');
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className={styles.signInWrapper}>
        <div className={styles.signInTitle}>
          <Image src='/logo.png' width={30} height={30} />
          <h1>E-Commerce</h1>
        </div>
        <h1 className={styles.title}>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setData({ ...data, email: e.target.value })}
            type='email'
            placeholder='Email'
          />
          <input
            onChange={(e) => setData({ ...data, password: e.target.value })}
            type='password'
            placeholder='Password'
          />
          <button type='submit'>Sign In</button>
        </form>
        <ul className={styles.questionsGroup}>
          <Link href='/signup'>
            <li>
              <a>Don&apos;t have an account?</a>
            </li>
          </Link>
        </ul>
        <GoogleButton />
      </div>
    </>
  );
}
