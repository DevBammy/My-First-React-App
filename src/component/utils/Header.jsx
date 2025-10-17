import { Link, useLocation } from 'react-router-dom';
import styles from './utils.module.css';

const Header = () => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>
          Blog<span>zy</span>
        </h1>
      </div>

      <nav>
        <Link to="/" className={location.pathname === '/' ? styles.active : ''}>
          Home
        </Link>
        <Link
          to="/about"
          className={location.pathname === '/about' ? styles.active : ''}
        >
          About
        </Link>
        <Link
          to="/blog"
          className={location.pathname === '/blog' ? styles.active : ''}
        >
          Blogs
        </Link>
        <Link
          to="/contact"
          className={location.pathname === '/contact' ? styles.active : ''}
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
