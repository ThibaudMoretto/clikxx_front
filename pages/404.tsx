import type { NextPage } from 'next';

import Link from 'next/link';

const NotFound: NextPage = () => {
  return (
    <div className="not-found">
      <h1>Oooooops...</h1>
      <h2>Seems like you lost yourself...</h2>
      <Link href="/">
        <a>Go back</a>
      </Link>
    </div>
  );
};

export default NotFound;
