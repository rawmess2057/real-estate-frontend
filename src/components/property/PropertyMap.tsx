"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { type PropertyRecord } from "./propertyData";

type PropertyMapProps = {
  property: PropertyRecord;
};

export default function PropertyMap({ property }: PropertyMapProps) {
  const coordsMap: Record<string, [number, number]> = {
    "Sanepa, Bhaktapur": [27.6686, 85.324],
    "Baneshwor, Kathmandu": [27.7126, 85.3242],
    "Kapan, Kathmandu": [27.7167, 85.3521],
    "Itahari, Sunsari": [26.6667, 87.2667],
    "Pulchowk, Lalitpur": [27.6667, 85.3167],
    "Dhapasi, Kathmandu": [27.717, 85.35],
  };

  const defaultCenter: [number, number] = [27.709, 85.324];
  const center = (coordsMap as any)[property.location] ?? defaultCenter;
  const hasCoords = !!(coordsMap as any)[property.location];

  const customIcon = L.divIcon({
    className: "",
    html: '<div style="width:18px;height:18px;border-radius:50%;background:#4754C5;border:2px solid white;"></div>',
    iconSize: [18, 18],
    iconAnchor: [9, 9],
  });

  return (
    <div className="w-full px-0 md:px-0 h-64 md:h-96 rounded-md overflow-hidden border border-[#EAEAEA] relative z-0">
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full relative z-0 leaflet-map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {hasCoords && (
          <Marker position={center} icon={customIcon}>
            <Popup>
              <div className="font-medium">{property.title}</div>
              <div className="text-sm text-gray-600">{property.location}</div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
