"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Anton } from "next/font/google";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

function Header() {
  const pathName = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white">
      <div className="flex h-20 items-center lg:justify-evenly mx-12  md:mx-28 justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span
            className={`${anton.className} text-2xl p-0 bg-[linear-gradient(180deg,#7171FF_21.63%,#06293E_100%)] bg-clip-text text-transparent`}
          >
            GharJagga
          </span>
        </Link>

        {/* Nav - only LARGE and above */}
        <nav className="hidden lg:flex flex-1 justify-evenly">
          <Link href="/" className="text-[16px] font-medium">Home</Link>
          <Link href="/" className="text-[16px] font-medium">Properties</Link>
          <Link href="/" className="text-[16px] font-medium">Tools</Link>
          <Link href="/agent" className="text-[16px] font-medium">Agents</Link>
          <Link href="/about" className="text-[16px] font-medium">About Us</Link>
        </nav>

        {/* Buttons - visible only on MEDIUM and above */}
        <div className="hidden md:flex items-center gap-6">
          <Button
            className="px-4 py-2 bg-[#7171FF] text-white cursor-pointer"
            onClick={() => router.push("/post-property")}
          >
            Post Property
          </Button>
          <Button
            onClick={() => router.push("/login")}
            className="px-4 py-2 bg-white text-black border-2 border-[#7171FF]
                       hover:bg-[#7171FF] hover:text-white cursor-pointer"
          >
            Login/Signup
          </Button>
        </div>

        {/* Hamburger - hidden on LARGE */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile + Medium Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t px-6 py-4 flex flex-col gap-4">
          <Link href="/">Home</Link>
          <Link href="/">Properties</Link>
          <Link href="/">Tools</Link>
          <Link href="/agent">Agents</Link>
          <Link href="/about">About Us</Link>

          {/* Buttons only for SMALL */}
          <div className="flex flex-col gap-3 md:hidden">
            <Button
              className="bg-[#7171FF] text-white"
              onClick={() => router.push("/post-property")}
            >
              Post Property
            </Button>

            <Button
              onClick={() => router.push("/login")}
              className="bg-white text-black border-2 border-[#7171FF]"
            >
              Login/Signup
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;