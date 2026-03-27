"use client";
import { ebGaramond } from "@/lib/fonts";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

function RentPropertypage() {
  const router = useRouter();
  return (
    <div className="bg-[#FAFAFA] py-8 px-18">
      <div className=" grid md:grid-cols-2 grid-cols-1 justify-items-center md:gap-y-2 gap-y-12">
        <div className="md:justify-items-start md:text-start text-center">
          <h1
            className={`${ebGaramond.className} font-semibold text-[24px] md:pr-40`}
          >
            READY TO SELL OR RENT YOUR PROPERTY?
          </h1>
          <p className="text-[#717171] mt-4 mb-5">
            List your property on Nepal's most trusted real estate platform and
            connect with thousands of genuine buyers and tenants.
          </p>

          <div className="flex justify-center items-center gap-6">
            <div className="flex items-center gap-2">
              <img src="/images/calculator.svg" alt="" />
              <p className="font-medium text-[16px] ">Free Listings</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="/images/max-reach.svg" alt="" />
              <p className="font-medium text-[16px] ">Maximum Reach</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="/images/verified-buyers.svg" alt="" />
              <p className="font-medium text-[16px] ">Verified Buyers</p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-y-2 justify-center md:pl-40 ">
          <Button
            className="px-4 py-2 bg-[#7171FF] text-white gap-2"
            onClick={() => router.push("/post-property")}
          >
            Post Your Property
            <span className="text-2xl inline-block transform transition-transform duration-200 hover:translate-x-1 pl-2">
              →
            </span>
          </Button>
          <p className="text-[12px] text-[#717171]">
            No hidden charges. Reach genuine buyers instantly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RentPropertypage;
