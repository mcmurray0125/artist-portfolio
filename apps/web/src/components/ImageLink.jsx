import { Link } from 'react-router';
import { urlFor } from '../sanity/utilities';

const ImageLink = ({ artwork }) => {
  const { images, title, description, slug } = artwork;
  return (
    <div className="image-link">
      <Link to={`/artwork-detail/${slug.current}`}>
        <img
          src={urlFor(images[0]).width(1800).url()}
          alt={title}
          loading='lazy'
          className="w-full object-cover"
        />
      </Link>
    </div>
  );
};

export default ImageLink;
