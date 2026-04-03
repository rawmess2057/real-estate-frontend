"use client";

import Verification from "@/components/verification/Verification";
import { useRouter } from "next/navigation";

export default function VerifyPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <Verification
        initialEmail={""}
        onVerify={(email, code) => {
          // TODO: wire real verification API
          console.log("verify", email, code);
          router.push("/login");
        }}
        onChangeEmail={() => router.push("/login")}
      />
    </main>
  );
}
