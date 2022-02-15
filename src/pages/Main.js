import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';

import News from '../Components/News/News';
import Special from '../Components/Special/Special';
import Blog from '../Components/Blog/Blog';
import Footer from '../Components/Footer/Footer';

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