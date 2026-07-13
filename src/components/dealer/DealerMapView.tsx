"use client";

import "leaflet/dist/leaflet.css";

import { useEffect } from "react";
import L from "leaflet";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";

import {
  MapPin,
  Phone,
  Navigation,
} from "lucide-react";

import type { Dealer } from "@/types/dealer";

type Props = {
  dealers: Dealer[];
};

/* ==========================================================
   CUSTOM MARKER
========================================================== */

const dealerIcon = new L.Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

  iconSize: [25, 41],

  iconAnchor: [12, 41],

  popupAnchor: [1, -34],
});

/* ==========================================================
   AUTO FIT BOUNDS
========================================================== */

function FitBounds({
  dealers,
}: {
  dealers: Dealer[];
}) {
  const map = useMap();

  useEffect(() => {
    const validDealers = dealers.filter(
      (dealer) =>
        typeof dealer.latitude === "number" &&
        typeof dealer.longitude === "number"
    );

    if (!validDealers.length) return;

    const bounds = L.latLngBounds(
      validDealers.map(
        (dealer) =>
          [
            dealer.latitude,
            dealer.longitude,
          ] as [number, number]
      )
    );

    map.fitBounds(bounds, {
      padding: [60, 60],
    });
  }, [dealers, map]);

  return null;
}

/* ==========================================================
   MAP
========================================================== */

export default function DealerMapView({
  dealers,
}: Props) {
  const validDealers = dealers.filter(
    (dealer) =>
      typeof dealer.latitude === "number" &&
      typeof dealer.longitude === "number"
  );

  return (
    <div className="h-162.5 w-full">

      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        scrollWheelZoom
        className="h-full w-full"
      >
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FitBounds dealers={validDealers} />

        {validDealers.map((dealer) => (
          <Marker
            key={dealer.id}
            position={
              [
                dealer.latitude,
                dealer.longitude,
              ] as [number, number]
            }
            icon={dealerIcon}
          >
            <Popup
              minWidth={280}
              maxWidth={320}
            >
              <div className="space-y-4 p-1">

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {dealer.dealerName}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {dealer.owner}
                  </p>
                </div>

                <div className="flex items-start gap-2 text-sm">
                  <MapPin
                    size={16}
                    className="mt-1 text-emerald-600"
                  />

                  <span>{dealer.address}</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Phone
                    size={16}
                    className="text-emerald-600"
                  />

                  <a
                    href={`tel:${dealer.phone}`}
                    className="text-emerald-700 hover:underline"
                  >
                    {dealer.phone}
                  </a>
                </div>

                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Available Products
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {dealer.products.map((product) => (
                      <span
                        key={product}
                        className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${dealer.latitude},${dealer.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
                >
                  <Navigation size={16} />
                  Get Directions
                </a>

              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

    </div>
  );
}