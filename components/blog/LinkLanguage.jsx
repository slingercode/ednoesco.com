import Link from 'next/link';
import clsx from 'clsx';

const LinkLanguage = ({ id, i18n, locale, language, children }) => (
  <Link href={`/blog/${id}`} locale={locale}>
    <a
      className={clsx('hover:text-gray-font-low mr-3', {
        ['pointer-events-none underline text-gray-font-low']:
          i18n.locale === locale && i18n.language === language,
      })}
    >
      {children}
    </a>
  </Link>
);

export default LinkLanguage;
