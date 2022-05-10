import Image from 'next/image';
import Link from 'next/link';
import styles from 'styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.title}>
          <div>
            <Image src="/logo.png" layout="fill" />
          </div>
          <h2>E-Commerce</h2>
        </div>
        <div className={styles.linksWrapper}>
          <ul className={styles.links}>
            <li>Size</li>
            <li>
              <Link href="/">
                <a>Men</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Women</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Kids</a>
              </Link>
            </li>
          </ul>
          <ul className={styles.links}>
            <li>Type</li>
            <li>
              <Link href="/">
                <a>Kits</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Training</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Lifestyle</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Accesories</a>
              </Link>
            </li>
          </ul>
          <ul className={styles.links}>
            <li>Support</li>
            <li>
              <Link href="/">
                <a>Email</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.social}>
        <h3>Our social networks</h3>
        <ul>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="mailto:e-commerce@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fal fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.payment}>
        <img src="/assets/payments/visa.png" title="visa" alt="visa" />
        <img src="/assets/payments/paypal.png" title="paypal" alt="paypal" />
        <img
          src="/assets/payments/mastercard.png"
          title="mastercard"
          alt="mastercard"
        />
        <img
          src="/assets/payments/american-express.png"
          title="american express"
          alt="american express"
        />
      </div>
      <div className={styles.legal}>
        <h3>© 2022. All rights reserved /</h3>
        <Link href="/terms">
          <a>Terms of Use /</a>
        </Link>
        <Link href="/privacy">
          <a>Privacy Policy</a>
        </Link>
      </div>
    </footer>
  );
}
