import React from "react";

const Listing = ({ listing }) => {
  return (
    <div className="listing-card border rounded-lg p-4 shadow-md">
      <img
        src={listing.image_paths[0]}
        alt={listing.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{listing.name}</h2>
      <p className="text-gray-600 mb-1">Price: ${listing.price_per_month} / month</p>
      <p className="text-gray-600 mb-1">Duration: {listing.duration}</p>
      <p className="text-gray-600 mb-1">Location: {listing.location}</p>
      <p className="text-gray-600 mb-4">
        Contact: {listing.contact.email}, {listing.contact.phone}
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Contact
      </button>
    </div>
  );
};

export default Listing;
