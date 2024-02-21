'use client';

import { useRouter } from 'next/navigation';

const About = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };

  return (
    <>
      <div>About the Canadian news</div>
      <div>
        <button onClick={handleClick}> Go to News</button>
      </div>
    </>
  );
};

export default About;
