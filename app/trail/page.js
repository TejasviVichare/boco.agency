'use client'
import { useEffect, useState } from "react";

export default function Home() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    async function fetchLogos() {
      try {
        const res = await fetch("http://localhost:1337/api/brands-sliders?populate=*");
        const data = await res.json();

        if (data.data) {
          setLogos(
            data.data.flatMap((item) =>
              item.logos?.map((logo) => ({
                id: logo.id,
                url: `http://localhost:1337${logo.url}`,
              })) || []
            )
          );
        }
      } catch (error) {
        console.error("Error fetching logos:", error);
      }
    }

    fetchLogos();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Brand Logos</h1>
      <div className="flex space-x-4 overflow-x-scroll p-4">
        {logos.length > 0 ? (
          logos.map((logo) => (
            <img key={logo.id} src={logo.url} alt="Brand Logo" className="w-48 h-48 object-cover rounded-lg" />
          ))
        ) : (
          <p>Loading logos or no logos found...</p>
        )}
      </div>
    </div>
  );
}
