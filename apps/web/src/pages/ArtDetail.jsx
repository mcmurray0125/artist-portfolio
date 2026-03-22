import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import PageLayout from "../components/PageLayout";
import { getArtworkBySlug } from "../sanity/client";
import { urlFor } from '../sanity/utilities';

export default function ArtDetail() {
  const { artworkSlug } = useParams();
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getArtworkBySlug(artworkSlug);
        setArtwork(data);
        console.log('Fetched artwork data:', data); // Now logs the actual data
      } catch (err) {
        setError(err);
        console.error('Error fetching artwork:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <PageLayout>
      {artwork ? (
        <>
          <img src={urlFor(artwork.images[0].asset).width(800).url()} alt={artwork.title} className="w-full h-auto object-cover mb-4" />
          <h1 className="text-4xl text-gray-200 font-bold mb-4">{artwork.title}</h1>
        </>
      ) : (
        <p>Loading artwork...</p>
      )}  
    </PageLayout>
  )
}
