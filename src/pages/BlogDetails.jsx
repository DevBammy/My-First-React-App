import { useParams } from 'react-router-dom';
<<<<<<< HEAD
import { blogs } from '../assets/blogs';

=======
import { blogs as allBlogs } from '../assets/blogs';
import { useEffect, useState } from 'react';
import moment from 'moment';
import image from '../assets/hero.jpg';
import styles from '../styles/blogDetails.module.css';
>>>>>>> 79f626daf337776eaa3ce8e2612d617bf9b98f8f

const BlogDetails = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(allBlogs);

<<<<<<< HEAD
  const allBlogs = blogs

  const singleBlog = allBlogs.find((blog)=>blog.id==id)

  return <div>BlogDetails {singleBlog.name}</div>;
  

  
=======
  const findBlog = blogs.find((b) => b.id == id);

  useEffect(() => {
    const findBlog = blogs.find((b) => b.id == id);
  }, [id]);

  return (
    <div className={styles.blogDetails}>
      <div className={styles.image}>
        <img src={image} alt="" />

        <h1>{findBlog.title}</h1>
      </div>

      <div className={styles.blogBody}>
        <p>{findBlog.body}</p>

        <p>Posted on: {moment(findBlog.date).fromNow()}</p>
        <span>Post by: {findBlog.author}</span>
      </div>
    </div>
  );
>>>>>>> 79f626daf337776eaa3ce8e2612d617bf9b98f8f
};

export default BlogDetails;
