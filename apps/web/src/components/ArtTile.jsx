import { Link } from 'react-router';
import { PortableText } from '@portabletext/react'
import { urlFor } from '../sanity/utilities';

const ArtTile = ({ images, title, description, slug }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden">
      <Link to={`/artwork-detail/${slug.current}`} className="text-blue-500 hover:underline">
        <img src={urlFor(images[0]).width(800).url()} alt={title} className="w-full h-auto object-cover" />
      </Link>
      <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <PortableText value={description} />
          <Link to={`/artwork-detail/${slug.current}`} className="text-blue-500 hover:underline">
              View Details
          </Link>
      </div>
    </div>
  );
};

export default ArtTile;
