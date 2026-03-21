import { useState, useEffect } from 'react';
import PageLayout from "../components/PageLayout";
import { getHomepage } from "../sanity/client";

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
    <PageLayout>
      <h1 className="text-4xl font-bold mb-4">{homepage?.heroTitle || 'Placeholder Title'}</h1>
      <p className="text-lg text-gray-300">
        {homepage?.heroSubtitle || 'Placeholder subtitle.'}
      </p>
    </PageLayout>
  )
}