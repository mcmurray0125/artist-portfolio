import { useState, useEffect } from 'react';
import { getHomepage } from "../sanity/client";
import { urlFor } from '../sanity/utilities';
import { PortableText } from '@portabletext/react';
import HomePageLayout from '../layouts/HomePageLayout';
import { HomePageCarousel } from '../components/HomePageCarousel';
import ImageLink from '../components/ImageLink';

export default function Home() {
  const [homepage, setHomepage] = useState(null); // or [] if expecting an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getHomepage();
        setHomepage(data[0]);
        console.log('Fetched homepage data:', data); // Now logs the actual data
      } catch (err) {
        setError(err);
        console.error('Error fetching homepage:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <HomePageLayout>
      <div className="hidden lg:block">
        <HomePageCarousel featuredArtworks={homepage?.featuredArtworks} />
      </div>

      <div className="block lg:hidden">
        {homepage?.featuredArtworks?.map((artwork, index) => (
          <ImageLink key={index} artwork={artwork} />
        ))}
      </div>

      {homepage?.homepageDisclaimer && (
        <small className='homepage-disclaimer'>{homepage.homepageDisclaimer}</small>
      )}
    </HomePageLayout>
  )
}