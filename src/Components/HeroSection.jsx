import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AppsIcon from '@mui/icons-material/Apps';
import profile from './../assets/Profile.png';
import SearchIcon from '@mui/icons-material/Search';
import PublicIcon from '@mui/icons-material/Public';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
const HeroSection = () => {
  return (
    <div className='relative flex-1 bg-[#1a1c1c] text-white '>

      {/*Nav-bar*/}
      <div className='flex justify-between items-center h-16 m-4'>
        <div>
          <h1 className='font-bold'>Gemini <ArrowDropDownIcon /></h1>
          <p className='text-[#a1a8af]'>2.0 Flash</p>
        </div>
        <div className='flex items-center'>
          <button className='bg-[#3c3f43] mr-4 h-10 w-48 text-center rounded-lg '>Try Gemini Advance</button>
          <ShoppingBasketIcon className='text-[#a1a8af] mr-4' />
          <AppsIcon className='mr-4' />
          <img className='object-fit h-8 w-8 rounded-full mr-4' src={profile} alt="" />
        </div>
      </div>

      {/*Hero-sec*/}
      <div className='h-full w-full flex justify-center items-center'>
        <h2 className="bg-gradient-to-r font-semibold text-4xl mb-[20%] from-teal-700 via-pink-500 to-indigo-700 bg-clip-text text-transparent">
          Hello, Ali
        </h2>
      </div>

      {/*Bottom-Sec*/}
    <div className='absolute bottom-10 left-1/2 -translate-x-1/2 border-[#aeb9c2] rounded-2xl border h-32 w-[70%] flex flex-col items-center p-4 bg-[#1a1c1c]'>
      
      {/* Input Field */}
      <input 
        className='w-full  text-white px-4 py-2 rounded-lg outline-none' 
        type="search" 
        placeholder="Search..." 
      />

      {/* Buttons Section */}
      <div className='flex items-center justify-between w-full mt-4 px-2'>
        
        {/* Left Side Buttons */}
        <div className='flex gap-2'>
          <button className="flex items-center justify-center w-10 h-10 text-gray-300 rounded-full  hover:bg-[#3a3d3d] transition">
            <AddIcon fontSize="small" />
          </button>
          <button className="flex items-center gap-2 w-36 font-medium text-sm text-gray-300 px-1  rounded-full  hover:bg-[#3a3d3d] transition">
            <SearchIcon fontSize="small" />
            Deep Research
          </button>
          <button className="flex items-center gap-2 w-24 font-medium text-sm text-gray-300 px-2 rounded-full  hover:bg-[#3a3d3d] transition">
            <PublicIcon fontSize="small" />
            Canvas
          </button>
        </div>

        {/* Right Side Button */}
        <button className="flex items-center justify-center w-10 h-10 text-gray-300 rounded-full  hover:bg-[#3a3d3d] transition">
          <SendIcon fontSize="small" />
        </button>

      </div>
      
    </div></div>
    
  )
}

export default HeroSection
