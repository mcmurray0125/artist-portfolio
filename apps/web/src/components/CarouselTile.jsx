import { Link } from 'react-router';
import { PortableText } from '@portabletext/react'
import { urlFor } from '../sanity/utilities';

const CarouselTile = ({ index, images, title, description, slug, onClick, onFirstImageLoad }) => {
  return (
    <div className="carousel-tile embla__slide">
      <Link to={`/artwork-detail/${slug}`}>
        <img
          src={urlFor(images[0]).width(1800).url()}
          alt={title}
          loading='lazy'
          className="w-full object-cover"
          onLoad={index === 0 ? onFirstImageLoad : undefined}
        />
      </Link>
    </div>
  );
};

export default CarouselTile;
