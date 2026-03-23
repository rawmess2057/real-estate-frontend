"use client";

import { ebGaramond } from "@/lib/fonts";
import Image from "next/image";
import { useState } from "react";

export default function ToolsPage() {
  const [ropaniVal, setRopaniVal] = useState<number | "">(1);
  const [aanaVal, setAanaVal] = useState<number | "">(0);
  const [paisaVal, setPaisaVal] = useState<number | "">(0);
  const [daamVal, setDaamVal] = useState<number | "">(0);

  const [bighaVal, setBighaVal] = useState<number | "">(0);
  const [katthaVal, setKatthaVal] = useState<number | "">(0);
  const [dhurVal, setDhurVal] = useState<number | "">(0);

  const [sqftInput, setSqftInput] = useState<number | "">(0);
  const [sqmInput, setSqmInput] = useState<number | "">(0);

  const format = (n: number) =>
    n.toLocaleString(undefined, { maximumFractionDigits: 2 });

  // Derived values for Ropani system
  const totalRopani =
    Number(ropaniVal || 0) +
      Number(aanaVal || 0) / 16 +
      Number(paisaVal || 0) / 64 +
      Number(daamVal || 0) / 256 || 0;
  const ropaniSqft = totalRopani * 5476;
  const ropaniSqm = ropaniSqft * 0.092903;

  // Derived values for Bigha system (using reference values)
  // 1 Bigha = 72900 sq.ft, 1 Kattha = 3645 sq.ft, 1 Dhur = 182.25 sq.ft
  const bighaSqft =
    Number(bighaVal || 0) * 72900 +
    Number(katthaVal || 0) * 3645 +
    Number(dhurVal || 0) * 182.25;
  const bighaSqm = bighaSqft * 0.092903;

  // sync sqft/sqm two-way
  const onSqftChange = (v: number | "") => {
    setSqftInput(v);
    setSqmInput(v === "" ? "" : Number(v) * 0.092903);
  };

  const onSqmChange = (v: number | "") => {
    setSqmInput(v);
    setSqftInput(v === "" ? "" : Number(v) / 0.092903);
  };

  return (
    <main className="min-h-screen px-0">
      <section>
        <div className="w-full">
          <div className="relative h-60 md:h-70 w-full">
            <Image
              src="/images/tool-image.jpg"
              alt="Tools"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 flex items-center justify-center text-center px-6">
              <div className="text-white">
                <h1 className="text-3xl md:text-4xl font-bold drop-shadow">
                  Measure Smarter. Plan Better.
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 mt-8 grid grid-cols-1 gap-8">
          <article className="p-6  rounded-lg">
            <h2 className="text-2xl font-semibold mb-1">Ropani System</h2>

            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-end">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">
                    Ropani
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={ropaniVal as number}
                    onChange={(e) =>
                      setRopaniVal(
                        e.target.value === "" ? "" : Number(e.target.value),
                      )
                    }
                    className="w-full border-2 border-gray-500 rounded px-3 py-2"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Aana</label>
                  <input
                    type="number"
                    min="0"
                    value={aanaVal as number}
                    onChange={(e) =>
                      setAanaVal(
                        e.target.value === "" ? "" : Number(e.target.value),
                      )
                    }
                    className="w-full border-2 border-gray-500 rounded px-3 py-2"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">
                    Paisa
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={paisaVal as number}
                    onChange={(e) =>
                      setPaisaVal(
                        e.target.value === "" ? "" : Number(e.target.value),
                      )
                    }
                    className="w-full border-2 border-gray-500 rounded px-3 py-2"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Daam</label>
                  <input
                    type="number"
                    min="0"
                    value={daamVal as number}
                    onChange={(e) =>
                      setDaamVal(
                        e.target.value === "" ? "" : Number(e.target.value),
                      )
                    }
                    className="w-full border-2 border-gray-500 rounded px-3 py-2"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-1">Bigha System</h2>
              <div className="flex flex-col md:flex-row gap-3 items-end">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">
                    Bigha
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={bighaVal}
                    placeholder="0"
                    onChange={(e) =>
                      setBighaVal(
                        e.target.value === "" ? "" : Number(e.target.value),
                      )
                    }
                    className="w-full border-2 border-gray-500 rounded px-3 py-2"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">
                    Kattha
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={katthaVal}
                    placeholder="0"
                    onChange={(e) =>
                      setKatthaVal(
                        e.target.value === "" ? "" : Number(e.target.value),
                      )
                    }
                    className="w-full border-2 border-gray-500 rounded px-3 py-2"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Dhur</label>
                  <input
                    type="number"
                    min={0}
                    value={dhurVal}
                    placeholder="0"
                    onChange={(e) =>
                      setDhurVal(
                        e.target.value === "" ? "" : Number(e.target.value),
                      )
                    }
                    className="w-full border-2 border-gray-500 rounded px-3 py-2"
                  />
                </div>
              </div>

              <div className="flex gap-3 items-end">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-1">Bigha System</h2>
                  <label className="block text-sm font-medium mb-1">
                    Square Feet
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={sqftInput as number}
                    onChange={(e) =>
                      onSqftChange(
                        e.target.value === "" ? "" : Number(e.target.value),
                      )
                    }
                    className="w-full border-2 border-gray-500 rounded px-3 py-2"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">
                    Square Meters
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={sqmInput as number}
                    onChange={(e) =>
                      onSqmChange(
                        e.target.value === "" ? "" : Number(e.target.value),
                      )
                    }
                    className="w-full border-2 border-gray-500 rounded px-3 py-2"
                  />
                </div>
                <div className="flex-1" />
                <div className="flex-1" />
              </div>
            </div>

            {/* <div className="space-y-2 mt-4">
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">
                  Ropani Total (decimal)
                </span>
                <span className="font-medium">{format(totalRopani)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">
                  From Ropani — Square Feet
                </span>
                <span className="font-medium">{format(ropaniSqft)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">
                  From Ropani — Square Meters
                </span>
                <span className="font-medium">{format(ropaniSqm)}</span>
              </div>

              <div className="flex justify-between border-t pt-3">
                <span className="text-sm text-slate-600">
                  From Bigha system — Square Feet
                </span>
                <span className="font-medium">{format(bighaSqft)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">
                  From Bigha system — Square Meters
                </span>
                <span className="font-medium">{format(bighaSqm)}</span>
              </div>

              <div className="flex justify-between border-t pt-3">
                <span className="text-sm text-slate-600">Sq Feet (manual)</span>
                <span className="font-medium">
                  {sqftInput === "" ? "" : format(Number(sqftInput || 0))}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">
                  Sq Meters (manual)
                </span>
                <span className="font-medium">
                  {sqmInput === "" ? "" : format(Number(sqmInput || 0))}
                </span>
              </div>
            </div> */}
          </article>
        </div>

        <div className="w-full bg-[#F0F0FD] py-8 mt-6 mb-24">
          <div className="max-w-7xl mx-auto px-8">
            <aside className="p-6 rounded-lg ">
              <h3 className="text-xl font-semibold mb-3">
                Area Converter Information
              </h3>

              <ul className="text-sm text-slate-700 list-disc pl-5 space-y-2">
                <li className="md:justify-between">
                  <span className="font-medium">1 Bigha = </span>
                  <span>
                    20 Kattha = 6772.63 m² = 72900 sq.ft. = 13.31 Ropani
                  </span>
                </li>
                <li className="md:justify-between">
                  <span className="font-medium">1 Katha = </span>
                  <span>20 Dhur = 338.63 m² = 3645 sq.ft.</span>
                </li>
                <li className="md:justify-between">
                  <span className="font-medium">1 Dhur = </span>
                  <span>16.93 m² = 182.25 sq.ft.</span>
                </li>
                <li className="md:justify-between">
                  <span className="font-medium">1 Ropani = </span>
                  <span>
                    16 Aana = 64 Paisa = 508.72 m² = 5476 sq.ft. = 256 Daam = 4
                    llka
                  </span>
                </li>
                <li className="md:justify-between">
                  <span className="font-medium">1 Aana = </span>
                  <span>4 Paisa = 31.80 m² = 342.25 sq.ft. = 16 Daam</span>
                </li>
                <li className="md:justify-between">
                  <span className="font-medium">1 Paisa = </span>
                  <span>4 Daam = 7.95 m² = 85.56 sq.ft.</span>
                </li>
                <li className="md:justify-between">
                  <span className="font-medium">1 Daam = </span>
                  <span>1.99 m² = 21.39 sq.ft.</span>
                </li>
              </ul>

              <p className="mt-4 text-sm text-slate-600">
                The units of measurement of area of land depends on the part of
                the country where they are being used. The Bigha-Katha-Dhur
                measurements are common in the Terai region while the
                Ropani-Aana measurements are common in hilly and mountainous
                regions.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
