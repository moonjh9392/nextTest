import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const About = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <>
      <h1>/page/sub/[id].js</h1>
      <p>Parameter id : {id}</p>
      <Link href="/">/pages/index.js</Link>
    </>
  );
};

export default About;
