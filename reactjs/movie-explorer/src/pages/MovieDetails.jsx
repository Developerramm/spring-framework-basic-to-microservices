import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(()=>{

    async function getMovie(){
         const res = await fetch(
           `https://www.omdbapi.com/?apikey=4c7fe58e&i=${id}`,
         );

         const data = await res.json();
         setMovie(data)
         console.log(data)
    }

    getMovie()

  },[id])

  if(!movie) return <p>loading....</p>


  return (
    <div className="movie-detail">
      <h2> {movie.Title} </h2>
      <img alt={movie.Title} src={movie.Poster} />
      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Released:</strong> {movie.Released}
      </p>
      <p>
        <strong>Plot:</strong> {movie.Plot}
      </p>
    </div>
  );
};

export default MovieDetails;
