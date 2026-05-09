import { useState, useEffect } from 'react';
import GridLayout from '../layouts/GridLayout';
import { getArtworks } from "../sanity/client";
import { urlFor } from '../sanity/utilities';
import ArtTile from "../components/ArtTile";

export default function Artwork() {
  const [artworks, setArtworks] = useState([]);
  const [groupsOfThree, setGroupsOfThree] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getArtworks();
        setArtworks(data);
        const grouped = [];
        for (let i = 0; i < data.length; i += 3) {
          grouped.push(data.slice(i, i + 3));
        }
        setGroupsOfThree(grouped);
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
    <GridLayout>
      <h1 className="text-4xl text-gray-200 my-4 md:max-w-5xl mx-auto">Works</h1>
      {/* {artworks ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artworks.map((artwork) => (
            <ArtTile key={artwork._id} {...artwork} />
          ))}
        </div>
      ) : (
        <p>Loading artworks...</p>
      )} */}

      {/* Groups of Three  Grid Layout */}
      {/* Need to update algorithm to just take total artworks, divide by 3, and make a column for each of those groups.
      So if there are 30 artworks, there will be 3 groups of 10. */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:max-w-5xl mx-auto">
        {groupsOfThree ? groupsOfThree.map((group, index) => (
          <div key={index} className="grid gap-4 h-min">
            {group.map((artwork) => (
              <div key={artwork._id}>
                {/* <img src={urlFor(artwork.images[0]).width(800).url()} alt={artwork.title} className="h-auto max-w-full rounded-base" /> */}
                <ArtTile key={artwork._id} {...artwork} />
              </div>
            ))}
          </div>
        )) : <p>Loading grouped artworks...</p>}
        {groupsOfThree ? groupsOfThree.map((group, index) => (
          <div key={index} className="grid gap-4 h-min">
            {group.map((artwork) => (
              <div key={artwork._id}>
                {/* <img src={urlFor(artwork.images[0]).width(800).url()} alt={artwork.title} className="h-auto max-w-full rounded-base" /> */}
                <ArtTile key={artwork._id} {...artwork} />
              </div>
            ))}
          </div>
        )) : <p>Loading grouped artworks...</p>}
      </div>
    </GridLayout>
  )
}
