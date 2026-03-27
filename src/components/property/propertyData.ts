import { type Property } from "./PropertyCard";

export type PropertyRecord = Property & {
  propertyType: "House" | "Apartment" | "Villa" | "Land";
  purpose: "Buy" | "Rent";
  description: string;
  amenities: string[];
  gallery: string[];
  listedDate?: string;
  bathrooms?: string;
  direction?: string;
};

export const propertyList: PropertyRecord[] = [
  {
    id: "property-1",
    image: "/images/building1.jpg",
    price: "4.5 Crore",
    title: "Modern Villa With Garden",
    location: "Sanepa, Bhaktapur",
    beds: "8 ",
    area: "4 ",
    roadAccess: "13 ft",
    propertyType: "Villa",
    purpose: "Buy",
    description:
      "A premium villa with bright interiors, landscaped outdoor space, and quick access to schools, hospitals, and city roads.",
    amenities: ["Parking Space", "Garden Area", "Modular Kitchen", "24/7 Water Supply", "Balcony"],
    gallery: ["/images/building1.jpg", "/images/building1.jpg", "/images/building1.jpg"],
    listedDate: "2024-06-28",
    bathrooms: "6 ",
    direction: "East",
  },
  {
    id: "property-2",
    image: "/images/building1.jpg",
    price: "85,000 / month",
    title: "City View Apartment",
    location: "Baneshwor, Kathmandu",
    beds: "3 Beds",
    area: "1450 sq.ft",
    roadAccess: "20 ft",
    propertyType: "Apartment",
    purpose: "Rent",
    description:
      "A centrally located apartment with open city views and easy commute to office hubs, shopping centers, and schools.",
    amenities: ["Lift Access", "Security Guard", "Backup Power", "High-Speed Internet", "Covered Parking"],
    gallery: ["/images/building1.jpg", "/images/building1.jpg", "/images/building1.jpg"],
    listedDate: "2024-11-10",
    bathrooms: "2 Baths",
    direction: "North",
  },
  {
    id: "property-3",
    image: "/images/building1.jpg",
    price: "2.1 Crore",
    title: "Family House Near Ring Road",
    location: "Kapan, Kathmandu",
    beds: "5 Beds",
    area: "3.5 Aana",
    roadAccess: "16 ft",
    propertyType: "House",
    purpose: "Buy",
    description:
      "Comfortable family home in a peaceful neighborhood with convenient access to ring road, local markets, and public transport.",
    amenities: ["Private Parking", "Store Room", "Solar Water", "Terrace", "Nearby School"],
    gallery: ["/images/building1.jpg", "/images/building1.jpg", "/images/building1.jpg"],
    listedDate: "2025-02-16",
    bathrooms: "3 Baths",
    direction: "South",
  },
  {
    id: "property-4",
    image: "/images/building1.jpg",
    price: "1.2 Crore",
    title: "Corner Land Plot",
    location: "Itahari, Sunsari",
    beds: "0 Beds",
    area: "10 Dhur",
    roadAccess: "24 ft",
    propertyType: "Land",
    purpose: "Buy",
    description:
      "Corner land parcel ideal for a residential build with wider road access and strong future value potential.",
    amenities: ["Corner Plot", "Wide Road Frontage", "Electricity Access", "Water Line Nearby", "Clear Ownership"],
    gallery: ["/images/building1.jpg", "/images/building1.jpg", "/images/building1.jpg"],
    listedDate: "2023-09-02",
    bathrooms: "0 Baths",
    direction: "West",
  },
  {
    id: "property-5",
    image: "/images/building1.jpg",
    price: "60,000 / month",
    title: "Elegant Apartment for Rent",
    location: "Pulchowk, Lalitpur",
    beds: "2 Beds",
    area: "1100 sq.ft",
    roadAccess: "12 ft",
    propertyType: "Apartment",
    purpose: "Rent",
    description:
      "Well-maintained apartment with modern finishes in a premium neighborhood close to cafes, offices, and transit.",
    amenities: ["Furnished Option", "24/7 Security", "Power Backup", "Water Purifier", "Visitor Parking"],
    gallery: ["/images/building1.jpg", "/images/building1.jpg", "/images/building1.jpg"],
    listedDate: "2024-08-05",
    bathrooms: "1 Bath",
    direction: "North-East",
  },
  {
    id: "property-6",
    image: "/images/building1.jpg",
    price: "3.3 Crore",
    title: "Sunlit Family Villa",
    location: "Dhapasi, Kathmandu",
    beds: "6 Beds",
    area: "5 Aana",
    roadAccess: "14 ft",
    propertyType: "Villa",
    purpose: "Buy",
    description:
      "Spacious sunlit villa with excellent ventilation, large rooms, and modern utilities designed for comfortable family living.",
    amenities: ["Garden Lawn", "CCTV", "Modular Kitchen", "Solar Panels", "Car Parking"],
    gallery: ["/images/building1.jpg", "/images/building1.jpg", "/images/building1.jpg"],
    listedDate: "2024-01-21",
    bathrooms: "4 Baths",
    direction: "South-East",
  },
];
