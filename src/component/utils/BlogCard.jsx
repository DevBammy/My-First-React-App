import { Link } from 'react-router-dom';
import UserImage from '../../assets/user.png';
import blogImage from '../../assets/hero.jpg';

import styles from './utils.module.css';

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.id}`} className={styles.blogCard}>
      <div className={styles.blogImage}>
        <img src={blogImage} alt="blog image" />
      </div>

      <div className={styles.blogCardBody}>
        <h4>{blog.title}</h4>
        <p>{blog.body.slice(0, 100)}...</p>
        <div className={styles.blogCardFooter}>
          <div className={styles.left}>
            <div className={styles.authorImage}>
              <img src={UserImage} alt="" />
            </div>
            <span>
              <h4>{blog.author}</h4>
              <p>Admin</p>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
