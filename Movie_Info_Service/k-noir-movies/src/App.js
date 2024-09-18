import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import GenreFilter from './components/GenreFilter';
import MovieList from './components/MovieList';
import Footer from './components/Footer';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("Searching for:", query);
  };

  const handleGenreChange = (genreId) => {
    setSelectedGenre(genreId);
    console.log("Selected genre:", genreId);
    // 여기에 장르 변경 로직을 추가할 수 있습니다.
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-white">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={
              <>
                <SearchBar onSearch={handleSearch} />
                <GenreFilter selectedGenre={selectedGenre} onGenreChange={handleGenreChange} />
                <MovieList searchQuery={searchQuery} />
              </>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
