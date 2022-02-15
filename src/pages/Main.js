import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';

import Special from '../components/Special/Special';
import Blog from '../components/Blog/Blog';
import Footer from '../components/Footer/Footer';

function Main() {
  return (
    <div>
      <Navbar />
      <Header />

      <Special />
      <Blog />
      <Footer />
    </div>
  )
}

export default Main