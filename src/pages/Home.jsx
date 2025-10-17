import { blogs as allBlogs } from '../assets/blogs';
import Header from '../component/utils/Header';
import Footer from '../component/utils/Footer';
import Hero from '../component/homeComps/Hero';
import LatestBlogs from '../component/homeComps/LatestBlogs';
import { useState } from 'react';
import Testimonial from '../component/homeComps/Testimonial';

const Home = () => {
  const [blogs, setBlogs] = useState(allBlogs);

  const id = 1;

  const findBlog = blogs.find((b) => b.id === id);

  console.log(findBlog);

  return (
    <>
      <Header />
      <Hero />
      <LatestBlogs blogs={blogs} />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
