import React from 'react';

const MovieCard = ({movie}) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-gray-800">{movie.title} 🎬</h2>
                <p className="text-gray-600 text-sm mb-2">개봉일: {movie.release_date} 🗓️</p>
                <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="text-gray-700">{movie.vote_average.toFixed(1)}</span>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;