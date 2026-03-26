import BlogsPage from "@/components/blogs/page";
import ListingPage from "@/components/listings/page";
import FaqPage from "@/components/questions/page";
import ReviewPage from "@/components/reviews/page";
import BannerPage from "@/components/banner/page";
import MobileAppPage from "@/components/mobileApp/page";
import RentPropertypage from "@/components/rent-property/page";


export default function Home() {
  
  return (
     <main className="m-0 p-0 ">   
      <BannerPage/>
      <ListingPage/>   
      <ReviewPage/>
      <BlogsPage/> 
      <MobileAppPage/>
      <RentPropertypage/>
      <FaqPage/>  
    </main>
  );
}
