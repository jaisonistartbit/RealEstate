// routes/index.js

import { useEffect, useState } from "react";

export default function Index() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch properties list when the component is mounted
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("/api/getPropertyList"); // Call the API
        if (!response.ok) {
          throw new Error("Failed to fetch properties");
        }
        const data = await response.json(); // Parse the response as JSON
        setProperties(data); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false); // Stop the loading spinner
      }
    };

    fetchProperties(); // Trigger the fetch function when the component mounts
  }, []);

  return (
    <div>
      <h1>Available Properties</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {properties.map((property) => (
            <li key={property.id}>
              <strong>{property.name}</strong><br />
              Price: ${property.price.toLocaleString()}<br />
              Location: {property.location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
