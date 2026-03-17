import { Link } from 'react-router';

const ArtTile = (artwork) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden">
        <img src={artwork.image} alt={artwork.title} className="w-full h-48 object-cover" />
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{artwork.title}</h2>
            <p className="text-gray-600 mb-4">{artwork.description}</p>
            <Link to={`/artwork/${artwork._id}`} className="text-blue-500 hover:underline">
                View Details
            </Link>
        </div>
    </div>
  );
};

export default ArtTile;
