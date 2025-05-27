import React from "react";
import "../../styles/Login.css"
const GoogleIcon = () => <span className="googleimg" />;
const FacebookIcon = () => <span className="fbimg" />;
const StarIcon = () => <span className="bimg" />;
const StoreIcon = () => <span className="bimg" />;
// Reusable Social Button
const SocialButton = ({ icon, text }) => (
  <button className="flex items-center gap-4 w-full max-w-xs px-4 py-3 border border-[#28d3fa] bg-white text-[#FA8128] rounded-lg hover:shadow-md transition">
    {icon} {text}
  </button>
);
const Partneroverview = () => {
  
  
  return (
    <div className="main flex h-screen w-full">
   
      <div className="left w-[40%] h-full bg-[#FA8128] relative flex items-center justify-center">
        <div className="logoimg absolute top-10 left-10"></div>
        <div className="globeimg opacity-45 w-full h-full"></div>
      </div>

 
        <div className="right w-[60%] flex items-center justify-center">
          <div className="map">
            <div className="up flex justify-between">
              <div className="cont flex gap-3 m-10">
                <h1 className="text-[#FA8128] font-medium text-4xl">Hello,</h1>
                <h1 className="text-[#28d3fa] font-medium text-4xl">Partner</h1>
              </div>
              <div className="crossimg m-10"></div>
              <div className="otherlinks ml-11 mt-10 space-y-3">
                <SocialButton  icon={<GoogleIcon />} text="Continue with Google" />
                <SocialButton icon={<FacebookIcon />} text="Continue with Facebook" />
                <SocialButton icon={<StoreIcon />} text="Store Baggage" />
              </div>
            </div>
            <div className="crossimg mt-10 cursor-pointer"onClick={()=>navigate("/landingpage")}></div>
          </div>

          {/* 2x3 Button Grid */}
          <div className="grid grid-cols-2 gap-7 text-xl mt-16 max-w-xl">
            <SocialButton icon={<GoogleIcon />} text="My Profile"  />
            <SocialButton icon={<FacebookIcon />} text="Account Settings"  />
            <SocialButton icon={<StoreIcon />} text="My Bookings"  />
            <SocialButton icon={<StarIcon />} text="My Reviews"  />
            <SocialButton icon={<StarIcon />} text="Assistance"  />
            <SocialButton icon={<StarIcon />} text="Logout"  />
          </div>
        </div>
      </div>
    
  );
};

export default Partneroverview;
