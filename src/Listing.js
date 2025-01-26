import React from "react";

const Listing = ({ listing }) => {
  return (
    <div className="listing-card border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">{listing.name}</h2>
      <p>{listing.price_per_month} per month</p>
      <p>{listing.duration}</p>
      <p>Location: {listing.location}</p>
      <div className="contact-info">
        <p>Email: {listing.contact.email}</p>
        <p>Phone: {listing.contact.phone}</p>
      </div>
      
      {/* Displaying images */}
      <div className="image-gallery">
        {listing.image_paths.map((imagePath, index) => (
          <img
            key={index}
            src={process.env.PUBLIC_URL + "/" + imagePath}
            alt={`Apartment ${index}`}
            className="listing-image w-full h-auto rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};


export default Listing;
