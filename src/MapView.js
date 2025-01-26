import React, { useEffect, useRef } from "react";

// Replace this with your actual API key
const GOOGLE_MAPS_API_KEY = "AIzaSyDNmJXhgkC3flxzQkhsJjcJGARBEZlo7NQ";

// Function to load the Google Maps script
const loadGoogleMapsScript = () => {
  return new Promise((resolve, reject) => {
    if (window.google) {
      console.log("Google Maps script already loaded.");
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      console.log("Google Maps script loaded successfully.");
      resolve();
    };
    script.onerror = () => {
      console.error("Failed to load Google Maps script.");
      reject(new Error("Google Maps script failed to load."));
    };
    document.head.appendChild(script);
  });
};

// Function to geocode the ZIP code
const geocodeZipCode = async (zipCode) => {
  if (!zipCode) {
    console.error("No ZIP code provided for geocoding.");
    return null;
  }

  try {
    console.log(`Geocoding ZIP code: ${zipCode}`);
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=${GOOGLE_MAPS_API_KEY}`
    );
    const data = await response.json();

    if (data.status === "OK" && data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry.location;
      console.log("Geocoded location:", { lat, lng });
      return { lat, lng };
    } else {
      console.error("Geocoding failed:", data.status);
      return null;
    }
  } catch (error) {
    console.error("Error fetching geocode data:", error);
    return null;
  }
};

// MapView Component
const MapView = ({ zipCode, listings = [] }) => {
  const mapRef = useRef(null);
  const googleMap = useRef(null);

  useEffect(() => {
    const initializeMap = async () => {
      try {
        // Load the Google Maps script
        await loadGoogleMapsScript();

        // Geocode the ZIP code to get the location
        const location = await geocodeZipCode(zipCode);

        if (!location) {
          console.error("Invalid or missing ZIP code. Cannot initialize the map.");
          return;
        }

        console.log("Initializing map with location:", location);

        // Initialize the map
        const map = new window.google.maps.Map(mapRef.current, {
          center: location,
          zoom: 12,
        });

        googleMap.current = map;

        // Add markers for listings
        if (listings.length > 0) {
          const bounds = new window.google.maps.LatLngBounds();

          listings.forEach((listing) => {
            if (listing.latitude && listing.longitude) {
              console.log("Adding marker for listing:", listing);
              const marker = new window.google.maps.Marker({
                position: { lat: listing.latitude, lng: listing.longitude },
                map,
                title: listing.name,
              });

              bounds.extend(marker.getPosition());
            } else {
              console.warn("Listing is missing latitude or longitude:", listing);
            }
          });

          map.fitBounds(bounds);
        } else {
          console.log("No listings provided. Centering map on ZIP code location.");
          map.setCenter(location);
          map.setZoom(12);
        }
      } catch (error) {
        console.error("Error initializing the map:", error);
      }
    };

    // Ensure a ZIP code is provided before initializing the map
    if (zipCode) {
      initializeMap();
    } else {
      console.error("No ZIP code provided. Map cannot be initialized.");
    }
  }, [zipCode, listings]);

  return <div ref={mapRef} style={{ height: "500px", width: "100%" }}></div>;
};

export default MapView;