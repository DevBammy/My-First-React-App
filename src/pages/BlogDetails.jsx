import { useParams } from 'react-router-dom';
import { blogs as allBlogs } from '../assets/blogs';
import { useState, useEffect } from 'react';
import moment from 'moment';
import image from '../assets/hero.jpg';
import styles from '../styles/blogDetails.module.css';

const BlogDetails = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(allBlogs);

  const findBlog = blogs.find((b) => b.id == id);

  return (
    <div>
      <div className={styles.image}>
        <img src={image} alt="" />

        <h1>{findBlog.title}</h1>
      </div>

      <div className={styles.blogBody}>
        <p>{findBlog.body}</p>

        <p>{moment(findBlog.date).fromNow()}</p>
        <span>{findBlog.author}</span>
      </div>
    </div>
  );
};

export default BlogDetails;
