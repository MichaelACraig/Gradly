import React, { useEffect, useState } from "react";
import Listing from "./Listing";

const Listings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Fetch listings from your API
    const fetchListings = async () => {
      try {
        const response = await fetch("http://localhost:5000/listings");
        const data = await response.json();
        setListings(data);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    fetchListings();
  }, []);

  return (
    <div className="listings-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {listings.map((listing, index) => (
        <Listing key={index} listing={listing} />
      ))}
    </div>
  );
};

export default Listings;
