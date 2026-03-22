"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ebGaramond } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import { type PropertyRecord } from "./propertyData";
import {  ChevronLeft } from "lucide-react";

const PropertyMap = dynamic(() => import("./PropertyMap"), { ssr: false });

type PropertyDetailsProps = {
  property: PropertyRecord;
};

function PropertyDetails({ property }: PropertyDetailsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <main
      className={`${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } transition-all duration-500 ease-out pt-4 pb-16 px-4 md:px-10 lg:px-30 bg-[#F8F8F8] min-h-screen`}
    >
      <div className="mb-6 bg-[#FFFFFF] rounded-full inline-block  p-2">
        <Link
          href="/properties"
          className="text-lg  text-[#7171FF] hover:underline"
        >
          <ChevronLeft />
        </Link>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 lg:gap-8">
        <aside className="bg-white border border-[#EAEAEA] rounded-xl p-5 h-fit order-2 lg:order-2 lg:col-start-2 lg:sticky lg:top-24 shadow-sm">
          <h2
            className={`${ebGaramond.className} text-[25px] font-semibold text-[#2E2E2E] mb-1`}
          >
            Interested in this property?
          </h2>
          <p className="text-sm text-[#6A6A6A] mb-5">
            Ask for price details, visit time, or availability.
          </p>

          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full h-10 rounded-md border border-[#D4D4D4] px-3 text-sm outline-none focus:ring-2 focus:ring-[#7171FF]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full h-10 rounded-md border border-[#D4D4D4] px-3 text-sm outline-none focus:ring-2 focus:ring-[#7171FF]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full h-10 rounded-md border border-[#D4D4D4] px-3 text-sm outline-none focus:ring-2 focus:ring-[#7171FF]"
            />
            <textarea
              rows={4}
              placeholder="Hi, I'm interested in this property: Modern Luxury Villa with Garden"
              className="w-full rounded-md border border-[#D4D4D4] p-3 text-sm outline-none focus:ring-2 focus:ring-[#7171FF] resize-none"
            />
            <Button type="submit" className="w-full bg-[#7171FF]">
              Send Enquiry
            </Button>
          </form>
        </aside>

        <div className="order-1 lg:order-1 lg:col-start-1">
          <div className=" overflow-hidden">
            <img
              src={property.image}
              alt={property.title}
              className="w-full rounded-2xl h-[320px] md:h-[420px] lg:h-[500px] object-cover"
            />
            <div className="p-5 border bg-white border-[#EAEAEA]  mt-4 rounded-4xl  md:p-6">
              <h1
                className={`${ebGaramond.className} text-[32px] md:px-4  font-semibold text-[#2E2E2E] leading-tight`}
              >
                {property.title}
              </h1>
              <div className="flex items-center md:px-4 gap-2 mt-3">
                <img src="/images/vector3.svg" alt="location" />
                <p className="text-sm text-[#5D5D5D] font-medium">
                  {property.location}
                </p>
              </div>
              <p
                className={`${ebGaramond.className} md:px-4 text-2xl md:text-3xl font-extrabold text-[#2B44D6]  mt-4`}
              >
                {property.price}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 px-4 md:px-8 lg:px-24 gap-10 mt-5">
                {[
                  {
                    imageSrc: "/images/bed.svg",
                    label: "Bedrooms",
                    value: property.beds,
                  },
                  {
                    imageSrc: "/images/bath.svg",
                    label: "Bathrooms",
                    value: property.bathrooms ?? "—",
                  },
                  {
                    imageSrc: "/images/dice.svg",
                    label: "Area",
                    value: property.area,
                  },
                  {
                    imageSrc: "/images/direction.svg",
                    label: "Direction",
                    value: property.direction ?? "—",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border bg-[#F8F8F8] font-bold border-[#E5E5E5] lg:mt-2 p-4 flex flex-col items-center text-center gap-2"
                  >
                    <span className="inline-flex h-8 w-12 items-center justify-center rounded-full text-[#4754C5] text-lg">
                      <img
                        src={item.imageSrc}
                        alt={item.label}
                        className="h-8 w-8 object-contain"
                      />
                    </span>
                    <p
                      className={`${ebGaramond.className} text-xl font-semibold text-[#2E2E2E]`}
                    >
                      {item.value}
                    </p>
                    <p className="text-sm text-[#7A7A7A]">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 px-4 md:px-8 lg:px-24 ">
                {[
                  {
                    imageSrc: "/images/property-type-3.svg",
                    label: "Type",
                    value: property.propertyType,
                  },
                  {
                    imageSrc: "/images/property-type-2.svg",
                    label: "Road Width",
                    value: property.roadAccess,
                  },
                  {
                    imageSrc: "/images/property-type-1.svg",
                    label: "Listed",
                    value: property.listedDate ?? "—",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-0 rounded-lg p-0 mt-2 bg-white"
                  >
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-md text-[#000000]">
                      <img
                        src={item.imageSrc}
                        alt={item.label}
                        className="h-13 w-13 object-contain"
                      />
                    </span>
                    <div className="flex flex-col ">
                      <p className="text-xs font-bold text-[#7A7A7A] leading-tight">
                        {item.label}
                      </p>
                      <p className="font-medium text-[#2E2E2E]">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7 px-4 ">
                <h2
                  className={`${ebGaramond.className} text-[28px] font-semibold text-[#2E2E2E] mb-2`}
                >
                  Description
                </h2>
                <p className="text-[#5F5F5F] leading-7">
                  {property.description}
                </p>
              </div>
              <div className="mt-7 px-4 ">
                <h2
                  className={`${ebGaramond.className} text-[28px] font-semibold text-[#2E2E2E] mb-3`}
                >
                  Amenities
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:mb-2">
                  {property.amenities.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-[#4A4A4A]"
                    >
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full  ">
                        <img
                          src="/images/tick.svg"
                          alt="tick"
                          className="h-6 w-6"
                        />
                      </span>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Leaflet map */}
            </div>
            <div className="mt-7 bg-white px-4 md:px-12 border border-[#EAEAEA] rounded-lg p-4">
              <h2
                className={`${ebGaramond.className}   text-[28px] font-semibold text-[#2E2E2E] mb-4`}
              >
                Location
              </h2>
              <PropertyMap property={property} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PropertyDetails;
