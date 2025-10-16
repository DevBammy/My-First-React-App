import React from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../assets/blogs';


const BlogDetails = () => {
  const { id } = useParams();

  const allBlogs = blogs

  const singleBlog = allBlogs.find((blog)=>blog.id==id)

  return <div>BlogDetails {singleBlog.name}</div>;
  

  
};

export default BlogDetails;
