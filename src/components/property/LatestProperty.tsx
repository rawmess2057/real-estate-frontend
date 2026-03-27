import Link from "next/link";
import PropertyCard from "./PropertyCard";
import { propertyList } from "./propertyData";
import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({ subsets: ["latin"], weight: ["400"] });

export default function LatestProperty() {
  const latest = (() => {
    if (propertyList.length === 0) return [];
    if (propertyList.length >= 8) return propertyList.slice(0, 8);
    const out = [];
    for (let i = 0; i < 8; i++) {
      out.push(propertyList[i % propertyList.length]);
    }
    return out;
  })();

  return (
    <section className="py-12 px-18">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className={`${ebGaramond.className} font-semibold text-[24px]`}>
              Latest Properties
            </h2>
            <p className="text-[#717171] mt-2">
              Explore the most recent listings added to the platform.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {latest.map((property, idx) => (
            <PropertyCard
              key={`${property.id}-${idx}`}
              property={property}
              href={`/properties/${property.id}`}
            />
          ))}
        </div>

        <div className="mt-6 flex justify-center md:justify-end">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 bg-[#7171FF] hover:bg-[#5f63d8] text-white px-4 py-2 rounded-lg font-medium shadow-md transition-colors duration-200"
          >
            View all properties
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
