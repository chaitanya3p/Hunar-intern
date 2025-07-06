import React, { useState } from "react";
import { movies } from "./data";
import MovieCard from "./components/MovieCard";
import MovieModal from "./components/MovieModal";

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="bg-black min-h-screen text-white">
      <header className="text-3xl font-bold p-4 bg-red-700 shadow-lg">MyFlix</header>

      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => setSelectedMovie(movie)}
          />
        ))}
      </main>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
}
