import React, { useState, useEffect } from 'react';
import { data, Link } from 'react-router-dom';
//import { blogs as allBLogs } from '../assets/blogs';
import Header from '../component/utils/Header';
import Footer from '../component/utils/Footer';
import BlogCard from '../component/utils/BlogCard';
const apiKey = import.meta.env.VITE_APIKEY;
const apiEndPoint = import.meta.env.VITE_APIENDPOINT;



import styles from '../styles/about.module.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  
  useEffect(()=>{
    fetch(`${apiEndPoint}?access_key=${apiKey}`)
    .then((res)=>res.json())
    .then((data)=>setBlogs(data))
    
  }, [])
console.log(blogs)
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2>All Blog Posts</h2>

        <div className={styles.allBlogs}>

          {Array.isArray(blogs) && blogs.map((blogs) => (
            <BlogCard blog={blogs} key={blogs.id} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
