import { EB_Garamond, Poppins } from "next/font/google";

export const ebGaramond = EB_Garamond({
  weight: ["500","600"],
  subsets: ["latin"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});