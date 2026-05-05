import { Link } from 'react-router';
import { PortableText } from '@portabletext/react'
import { urlFor } from '../sanity/utilities';

const CarouselTile = ({ images, title, description, slug, onClick }) => {
  return (
    <div className="carousel-tile embla__slide">
      <button className="cursor-pointer" type='button' onClick={onClick}>
        <img src={urlFor(images[0]).width(1800).url()} alt={title} className="w-full object-cover" />
      </button>
    </div>
  );
};

export default CarouselTile;
