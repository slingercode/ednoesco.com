import Link from 'next/link';

import Container from '@/components/Container';

const PageNotFound = () => (
  <Container title="404 - Not Found">
    <div className="flex flex-col justify-center items-center">
      <div>404 - Page Not Found :(</div>

      <Link href="/">
        <a className="mt-5 text-blue-500">Go back.</a>
      </Link>
    </div>
  </Container>
);

export default PageNotFound;
