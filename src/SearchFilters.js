import React, { useState } from "react";

const SearchFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    priceRange: { min: "", max: "" },
    beds: "",
    baths: "",
    proximity: "",
  });

  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = () => {
    onFilterChange(filters);
  };

  return (
    <div className="filters-container">
      <button
        className="filter-button bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={() => setShowFilters(!showFilters)}
      >
        Filters
      </button>

      {showFilters && (
        <div className="filter-dropdown bg-white shadow-lg p-4 mt-2 rounded-lg">
          <div className="filter">
            <label>Price Range:</label>
            <div className="price-range">
              <input
                type="number"
                placeholder="Min"
                value={filters.priceRange.min}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    priceRange: { ...prev.priceRange, min: e.target.value },
                  }))
                }
              />
              <input
                type="number"
                placeholder="Max"
                value={filters.priceRange.max}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    priceRange: { ...prev.priceRange, max: e.target.value },
                  }))
                }
              />
            </div>
          </div>

          <div className="filter">
            <label htmlFor="beds">Beds:</label>
            <select
              id="beds"
              value={filters.beds}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, beds: e.target.value }))
              }
            >
              <option value="">Any</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </div>

          <div className="filter">
            <label htmlFor="baths">Baths:</label>
            <select
              id="baths"
              value={filters.baths}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, baths: e.target.value }))
              }
            >
              <option value="">Any</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3+</option>
            </select>
          </div>

          <div className="filter">
            <label htmlFor="proximity">Proximity (miles):</label>
            <input
              type="number"
              id="proximity"
              value={filters.proximity}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, proximity: e.target.value }))
              }
              placeholder="Enter proximity"
            />
          </div>

          <button
            className="apply-filters bg-green-500 text-white px-4 py-2 rounded-lg mt-2"
            onClick={handleFilterChange}
          >
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;