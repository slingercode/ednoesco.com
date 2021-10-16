import { Fragment } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import Title from '../notion/ArticleTitle';
import renderBlock from '../notion/Block';

const Page = ({ title, blocks }) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div>
      <Title>{title}</Title>

      {blocks.map((block) => (
        <Fragment key={block.id}>{renderBlock(block)}</Fragment>
      ))}

      <div className="mt-5">
        <a
          className="text-blue-font-low cursor-pointer focus-visible:outline-none focus-visible:ring focus-visible:border-gray-border-interactive focus-visible:ring-gray-border-interactive focus-visible:rounded-md"
          onClick={() => router.back()}
        >
          {t('common:go-back')}
        </a>
      </div>
    </div>
  );
};

export default Page;
