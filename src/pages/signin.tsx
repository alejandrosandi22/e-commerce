import GoogleButton from 'components/shared/googleButton';
import Image from 'next/image';
import Link from 'next/link';
import styles from 'styles/SignIn.module.scss';

export default function SignIn() {
  return (
    <div className={styles.signInWrapper}>
      <div className={styles.signInTitle}>
        <Image src='/logo.png' width={30} height={30} />
        <h1>E-Commerce</h1>
      </div>
      <h1 className={styles.title}>Sign In</h1>
      <form>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <button type='submit'>Sign In</button>
      </form>
      <ul className={styles.questionsGroup}>
        <Link href='/recover'>
          <li>
            <a>Forgot your password?</a>
          </li>
        </Link>
        <Link href='/signup'>
          <li>
            <a>Don&apos;t have an account?</a>
          </li>
        </Link>
      </ul>
      <GoogleButton />
    </div>
  );
}
