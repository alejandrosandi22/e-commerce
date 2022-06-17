import styles from 'styles/GoogleButton.module.scss';

export default function GoogleButton() {
  return (
    <button className={styles.googleButton}>
      <img src='/google-icon.png' alt='google-icon' />
      Sign In With Google
    </button>
  );
}
