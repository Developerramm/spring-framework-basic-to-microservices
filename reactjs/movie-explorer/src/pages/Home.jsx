import React, { useEffect, useRef, useState } from "react";
import MovieList from "../components/MovieList";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const inputRef = useRef();

  const fetchMovies = async (query) => {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=4c7fe58e&s=${query}`,
    );

    const data = await res.json();
    setMovies(data.Search || []);
  };

  useEffect(() => {
    fetchMovies("Avengers");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = inputRef.current.value.trim();
    if (query) {
      fetchMovies(query);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch}>
        <input
          className="searchInput"
          placeholder="Search for a movie..."
          ref={inputRef}
        />
        <button type="submit">Search 🔎</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
