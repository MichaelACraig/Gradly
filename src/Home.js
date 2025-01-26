import React, { useState, useEffect } from "react";
import MapView from "./MapView";
import SearchFilters from "./SearchFilters";
import Listings from "./Listings";
import "./Home.css";

const Home = () => {
  const [zipCode, setZipCode] = useState("");
  const [filters, setFilters] = useState({
    priceRange: [0, 5000],
    beds: 0,
    baths: 0,
    proximity: 10,
  });
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch listings from backend
  const fetchListings = async (zip, filterParams) => {
    if (!zip) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://api.example.com/listings?zip=${zip}&priceMin=${filterParams.priceRange[0]}&priceMax=${filterParams.priceRange[1]}&beds=${filterParams.beds}&baths=${filterParams.baths}&proximity=${filterParams.proximity}`
      );
      const data = await response.json();
      setListings(data.listings || []);
    } catch (error) {
      console.error("Error fetching listings:", error);
      setListings([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchListings(zipCode, filters);
  };

  return (
    <div className="home-container">
      {/* Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Enter Zip Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="search-bar"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      {/* Filters */}
      <SearchFilters onFilterChange={(newFilters) => setFilters(newFilters)} />

      {/* Map and listing details */}
      <div className="map-details-container">
        <div className="map-view">
          <MapView listings={listings} zipCode={zipCode} loading={loading} />
        </div>
        <div className="listing-details">
          <Listings/>
          {/* <ListingDetails listings={listings} loading={loading} /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;