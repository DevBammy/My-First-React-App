import { Link } from 'react-router-dom';
import styles from './homeComps.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>Welcome to Blogzy</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
        corrupti cum tempora perspiciatis. Dignissimos modi placeat culpa
        dolorum alias nobis quo et ex est, beatae pariatur ea, doloribus, sunt
        cupiditate.
      </p>

      <Link className="btn" to="/blog">
        Read All Blogs
      </Link>
    </div>
  );
};
export default Hero;
