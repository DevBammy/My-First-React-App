import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { blogs as allBLogs } from '../assets/blogs';
import Header from '../component/utils/Header';
import Footer from '../component/utils/Footer';
import BlogCard from '../component/utils/BlogCard';


import styles from '../styles/about.module.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const Apikey = import.meta.env.VITE_APIKEY;
  useEffect(()=>{
    fetch(`http://api.mediastack.com/v1/news?access_key=${Apikey}`)
    .then((res)=> res.json())
    .then((data)=> setBlogs(data.data))
    .catch((err) => console.log(err))
  }, [])
  console.log(blogs);
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2>All Blog Posts</h2>

        <div className={styles.allBlogs}>
          {blogs.length > 0 && blogs.map((blog, i) => (
            <BlogCard blog={blog} key={i} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
