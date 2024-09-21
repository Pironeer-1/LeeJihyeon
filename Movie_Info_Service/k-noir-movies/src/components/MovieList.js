import React, {useState, useEffect} from 'react';
import MovieCard from './MovieCard';
import {fetchKoreanNoirMovies} from '../services/tmdbApi';

const MovieList = ({searchQuery}) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMovies = async () => {
            try {
                setLoading(true);
                const fetchedMovies = await fetchKoreanNoirMovies(searchQuery);
                setMovies(fetchedMovies);
            } catch (err) {
                setError('영화 정보를 불러오는데 실패했습니다.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        getMovies();
    }, [searchQuery]);

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.length > 0 ? (
                movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)
            ) : (
                <div>표시할 영화가 없습니다.</div>
            )}
        </div>
    );
};

export default MovieList;