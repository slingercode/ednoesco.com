import { TriangleRightIcon, TriangleLeftIcon } from '@radix-ui/react-icons';
import React from 'react';

const Pagination = ({
  total,
  searchText,
  disablePrev,
  disableNext,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div className="flex justify-between mt-16">
      <div className="flex">
        <p className="text-xl pt-1">
          {searchText.trim() === '' ? `Total: ${total}` : `Results: ${total}`}
        </p>
      </div>

      <div className="flex">
        {!disablePrev && (
          <button
            aria-label="Previous"
            className="hover:bg-gray-background-hover active:bg-gray-background-active border border-transparent hover:border-gray-border-hover p-1 rounded-md focus:outline-none focus:ring focus:border-gray-border-interactive focus:ring-gray-border-interactive"
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            <span>
              <TriangleLeftIcon height={24} width={24} />
            </span>
          </button>
        )}

        <p className="mx-4 pt-1">{currentPage + 1}</p>

        {!disableNext && (
          <button
            aria-label="Next"
            className="hover:bg-gray-background-hover active:bg-gray-background-active border border-transparent hover:border-gray-border-hover p-1 rounded-md focus:outline-none focus:ring focus:border-gray-border-interactive focus:ring-gray-border-interactive"
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            <span>
              <TriangleRightIcon height={24} width={24} />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
