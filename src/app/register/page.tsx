import { Button } from "@/components/ui/button";
import { ebGaramond } from "@/lib/fonts";
import Link from "next/link";

function RegisterPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center shadow bg-[#D9D9D9]">
      
      {/* Card */}
      <div className="w-186 h-106 bg-white rounded-xl flex overflow-hidden shadow-accent-foreground md:mx-0 sm:mx-28 mx-8">
        
        {/* Left Image */}
        <div className="md:w-1/2 md:block hidden h-full relative">
          <img
            src="/images/login.jpg"
            alt=""
            className="w-full h-full object-cover "
          />
            <div className="absolute inset-0 backdrop-blur-[1px] bg-white/20" />
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          
          <h1 className={`${ebGaramond.className} text-[24px] font-medium text-center`}>
            Create Account
          </h1>

          <form className="flex flex-col items-center gap-2">
            
            <div>
              <label className="block text-[#6F6F6F] text-[16px] font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className=" bg-[#EDEDED] placeholder:text-[#5D5D5D] placeholder:text-[12px] px-8 py-1 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-[#6F6F6F] text-[16px] font-medium">Email</label>
              <input
                type="text"
                placeholder="Enter your Email"
                className=" bg-[#EDEDED] placeholder:text-[#5D5D5D] placeholder:text-[12px] px-8 py-1 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-[#6F6F6F] text-[16px] font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                className=" bg-[#EDEDED] placeholder:text-[#5D5D5D] placeholder:text-[12px] px-8 py-1 rounded-lg"
              />
            </div>

            <Button className="px-12 py-3 my-2 rounded-xl text-[12px] font-normal text-white border bg-[#3939FF]">
               Create Account</Button>
          </form>

          <div className=" flex flex-col items-center justify-center space-y-2">

          <div className="flex items-center gap-2 justify-center">
             <p className="text-[#6F6F6F] text-[12px] font-medium">
               Already have an account? </p>
                <Link href={"/login"} className="text-[#3939FF] text-[12px] font-medium">
                   Log In</Link> 
          </div>

          
          <div className="flex items-center gap-x-2 justify-center">
            <div className="h-0.5 w-5 bg-[#6F6F6F]"/>
            <p className="text-[#6F6F6F] text-xs">OR</p>
            <div className="h-0.5 w-5 bg-[#6F6F6F]"/>
          </div>

          
          <div className="flex items-center justify-center gap-x-8">
            
            <Button className="px-2 py-2 rounded-xl text-[12px] font-normal border-[#5D5D5D] 
            border-2 bg-white "> 
            <div className="flex items-center gap-1">
               <img src="/images/googly.svg" alt="" className="w-4 h-4"/> 
               <p className="text-[10px] text-[#5D5D5D]">
                Sign up with Google</p> 
                </div> 
                </Button>

            <Button className="px-2 py-2 rounded-xl text-[12px] font-normal border-[#5D5D5D] 
            border-2 bg-white "> 
            <div className="flex items-center gap-1">
               <img src="/images/facebook.svg" alt="" className="w-4 h-4"/> 
               <p className="text-[10px] text-[#5D5D5D]">
                Sign up with Google</p> 
                </div> 
                </Button>

          </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default RegisterPage;