"use client";

import React, { useEffect, useRef, useState } from "react";
import { ebGaramond } from "@/lib/fonts";

type Props = {
  initialEmail?: string;
  onVerify?: (email: string, code: string) => void;
  onChangeEmail?: () => void;
};

export default function Verification({
  initialEmail = "",
  onVerify,
  onChangeEmail,
}: Props) {
  const [email] = useState<string>(initialEmail || "youremail@gmail.com");
  const [code, setCode] = useState<string>("");
  const [digits, setDigits] = useState<string[]>(["", "", "", "", "", ""]);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const [resendTimer, setResendTimer] = useState<number>(30);
  const [isResending, setIsResending] = useState<boolean>(false);

  useEffect(() => {
    if (resendTimer <= 0) return;
    const t = setTimeout(() => setResendTimer((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [resendTimer]);

  const handleVerify = (e?: React.FormEvent) => {
    e?.preventDefault();
    const joined = digits.join("");
    setCode(joined);
    onVerify?.(email, joined);
  };

  const handleResend = async () => {
    if (resendTimer > 0 || isResending) return;
    setIsResending(true);
    try {
      // TODO: call API to resend code
      await new Promise((r) => setTimeout(r, 700));
      setResendTimer(30);
    } finally {
      setIsResending(false);
    }
  };

  const focusInput = (index: number) => {
    const el = inputsRef.current[index];
    el?.focus();
    el?.select();
  };

  const handleDigitChange = (value: string, index: number) => {
    const digit = value.replace(/[^0-9]/g, "").slice(0, 1);
    const next = [...digits];
    next[index] = digit;
    setDigits(next);
    if (digit && index < 5) focusInput(index + 1);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      focusInput(index - 1);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (!pasted) return;
    const next = digits.map((d, i) => pasted[i] || "");
    setDigits(next);
    const lastFilled = Math.min(pasted.length - 1, 5);
    focusInput(lastFilled + 1 > 5 ? 5 : lastFilled);
  };

  const formatTimer = (s: number) => {
    const mm = Math.floor(s / 60)
      .toString()
      .padStart(2, "0");
    const ss = (s % 60).toString().padStart(2, "0");
    return `${mm}:${ss}`;
  };

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 bg-white rounded-2xl shadow-lg">
      <h1
        className={`${ebGaramond.className} text-3xl md:text-4xl font-medium text-center`}
      >
        Verify Your Email
      </h1>
      <p className="text-base text-gray-600 text-center mt-3">
        Enter the six digit code sent to your email
      </p>
      <hr className="border border-gray-400 my-3" />
      <form onSubmit={handleVerify} className=" space-y-2">
        <div>
          <p className="text-sm text-center text-gray-600 mb-1">
            Please enter the code sent to:
          </p>
          <div className="w-full text-center">
            <div className="text-lg font-semibold">{email}</div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">&nbsp;</label>
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            {digits.map((d, i) => (
              <input
                key={i}
                ref={(el) => (inputsRef.current[i] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={d}
                onChange={(e) => handleDigitChange(e.target.value, i)}
                onKeyDown={(e) => handleKeyDown(e as any, i)}
                onPaste={i === 0 ? handlePaste : undefined}
                className="w-12 sm:w-14 md:w-16 h-12 border-2 border-gray-300 rounded-sm text-center text-xl focus:outline-none focus:border-indigo-500"
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white py-3 mt-4 px-6 md:px-12 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
              disabled={digits.join("").length !== 6}
            >
              Verify
            </button>
          </div>

          <hr className="border border-gray-400 my-6" />

          <div className="flex items-center justify-center gap-4 text-sm text-gray-700">
            <span>Didn't receive a code?</span>
            <button
              type="button"
              onClick={handleResend}
              disabled={resendTimer > 0 || isResending}
              className="text-indigo-600 hover:underline disabled:text-gray-400"
            >
              Resend Code
            </button>
            <button
              type="button"
              onClick={() => onChangeEmail?.()}
              className="text-indigo-600 hover:underline"
            >
              Change Email
            </button>
          </div>

          <hr className="border border-gray-400 my-2" />

          <div className="text-center text-sm text-gray-600">
            Resend in {formatTimer(resendTimer)}
          </div>
        </div>
      </form>
    </div>
  );
}
