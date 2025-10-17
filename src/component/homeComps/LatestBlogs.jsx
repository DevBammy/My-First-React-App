import BlogCard from '../utils/BlogCard';
import styles from './homeComps.module.css';

const LatestBlogs = ({ blogs }) => {
  return (
    <section className={styles.allBlogs}>
      <h2>Latest Blogs</h2>

      <div className={styles.featuredBlogs}>
        {blogs &&
          blogs
            ?.slice(0, 4)
            ?.map((blog) => <BlogCard blog={blog} key={blog.id} />)}
      </div>
    </section>
  );
};

export default LatestBlogs;
