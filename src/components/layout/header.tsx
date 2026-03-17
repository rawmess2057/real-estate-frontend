"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Anton } from "next/font/google";


const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

function Header() {
  const pathName = usePathname();
  const router = useRouter();
  const isLoginPage: boolean = pathName === "/login";


  if (isLoginPage) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white">
      <div className=" flex h-20  items-center justify-evenly mx-31.25">
         {/* Logo */}
        <Link href="/" className="flex items-center">
          <span
            className={`${anton.className}  text-2xl p-0 bg-[linear-gradient(180deg,#7171FF_21.63%,#06293E_100%)] bg-clip-text text-transparent`}
          >
            GharJagga
          </span>
        </Link>

        {/* Nav - evenly spaced */}
        <nav className="flex-1 flex justify-evenly ml-20">
          <Link href="/" className="text-[16px] font-medium">
            Home
          </Link>
          <Link href="/" className="text-[16px] font-medium">
            Properties
          </Link>
          <Link href="/" className="text-[16px] font-medium">
            Tools
          </Link>
          <Link href="/agent" className="text-[16px] font-medium">
            Agents
          </Link>
          <Link href="/about" className="text-[16px] font-medium">
            About Us
          </Link>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-6">
          <Button className="px-4 py-2 bg-[#7171FF] text-white">Post Property</Button>
          <Button className="px-4 py-2 bg-white text-black border-2 border-[#7171FF]">Login/Signup</Button>
        </div>

      </div>
    </header>
  );
}

export default Header;
