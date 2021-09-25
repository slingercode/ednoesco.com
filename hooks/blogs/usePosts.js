import { useState } from 'react';

const usePosts = (posts) => {
  const [localPosts] = useState(posts);

  return { data: localPosts };
};

export default usePosts;
