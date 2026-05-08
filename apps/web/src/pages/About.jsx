import { useState, useEffect } from 'react';
import { getAbout } from "../sanity/client";
import { urlFor } from '../sanity/utilities';
import PageLayout from '../components/PageLayout';
import '../styles/about.css';

export default function About() {
  const [about, setAbout] = useState(null); // or [] if expecting an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAbout();
        setAbout(data[0]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <PageLayout>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {about && (
        <div className="about-wrapper">
          <p className="bio-text text-4xl text-gray-200">{about.bio}</p>
          <div>
            <img className="about-backdrop" src={urlFor(about.backdropImage).width(1920).url()} alt={about.imageAlt} />
          </div>
        </div>
      )}
    </PageLayout>
  )
}