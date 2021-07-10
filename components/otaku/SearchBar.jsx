import React from 'react';

const SearchBar = ({ handleOnValueChange }) => {
  return (
    <div className="flex mb-8">
      <input
        className="px-2 py-1 flex-1 bg-gray-background-component hover:bg-gray-background-hover rounded-md text-gray-font-low border border-gray-border-interactive hover:border-gray-border-hover focus-visible:outline-none focus-visible:ring focus-visible:ring-gray-border-interactive focus-visible:border-gray-border-hover"
        placeholder="Enter the title name..."
        onChange={handleOnValueChange}
      />
    </div>
  );
};

export default SearchBar;
