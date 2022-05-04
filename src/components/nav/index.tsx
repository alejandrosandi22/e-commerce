import Link from 'next/link';
import { useState } from 'react';
import styles from 'styles/Nav.module.scss';

export default function Nav() {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => setToggle(!toggle);

  const user = {
    id: '46541dsf5d4fd148h7',
    name: 'Thomas Gould',
    cart: {},
  };

  return (
    <>
      <nav className={styles.nav}>
        <h1>E-Commerce</h1>
        <div onClick={() => handleToggle()} className={styles.toggleWrapper}>
          <span className={styles.toggle}></span>
        </div>
        <ul className={styles.list}>
          <li>
            <a href="/">Men</a>
          </li>
          <li>
            <a href="/">Women</a>
          </li>
          <li>
            <a href="/">Kids</a>
          </li>
        </ul>
        <ul className={styles.userList}>
          <form onSubmit={(e) => e.preventDefault()}>
            <button onSubmit={(e) => e.preventDefault()}>
              <i className="fal fa-search"></i>
            </button>
            <input type="text" id="serach" placeholder="Serach ..." />
          </form>
          <li>
            {!user ? (
              <Link href="/signin">
                <a>Sign In</a>
              </Link>
            ) : (
              <>
                <Link href="/profile/:id">
                  <a>
                    <i className="fal fa-user"></i>
                  </a>
                </Link>
                <Link href="/cart">
                  <a>
                    <i className="fal fa-shopping-cart"></i>
                  </a>
                </Link>
              </>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}
