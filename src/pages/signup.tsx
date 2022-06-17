import GoogleButton from 'components/shared/googleButton';
import Image from 'next/image';
import Link from 'next/link';
import styles from 'styles/SignUp.module.scss';

export default function SignUp() {
  return (
    <div className={styles.signInWrapper}>
      <div className={styles.signInTitle}>
        <Image src='/logo.png' width={30} height={30} />
        <h1>E-Commerce</h1>
      </div>
      <h1 className={styles.title}>Sign In</h1>
      <form>
        <div className={styles.inputGroup}>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Last Name' />
        </div>
        <div className={styles.inputGroup}>
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
        </div>
        <button type='submit'>Sign In</button>
      </form>
      <ul className={styles.questionsGroup}>
        <Link href='/signin'>
          <li>
            <a>Do you already have an password</a>
          </li>
        </Link>
      </ul>
      <GoogleButton />
    </div>
  );
}
