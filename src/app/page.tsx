import BlogsPage from "@/components/blogs/page";
import FaqPage from "@/components/questions/page";
import ReviewPage from "@/components/reviews/page";
import BannerPage from "@/components/banner/page";
import MobileAppPage from "@/components/mobileApp/page";
import RentPropertypage from "@/components/rent-property/page";
import LatestProperty from "@/components/property/LatestProperty";
import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function Home() {
  return (
    <main className="m-0 p-0 ">
      <BannerPage />
      <LatestProperty />
      <ReviewPage />
      <BlogsPage />
      <MobileAppPage />
      <RentPropertypage />
      <FaqPage />
    </main>
  );
}
