import React from "react";
import Icon from "../../assets/magnifying-glass-svgrepo-com.svg";
import Mic from "../../assets/google-mic-icon.jpg";
import GoogleSearch from "../../assets/google-lens-logo.webp";

const SearchBar = () => {
  return (
    // <div className='flex justify-center align-middle relative '>
    //   <img src={Icon} className='w-4 h-4 absolute my-4 '/>
    //   <input type='search' placeholder='Search Google or  URL'
    //   className='py-5 px-72 text-sm border border-gray-600 rounded-full'/>
    // </div>

    <div class="flex justify-center">
      <div className="flex">
      <input
        placeholder="Search Google....."
        className="input shadow-lg border-2  border-gray-600 w-[50rem] h-16  px-10 rounded-xl outline-none"
        name="search" type="search" />
         <img src={Icon} className='w-5 h-5 absolute my-6 ml-4 '/>
         <div className="w-8 h-8 absolute my-4 mr-3 right-80 flex">
         <img src= {Mic}></img>
         <img src= {GoogleSearch} ></img>
         </div>
        
      </div>
     
    </div>
  );
};

export default SearchBar;
