// components/HomePage.tsx
import React, { useEffect, useState } from 'react';

const HomePage: React.FC = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
  }, []);

  return (
    <div>
      <h1>News Inshorts</h1>
      {/* Render news here */}
    </div>
  );
};

export default HomePage;
