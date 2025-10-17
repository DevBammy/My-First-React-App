import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogs as allBLogs } from '../assets/blogs';
import Header from '../component/utils/Header';
import Footer from '../component/utils/Footer';
import BlogCard from '../component/utils/BlogCard';

import styles from '../styles/about.module.css';

const Blog = () => {
  const [blogs, setBlogs] = useState(allBLogs);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2>All Blog Posts</h2>

        <div className={styles.allBlogs}>
          {blogs.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
