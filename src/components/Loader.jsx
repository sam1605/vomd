import React from 'react';
import loaderVideo from '../assets/page_flip_loading.webm'; // adjust path as needed

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <video
        src={loaderVideo}
        autoPlay
        loop
        muted
        playsInline
        className="verse-container"
      />
    </div>
  );
};

export default Loader;
