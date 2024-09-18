const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const NOIR_GENRE_ID = '80'; // 실제 느와르와 유사한 장르 ID로 변경

export const fetchKoreanNoirMovies = async (searchQuery = '') => {
  try {
    let url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=ko&sort_by=popularity.desc&with_genres=${NOIR_GENRE_ID}`;
    
    if (searchQuery) {
      url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}&with_original_language=ko`;
    }
    
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching Korean noir movies:', error);
    return [];
  }
};

export const fetchMovieTrailer = async (movieId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results.find(video => video.type === 'Trailer');
  } catch (error) {
    console.error('Error fetching movie trailer:', error);
    return null;
  }
};