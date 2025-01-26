import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "../src/Card";
import { Button } from "../src/Button";
import { MapPin, Bed, Bath, DollarSign } from "lucide-react";

const ListingDetails = ({ listings }) => {
  const { id } = useParams();
  const listing = listings.find((item) => item.id === parseInt(id));

  if (!listing) {
    return <div className="p-6 text-center text-red-500">Listing not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <Card className="shadow-lg rounded-2xl overflow-hidden">
        <img
          src={listing.image || "/placeholder.jpg"}
          alt={listing.title}
          className="w-full h-64 object-cover"
        />
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-2">{listing.title}</h1>
          <div className="flex items-center space-x-2 text-gray-600 mb-4">
            <MapPin className="w-5 h-5" />
            <span>{listing.address}</span>
          </div>
          <div className="flex space-x-4 text-gray-700 mb-4">
            <div className="flex items-center space-x-1">
              <DollarSign className="w-5 h-5" />
              <span>{listing.price}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Bed className="w-5 h-5" />
              <span>{listing.bedrooms} Beds</span>
            </div>
            <div className="flex items-center space-x-1">
              <Bath className="w-5 h-5" />
              <span>{listing.bathrooms} Baths</span>
            </div>
          </div>
          <p className="text-gray-700 mb-6">{listing.description}</p>
          <Button className="w-full">Contact Landlord</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ListingDetails;
