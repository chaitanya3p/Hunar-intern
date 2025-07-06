import React from "react";

export default function MovieModal({ movie, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 overflow-auto">
      <div className="bg-gray-900 p-6 rounded-xl w-11/12 md:w-2/3 lg:w-1/2 max-h-screen overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-white text-2xl font-bold"
        >
          
        </button>

        <img
          src={movie.thumbnail}
          alt={movie.title}
          className="rounded-xl mx-auto mb-4 max-h-[400px] object-contain"
        />

        <h2 className="text-2xl font-bold mb-2 text-center">{movie.title}</h2>
        <p className="mb-4 text-center">{movie.description}</p>

        <div className="aspect-video mb-4">
          <iframe
            className="w-full h-full rounded-lg"
            src={movie.trailerUrl}
            title={`${movie.title} Trailer`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
