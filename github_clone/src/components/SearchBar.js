import React from 'react';
import './SearchBar.css'; // CSS 스타일 파일 연결

const SearchBar = () => {
  return (
    <div className="search-bar">
      <span className="search-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 4.5a6.75 6.75 0 016.75 6.75c0 1.61-.55 3.1-1.48 4.28l4.43 4.44a.75.75 0 01-1.06 1.06l-4.44-4.43a6.75 6.75 0 11-4.28-12.1z"
          />
        </svg>
      </span>
      <input
        type="text"
        placeholder="Type / to search"
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
