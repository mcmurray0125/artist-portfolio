import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import PageLayout from "../components/PageLayout";
import ImageGallery from "../components/ImageGallery";
import { PortableText } from '@portabletext/react'
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
        <div className="flex flex-col lg:flex-row gap-8 h-full">
          <ImageGallery images={artwork.images} />
          <div id="artwork-detail" className="col flex flex-col gap-4">
            <h1 className="text-4xl text-gray-200 font-bold mb-4">{artwork.title}</h1>
            <p>Medium: {artwork.medium}</p>
            <p>Dimensions: {artwork.dimensions}</p>
            <p>Year: {artwork.year}</p>
            <p>Price: ${artwork.price.toFixed(2)}</p>
            <PortableText value={artwork.description} />
          </div>

        </div>
      ) : (
        <p>Loading artwork...</p>
      )}  
    </PageLayout>
  )
}
