import Link from 'next/link';
import React, { useEffect } from 'react';

const Fetch = () => {
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + 'api/1')
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
  return (
    <>
      <h1>/page/sub/fetch.js</h1>
      <Link href="/">/pages/index.js</Link>
    </>
  );
};

export default Fetch;
