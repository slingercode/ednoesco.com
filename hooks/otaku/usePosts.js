import { useEffect, useState } from 'react';

const usePosts = (posts) => {
  const rowPerPage = 10;

  const [localPosts, setLocalPosts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => filterByText(searchText), [searchText, currentPage]);

  const sliceResults = (_posts = []) =>
    _posts.slice(
      currentPage * rowPerPage,
      currentPage * rowPerPage + rowPerPage
    );

  const filterByText = (text = '') => {
    const searchValue = text.trim().toLowerCase();

    if (text === '') {
      const _total = posts.length;
      setDisablePrev(() => currentPage === 0);
      setDisableNext(() => currentPage * rowPerPage + rowPerPage > _total);
      setTotal(_total);
      return setLocalPosts(sliceResults(posts));
    }

    const filtered = posts.filter((post) =>
      post.properties.Name.title[0].plain_text
        .toLowerCase()
        .includes(searchValue)
    );

    const _total = filtered.length;

    setDisablePrev(() => currentPage === 0);
    setDisableNext(() => currentPage * rowPerPage + rowPerPage > _total);
    setTotal(_total);

    return setLocalPosts(sliceResults(filtered));
  };

  const handleOnValueChange = (event) => {
    setSearchText(event.target.value);
    setCurrentPage(0);
  };

  return {
    data: localPosts,
    searchText,
    handleOnValueChange,
    currentPage,
    setCurrentPage,
    disablePrev,
    disableNext,
    total,
  };
};

export default usePosts;
