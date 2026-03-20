"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import { ebGaramond } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import { type PropertyRecord } from "./propertyData";
import {
  BedDouble,
  Bath,
  Dice4,
  Compass,
  Home,
  Ruler,
  Calendar,
  CircleCheck,
  ChevronLeft 
} from "lucide-react";

type PropertyDetailsProps = {
  property: PropertyRecord;
};

function PropertyDetails({ property }: PropertyDetailsProps) {
  return (
    <main className="pt-4 pb-16 px-4 md:px-10 lg:px-16 bg-whte min-h-screen">
      <div className="mb-6">
        <Link
          href="/properties"
          className="text-sm text-[#7171FF] hover:underline"
        >
           <ChevronLeft />
        </Link>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 lg:gap-8">
        <aside className="bg-white border border-[#EAEAEA] rounded-xl p-5 h-fit order-1 lg:order-2 lg:col-start-2 lg:sticky lg:top-24 shadow-sm">
          <h2
            className={`${ebGaramond.className} text-[28px] font-semibold text-[#2E2E2E] mb-1`}
          >
            Enquiry Form
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
              placeholder="Email Address"
              className="w-full h-10 rounded-md border border-[#D4D4D4] px-3 text-sm outline-none focus:ring-2 focus:ring-[#7171FF]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full h-10 rounded-md border border-[#D4D4D4] px-3 text-sm outline-none focus:ring-2 focus:ring-[#7171FF]"
            />
            <textarea
              rows={4}
              placeholder="I am interested in this property. Please share details."
              className="w-full rounded-md border border-[#D4D4D4] p-3 text-sm outline-none focus:ring-2 focus:ring-[#7171FF] resize-none"
            />
            <Button type="submit" className="w-full bg-[#7171FF]">
              Send Enquiry
            </Button>
          </form>
        </aside>

        <div className="order-2 lg:order-1  lg:col-start-1">
          <div className=" overflow-hidden">
            <img
              src={property.image}
              alt={property.title}
              className="w-full rounded-2xl h-[320px] md:h-[420px] lg:h-[500px] object-cover"
            />
            <div className="p-5 border border-[#EAEAEA]  mt-4 rounded-4xl  md:p-6">
              <h1
                className={`${ebGaramond.className} text-[32px] px-8 font-semibold text-[#2E2E2E] leading-tight`}
              >
                {property.title}
              </h1>
              <div className="flex px-8 items-center gap-2 mt-3">
                <img src="/images/vector3.svg" alt="location" />
                <p className="text-sm text-[#5D5D5D] font-medium">
                  {property.location}
                </p>
              </div>
              <p className="text-2xl px-8 md:text-3xl EB Garamond font-extrabold text-[#2B44D6] mt-2">
                {property.price}
              </p>
              :
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:px-32 gap-10 mt-5">
                {[
                  {
                    icon: <BedDouble />,
                    label: "Bedrooms",
                    value: property.beds,
                  },
                  {
                    icon: <Bath />,
                    label: "Bathrooms",
                    value: property.bathrooms ?? "—",
                  },
                  { icon: <Dice4 />, label: "Area", value: property.area },
                  {
                    icon: <Compass />,
                    label: "Direction",
                    value: property.direction ?? "—",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border bg-[#F8F8F8] font-bold border-[#E5E5E5] p-4 flex flex-col items-center text-center gap-2"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full  text-[#4754C5] text-lg">
                      {item.icon}
                    </span>
                    <p className="text-xl font-semibold text-[#2E2E2E]">
                      {item.value}
                    </p>
                    <p className="text-sm text-[#7A7A7A]">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 lg:px-32 sm:grid-cols-3 gap-3">
                {[
                  {
                    icon: <Home className="h-6 w-6" />,
                    label: "Type",
                    value: property.propertyType,
                  },
                  {
                    icon: <Ruler className="h-6 w-6" />,
                    label: "Road Width",
                    value: property.roadAccess,
                  },
                  {
                    icon: <Calendar className="h-6 w-6" />,
                    label: "Listed",
                    value: property.listedDate ?? "—",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 rounded-lg p-3 bg-white"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md  text-[#4754C5]">
                      {item.icon}
                    </span>
                    <div className="flex flex-col">
                      <p className="text-xs font-bold text-[#7A7A7A]">
                        {item.label}
                      </p>
                      <p className="font-medium text-[#2E2E2E]">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7 px-8">
                <h2
                  className={`${ebGaramond.className} text-[28px] font-semibold text-[#2E2E2E] mb-2`}
                >
                  Description
                </h2>
                <p className="text-[#5F5F5F] leading-7">
                  {property.description}
                </p>
              </div>
              <div className="mt-7 px-8">
                <h2
                  className={`${ebGaramond.className} text-[28px] font-semibold text-[#2E2E2E] mb-3`}
                >
                  Amenities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                  {property.amenities.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-[#4A4A4A]"
                    >
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#81EDDF] text-[#4754C5]">
                        <CircleCheck className="h-3 w-3" />
                      </span>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Leaflet map */}
            </div>
            <div className="mt-7  lg:px-8 border border-[#EAEAEA] rounded-lg p-4">
              <h2
                className={`${ebGaramond.className}   text-[28px] font-semibold text-[#2E2E2E] mb-8`}
              >
                Property Location
              </h2>
              {(() => {
                const coordsMap: Record<string, [number, number]> = {
                  "Sanepa, Bhaktapur": [27.6686, 85.324],
                  "Baneshwor, Kathmandu": [27.7126, 85.3242],
                  "Kapan, Kathmandu": [27.7167, 85.3521],
                  "Itahari, Sunsari": [26.6667, 87.2667],
                  "Pulchowk, Lalitpur": [27.6667, 85.3167],
                  "Dhapasi, Kathmandu": [27.717, 85.35],
                };

                const defaultCenter: [number, number] = [27.709, 85.324];
                const center = coordsMap[property.location] ?? defaultCenter;
                const hasCoords = !!coordsMap[property.location];

                const customIcon = L.divIcon({
                  className: "",
                  html: '<div style="width:18px;height:18px;border-radius:50%;background:#4754C5;border:2px solid white;"></div>',
                  iconSize: [18, 18],
                  iconAnchor: [9, 9],
                });

                return (
                  <div className="w-full lg:px-8 h-64 md:h-96 rounded-md overflow-hidden border border-[#EAEAEA]">
                    <MapContainer
                      center={center}
                      zoom={13}
                      scrollWheelZoom={false}
                      className="w-full h-full"
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      {hasCoords && (
                        <Marker position={center} icon={customIcon}>
                          <Popup>
                            <div className="font-medium">{property.title}</div>
                            <div className="text-sm text-gray-600">
                              {property.location}
                            </div>
                          </Popup>
                        </Marker>
                      )}
                    </MapContainer>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PropertyDetails;
