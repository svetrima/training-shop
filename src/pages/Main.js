import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';

import News from '../components/News/News';
import Special from '../components/Special/Special';
import Blog from '../components/Blog/Blog';
import Footer from '../components/Footer/Footer';

function Main() {
  return (
    <div>
      <Navbar />
      <Header />

      <News />
      <Special />
      <Blog />
      <Footer />
    </div>
  )
}

export default Main