import { Link } from 'react-router';
import { PortableText } from '@portabletext/react'
import { urlFor } from '../sanity/utilities';

const CarouselTile = ({ images, title, description, slug }) => {
  return (
    <div className="carousel-tile">
      <button type='button'>
        <img src={urlFor(images[0]).width(800).url()} alt={title} className="w-full h-auto object-cover" />
      </button>
    </div>
  );
};

export default CarouselTile;
