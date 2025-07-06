import React from "react";

export default function MovieCard({ movie, onClick }) {
  return (
    <div
      className="cursor-pointer hover:scale-105 transition-transform"
      onClick={onClick}
    >
      <img
        src={movie.thumbnail}
        alt={movie.title}
        className="rounded-xl object-cover h-[400px] w-full"
      />
      <div className="text-center mt-2 font-semibold">{movie.title}</div>
    </div>
  );
}
