import { ebGaramond } from "@/lib/fonts";


 function LoginPage() {
 
  return (
    <div className="bg-red-500 w-screen h-screen">
      <div className="w-185 h-87 bg-white rounded-xl relative">
        <div className="w-85 h-full">
          <img src="/images/login.jpg" alt="" 
          className="h-full object-cover"/>
        </div>

        <div className="py-8 px-16">
          <div>
            <h1 className={`${ebGaramond.className}`}>
              Create Account</h1>
            
            <div>
              <form action="">
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder="Enter your full name"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;