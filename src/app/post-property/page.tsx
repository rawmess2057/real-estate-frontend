"use client";

import Step1 from "@/components/post-property/step1";
import Step2 from "@/components/post-property/step2";
import Step3 from "@/components/post-property/step3";
import Step4 from "@/components/post-property/step4";
import { ebGaramond } from "@/lib/fonts";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function PostPropertyForm() {
  const [step, setStep] = useState(1);

  const steps = [Step1, Step2, Step3, Step4];
  const CurrentStep = steps[step - 1];

  const stepLabels = [
    "Property Info",
    "Specification",
    "Media & Photos",
    "Contact",
  ];

  return (
    <div>
      <div className="w-full h-42 bg-[linear-gradient(90deg,#7171FF_0%,#7171FF_0.01%,#737373_100%)]
                      flex flex-col items-center justify-center mb-4">
        <h1 className={`${ebGaramond.className} text-white font-bold text-[32px]`}>
          Post Your Property
        </h1>
        <p className="text-[14px] text-white max-w-2xl px-18 text-center mt-2">
        List your property on GharJagga and reach thousands of potential buyers and renters across Nepal.
        </p>
      </div>
      
    <div className="max-w-3xl mx-auto p-6">

      {/* 🔥 STEP HEADER */}
      <div className="flex items-center justify-center mb-10">
  {stepLabels.map((label, index) => {
    const stepNumber = index + 1;
    const isActive = step === stepNumber;
    const isCompleted = step > stepNumber;

    return (
      <div key={index} className="flex items-center">
        
        {/* STEP */}
        <div className="flex flex-col items-center min-w-25">
          <div
            className={`
              w-8 h-8 flex items-center justify-center rounded-full border
              ${isActive ? "bg-[#7171FF] text-white" : ""}
              ${isCompleted ? "bg-[#43A047] text-white" : ""}
            `}
          >
            {stepNumber}
          </div>

          <p className="text-sm mt-2 text-center">
            {label}
          </p>
        </div>

        {/* LINE */}
        {index !== stepLabels.length - 1 && (
          <div
            className={`
              w-12 h-0.5 mx-1
              ${index < step ? "bg-[#7171FF]" : "bg-gray-300"}
            `}
          />
        )}
      </div>
    );
  })}
</div>

      {/* 🔄 STEP CONTENT */}
      <CurrentStep />

      {/* 🔘 BUTTONS */}
      <div className="flex justify-between mt-8 mb-24">
        <button
          onClick={() => step > 1 && setStep(step - 1)}
          className="px-4 py-2 bg-gray-300 rounded flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Previous</span>
          
        </button>

        <button
          onClick={() => step < steps.length && setStep(step + 1)}
          className="px-4  bg-[#7171FF] text-white rounded
                      flex items-center justify-between gap-2"
        >
          <span>
            {step === steps.length ? "Submit" : "Next"}
          </span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
    </div>
  );
}