import { blogs as allBlogs } from '../assets/blogs';
import Header from '../component/utils/Header';
import Footer from '../component/utils/Footer';
import Hero from '../component/homeComps/Hero';
import LatestBlogs from '../component/homeComps/LatestBlogs';
import { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState(allBlogs);

  return (
    <>
      <Header />
      <Hero />
      <LatestBlogs blogs={blogs} />
      <Footer />
    </>
  );
};

export default Home;
