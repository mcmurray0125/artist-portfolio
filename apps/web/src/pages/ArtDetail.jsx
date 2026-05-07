import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import PageLayout from "../components/PageLayout";
import ImageGallery from "../components/ImageGallery";
import Details from "../components/Details";
import { getArtworkBySlug } from "../sanity/client";

export default function ArtDetail() {
  const { artworkSlug } = useParams();
  const [artwork, setArtwork] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getArtworkBySlug(artworkSlug);
        setArtwork(data[0]);
        console.log('Fetched artwork data:', data[0]); // Now logs the actual data
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
        <div className="flex flex-col lg:flex-row gap-8 h-full">
          <div className="lg:w-1/2">
            <ImageGallery images={artwork.images} />
          </div>
          <div id="artwork-detail" className="lg:w-1/2 flex flex-col gap-4 mt-8">
            <Details artwork={artwork} />
          </div>
        </div>
      ) : (
        <p>Loading artwork...</p>
      )}
    </PageLayout>
  )
}
