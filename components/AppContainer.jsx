import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import Header from './Header';
import Footer from './Footer';

const Container = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="container mx-auto">
      <Header />

      <main className="px-5 md:px-20 lg:px-48">{children}</main>

      <Footer />
    </div>
  );
};

export default Container;
