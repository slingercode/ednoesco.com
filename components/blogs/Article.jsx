import Link from 'next/link';

const Article = ({ id, title, status }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{status}</div>

      <Link href={`/blogs/${id}`}>
        <a className="text-blue-solid">Go</a>
      </Link>
    </div>
  );
};

export default Article;
