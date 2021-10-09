import { useEffect, useState } from 'react';

const usePosts = (posts, locale) => {
  const mapping = {
    'en-US': 'English',
    'es-MX': 'Spanish',
  };

  const [localPosts, setLocalPost] = useState([]);

  useEffect(() => filterByLanguage(posts, locale), [posts, locale]);

  const filterByLanguage = (_posts, _locale) => {
    const filtered = _posts.filter(
      (post) => mapping[_locale] === post.properties.Language.select.name
    );

    return setLocalPost(filtered);
  };

  return { data: localPosts };
};

export default usePosts;
