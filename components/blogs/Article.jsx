import Link from 'next/link';

const Article = ({ id, title, status, language }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{status}</div>
      <div>{language}</div>

      <Link href={`/blogs/${id}`}>
        <a className="text-blue-solid">Go</a>
      </Link>
    </div>
  );
};

export default Article;
