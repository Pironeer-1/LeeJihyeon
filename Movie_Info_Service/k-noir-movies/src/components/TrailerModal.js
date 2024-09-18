import React from 'react';
import { X } from 'lucide-react';

const TrailerModal = ({ isOpen, onClose, trailerKey }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg relative w-full max-w-3xl">
        <button onClick={onClose} className="absolute top-2 right-2">
          <X size={24} />
        </button>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={`https://www.youtube.com/embed/${trailerKey}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="movie trailer"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TrailerModal;