import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Container = ({ children }) => (
  <div className="container mx-auto">
    <Header />

    <main className="px-5 md:px-20 lg:px-48">{children}</main>

    <Footer />
  </div>
);

export default Container;
