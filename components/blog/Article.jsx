import Link from 'next/link';
import { reform } from 'gregorian';

import Title from '../notion/ArticleTitle';

const dateFormat = reform('N d, Y');

const Article = ({ id, title, description, published }) => {
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <Title>{title}</Title>
      </div>

      <div className="w-full pt-2">
        <p>{description}</p>
      </div>

      <div className="w-full py-2 text-sm">
        <div>
          <p>{dateFormat(new Date(published))}</p>
        </div>
      </div>

      <Link href={`/blog/${id}`}>
        <a className="text-blue-solid">Go</a>
      </Link>
    </div>
  );
};

export default Article;
