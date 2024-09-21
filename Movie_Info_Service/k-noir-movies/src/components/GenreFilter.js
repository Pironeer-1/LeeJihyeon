import React from 'react';

const genres = [
    {id: 80, name: '범죄'},
    {id: 18, name: '드라마'},
    {id: 53, name: '스릴러'},
    {id: 28, name: '액션'},
];

const GenreFilter = ({selectedGenre, onGenreChange}) => {
    return (
        <div className="mb-4">
            <select
                value={selectedGenre}
                onChange={(e) => onGenreChange(e.target.value)}
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
                <option value="">모든 장르 📚</option>
                {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                        {genre.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default GenreFilter;