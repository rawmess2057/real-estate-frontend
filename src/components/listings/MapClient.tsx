"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type MapClientProps = {
  address: string;
  className?: string;
};

export default function MapClient({ address, className }: MapClientProps) {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const defaultCenter: [number, number] = [27.7172, 85.3240]; // Kathmandu fallback

  useEffect(() => {
    // Try to fix default icon path issues in some bundlers
    try {
      // @ts-ignore
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconUrl: "/images/marker-icon.png",
        iconRetinaUrl: "/images/marker-icon-2x.png",
        shadowUrl: "/images/marker-shadow.png",
      });
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!address) return;
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`,
        );
        const data = await res.json();
        if (!cancelled && Array.isArray(data) && data.length > 0) {
          setPosition([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
        }
      } catch (e) {
        // ignore
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [address]);

  const center = position ?? defaultCenter;

  return (
    <div className={className}>
      <MapContainer center={center} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>{address}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
