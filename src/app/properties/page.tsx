"use client";

import { useMemo, useState } from "react";
import { ebGaramond } from "@/lib/fonts";
import PropertyCard from "@/components/listings/PropertyCard";
import { Button } from "@/components/ui/button";
import {
  propertyList,
  type PropertyRecord,
} from "@/components/listings/propertyData";

export default function PropertiesPage() {
  const [search, setSearch] = useState("");
  const [purpose, setPurpose] = useState<"All" | "Buy" | "Rent">("All");
  const [propertyType, setPropertyType] = useState<
    "All" | PropertyRecord["propertyType"]
  >("All");
  const [showPropertyTypes, setShowPropertyTypes] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const [location, setLocation] = useState<string>("All");

  const locations = useMemo(() => {
    const uniqueLocations = Array.from(
      new Set(propertyList.map((item) => item.location)),
    );
    return ["All", ...uniqueLocations];
  }, []);

  const filteredProperties = useMemo(() => {
    return propertyList.filter((item) => {
      const bySearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.location.toLowerCase().includes(search.toLowerCase());
      const byPurpose = purpose === "All" ? true : item.purpose === purpose;
      const byType =
        propertyType === "All" ? true : item.propertyType === propertyType;
      const byLocation = location === "All" ? true : item.location === location;

      return bySearch && byPurpose && byType && byLocation;
    });
  }, [search, purpose, propertyType, location]);

  const resetFilters = () => {
    setSearch("");
    setPurpose("All");
    setPropertyType("All");
    setLocation("All");
  };

  return (
    <main className="pt-4 pb-16 px-4 md:px-10 lg:px-28 bg-[#FAFAFA] min-h-screen">
      <div className="mb-8">
        <p className="text-[18px] font-medium text-[#7171FF]">
          Explore Our Properties
        </p>
        <h1
          className={`${ebGaramond.className} text-[34px] font-semibold text-[#2E2E2E]`}
        >
          Find The Right Property For You
        </h1>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 lg:gap-7">
        <aside className="filters-panel bg-white border border-[#EAEAEA] rounded-xl p-5 h-fit lg:sticky lg:top-26">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-semibold text-[#2E2E2E]">Filters</h2>
            <Button
              type="button"
              onClick={resetFilters}
              variant="outline"
              className="text-xs px-3 h-8"
            >
              Reset
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="search"
                className="text-sm font-medium text-[#4E4E4E] block mb-1.5"
              >
                Search
              </label>
              <input
                id="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search properties..."
                className="w-full h-10 rounded-md border border-[#D4D4D4] px-3 text-sm outline-none focus:ring-2 focus:ring-[#7171FF]"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-[#4E4E4E] block mb-1.5">
                Property Status
              </p>
              <div className="grid grid-cols-3 gap-2">
                {(["All", "Buy", "Rent"] as const).map((item) => (
                  <Button
                    key={item}
                    type="button"
                    onClick={() => setPurpose(item)}
                    variant={purpose === item ? "default" : "outline"}
                    className={purpose === item ? "bg-[#7171FF]" : ""}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="propertyType"
                className="text-sm font-medium text-[#4E4E4E] block mb-1.5"
              >
                Property Type
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowPropertyTypes((s) => !s)}
                  className="w-full h-10 rounded-md border border-[#D4D4D4] px-3 text-sm bg-white text-left flex items-center justify-between outline-none focus:ring-2 focus:ring-[#7171FF]"
                >
                  <span className={propertyType === "All" ? "text-[#6D6D6D]" : "text-[#2E2E2E]"}>
                    {propertyType}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-4 h-4 text-[#6D6D6D] transition-transform duration-200 ${showPropertyTypes ? "rotate-180" : "rotate-0"}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`property-dropdown absolute left-0 right-0 mt-1 bg-white border border-[#EAEAEA] rounded-md overflow-hidden shadow-sm z-20 transition-all duration-200 ease-out ${
                    showPropertyTypes ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {(["All", "House", "Apartment", "Villa", "Land"] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        setPropertyType(opt as "All" | PropertyRecord["propertyType"]);
                        setShowPropertyTypes(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-sm ${propertyType === opt ? "bg-[#7171FF] text-white" : "text-[#4E4E4E]"}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="location"
                className="text-sm font-medium text-[#4E4E4E] block mb-1.5"
              >
                Location
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowLocations((s) => !s)}
                  className="w-full h-10 rounded-md border border-[#D4D4D4] px-3 text-sm bg-white text-left flex items-center justify-between outline-none focus:ring-2 focus:ring-[#7171FF]"
                >
                  <span className={location === "All" ? "text-[#6D6D6D]" : "text-[#2E2E2E]"}>
                    {location}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-4 h-4 text-[#6D6D6D] transition-transform duration-200 ${showLocations ? "rotate-180" : "rotate-0"}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`property-dropdown absolute left-0 right-0 mt-1 bg-white border border-[#EAEAEA] rounded-md overflow-hidden shadow-sm z-20 transition-all duration-200 ease-out ${
                    showLocations ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {locations.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        setLocation(opt);
                        setShowLocations(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-sm ${location === opt ? "bg-[#7171FF] text-white" : "text-[#4E4E4E]"}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div>
          {purpose !== "All" && (
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-[#6D6D6D]">
                {filteredProperties.length} properties found
              </p>
            </div>
          )}

          {filteredProperties.length === 0 ? (
            <div className="rounded-xl border border-dashed border-[#D4D4D4] bg-white p-12 text-center">
              <h3 className="text-lg font-semibold text-[#353535]">
                No properties matched
              </h3>
              <p className="text-sm text-[#707070] mt-2 mb-4">
                Try changing one or more filters to see more listings.
              </p>
              <Button
                type="button"
                onClick={resetFilters}
                className="bg-[#7171FF]"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5 justify-items-center">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  href={`/properties/${property.id}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
