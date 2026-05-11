import { useState } from 'react';
import { urlFor } from '../sanity/utilities';
import "../styles/gallery.css"

const ImageGallery = ({ images }) => {
  const [allImages, setAllImages] = useState(images);
  console.log(allImages);

  function handleImageClick(image) {
    console.log('image clicked', image);
  }

  return (
    <>
      {/* Render Thumbnail if there are multiple images */}
      {allImages && (
        <div className="process-images flex gap-2">
          {allImages.map((image, index) => (
            <div className="process-image-wrapper" key={index}>
              <button className='process-image-button' onClick={() => handleImageClick(image)}>
                <img className="h-auto max-w-full rounded-base" src={urlFor(image.asset).url()} alt="" />
              </button>
              {image.caption && <p className="text-sm">{image.caption}</p>}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ImageGallery;
