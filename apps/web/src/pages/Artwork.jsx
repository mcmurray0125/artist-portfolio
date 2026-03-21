import { useState, useEffect } from 'react';
import PageLayout from "../components/PageLayout";
import { getArtworks } from "../sanity/client";
import ArtTile from "../components/ArtTile";

export default function Artwork() {
  const [artworks, setArtworks] = useState([]); // or [] if expecting an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getArtworks();
        setArtworks(data);
        console.log('Fetched artworks data:', data); // Now logs the actual data
      } catch (err) {
        setError(err);
        console.error('Error fetching artworks:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <PageLayout>
      <h1 className="text-4xl text-gray-200 font-bold mb-4">Artwork</h1>
      {artworks ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork) => (
              <ArtTile key={artwork._id} {...artwork} />
          ))}
        </div>
      ) : (
        <p>Loading artworks...</p>
      )}  
    </PageLayout>
  )
}
