import React, {useState} from 'react';

const SearchBar = ({onSearch}) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="영화 제목 검색...🎞️"
                className="p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400 flex-grow"
            />
            <button type="submit" className="bg-yellow-400 text-gray-900 p-2 rounded-r-md hover:bg-yellow-500">
                검색
            </button>
        </form>
    );
};

export default SearchBar;