import { ebGaramond } from "@/lib/fonts";
import PropertyCard, { type Property } from "./PropertyCard";

const properties: Property[] = [
  {
    id: "prop-1",
    image: "/images/building1.jpg",
    price: "4.5 Crore",
    title: "Modern Villa With Garden",
    location: "Sanepa, Bhaktapur",
    beds: "8 Beds",
    area: "4 Aana",
    roadAccess: "3 fit",
  },
  {
    id: "prop-2",
    image: "/images/building1.jpg",
    price: "4.5 Crore",
    title: "Modern Villa With Garden",
    location: "Sanepa, Bhaktapur",
    beds: "8 Beds",
    area: "4 Aana",
    roadAccess: "3 fit",
  },
  {
    id: "prop-3",
    image: "/images/building1.jpg",
    price: "4.5 Crore",
    title: "Modern Villa With Garden",
    location: "Sanepa, Bhaktapur",
    beds: "8 Beds",
    area: "4 Aana",
    roadAccess: "3 fit",
  },
  {
    id: "prop-4",
    image: "/images/building1.jpg",
    price: "4.5 Crore",
    title: "Modern Villa With Garden",
    location: "Sanepa, Bhaktapur",
    beds: "8 Beds",
    area: "4 Aana",
    roadAccess: "3 fit",
  },
  {
    id: "prop-5",
    image: "/images/building1.jpg",
    price: "4.5 Crore",
    title: "Modern Villa With Garden",
    location: "Sanepa, Bhaktapur",
    beds: "8 Beds",
    area: "4 Aana",
    roadAccess: "3 fit",
  },
];

function ListingPage() {
  return (
    <div className="mt-8" id="properties-list">
      <div className="ml-28">
        <p className="text-[18px] font-medium text-[#7171FF]">
          Latest Properties
        </p>
        <h1
          className={`${ebGaramond.className} font-medium text-[32px] text-[#434343] mb-6`}
        >
          Discover Our Best Listings
        </h1>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default ListingPage;
