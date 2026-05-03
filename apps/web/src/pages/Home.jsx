import { useState, useEffect } from 'react';
import { getHomepage } from "../sanity/client";
import { urlFor } from '../sanity/utilities';
import HomePageLayout from '../layouts/HomePageLayout';
import { HomePageCarousel } from '../components/HomePageCarousel';

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
      <HomePageCarousel featuredArtworks={homepage?.featuredArtworks} />
      {/* <div id="hero-image">
        {homepage?.heroImage && (
          <img
            src={urlFor(homepage.heroImage)}
            alt={homepage?.heroImageAlt || 'Placeholder image'}
            className="w-full h-full object-cover"
          />
        )}
      </div> */}
    </HomePageLayout>
  )
}