// routes/api/properties.js
import { json } from "@remix-run/node";

const properties = [
  { id: 1, name: "Luxury Villa", price: 1200000, location: "Beverly Hills, CA" },
  { id: 2, name: "Cozy Cottage", price: 350000, location: "Aspen, CO" },
  { id: 3, name: "Modern Apartment", price: 800000, location: "New York, NY" },
  { id: 4, name: "Beachfront House", price: 2000000, location: "Malibu, CA" },
];

// Loader function to handle GET request and return properties
export let loader = async () => {
  return json(properties); // Return the list of properties as JSON
};
