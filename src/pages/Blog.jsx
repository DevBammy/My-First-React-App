import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/utils/Header';
import Footer from '../component/utils/Footer';

const Blog = () => {
  const blogName = 'New Nigeria';
  return (
    <>
      <Header />
      <Link to={`/blog/${blogName}`} className="1">
        1
      </Link>
      <Link className="2">2</Link>
      <div className="3">3</div>
      <div className="4">4</div>

      <Footer />
    </>
  );
};

export default Blog;
