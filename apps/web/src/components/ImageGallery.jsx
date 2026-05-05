import { useState } from 'react';
import { urlFor } from '../sanity/utilities';

const ImageGallery = ( {images} ) => {
  const [allImages, setAllImages] = useState(images);
  const [primaryImage, setPrimaryImage] = useState(images[0].asset);

  function handleImageClick(image) {
    setPrimaryImage(image);
  }

  return (
    <div className="col flex flex-col gap-4">
        <div className="primary-image">
            <img className="h-auto max-w-full rounded-base" src={urlFor(primaryImage).url()} alt=""/>
        </div>
        {/* Render Thumbnail if there are multiple images */}
        {allImages && allImages.length > 1 && (
          <div className="thumbnail-images flex gap-2">
            {allImages.map((image, index) => (
              <button onClick={() => handleImageClick(image)} key={index}>
                  <img className="h-auto max-w-full rounded-base" src={urlFor(image.asset).url()} alt=""/>
              </button>
            ))} 
          </div>
        )}
    </div>


  );
};

export default ImageGallery;
