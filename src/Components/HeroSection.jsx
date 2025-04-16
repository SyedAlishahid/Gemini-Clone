import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AppsIcon from '@mui/icons-material/Apps';
import profile from './../assets/Profile.png';
import SearchIcon from '@mui/icons-material/Search';
import PublicIcon from '@mui/icons-material/Public';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';

const HeroSection = () => {
  const [inpVal, setInpVal] = useState("");
  const [conversation, setConversation] = useState([]); // Store both queries and responses

  console.log(inpVal)
  const API_KEY = "AIzaSyBW5CX8rJpgKl09QhpVatp2QkxxSXoRLYs";
  const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

  async function fetchGeminiData(prompt) {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      });

      const data = await response.json();
      const generatedText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      console.log(generatedText);
      
      // Add both user query and AI response to conversation
      setConversation(prev => [
        ...prev,
        { type: 'user', content: inpVal },
        { type: 'ai', content: generatedText }
      ]);
      
      setInpVal(""); // Clear input field
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const fetchHandler = () => {
    if (inpVal.trim()) { // Only send if there's actual input
      fetchGeminiData(inpVal);
    }
  }

  return (
    <div className='relative flex-1 bg-[#1a1c1c] text-white overflow-hidden'>
      {/*Nav-bar*/}
      <div className='flex justify-between items-center h-16 m-4 '>
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
      <div className='h-full w-full flex flex-col justify-start items-center overflow-y-auto pb-40 pt-8 px-4'>
        {conversation.length === 0 ? (
          <h2 className='bg-gradient-to-r font-semibold text-4xl from-teal-700 via-pink-500 to-indigo-700 bg-clip-text text-transparent'>
            Hello, Ali
          </h2>
        ) : (
          <div className='w-full max-w-4xl space-y-8'>
            {conversation.map((item, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl ${item.type === 'user' 
                  ? 'bg-[#2d2f2f] ml-auto w-fit max-w-[80%]' 
                  : 'bg-gradient-to-r from-teal-900/30 via-pink-900/30 to-indigo-900/30 mr-auto w-fit max-w-[80%]'}`}
              >
                <p className='text-white'>{item.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    
      {/*Bottom-Sec*/}
      <div className='absolute bottom-10 left-1/2 -translate-x-1/2 border-[#aeb9c2] rounded-2xl border h-32 w-[70%] flex flex-col items-center p-4 bg-[#1a1c1c]'>
        {/* Input Field */}
        <input
          value={inpVal}
          onChange={(e) => setInpVal(e.target.value)}
          className='w-full bg-transparent text-white px-4 py-2 rounded-lg outline-none border border-[#3a3d3d]'
          type="search"
          placeholder="Search..."
          onKeyPress={(e) => e.key === 'Enter' && fetchHandler()}
        />

        {/* Buttons Section */}
        <div className='flex items-center justify-between w-full mt-4 px-2'>
          {/* Left Side Buttons */}
          <div className='flex gap-2'>
            <button className="flex items-center justify-center w-10 h-10 text-gray-300 rounded-full hover:bg-[#3a3d3d] transition">
              <AddIcon fontSize="small" />
            </button>
            <button className="flex items-center gap-2 w-36 font-medium text-sm text-gray-300 px-1 rounded-full hover:bg-[#3a3d3d] transition">
              <SearchIcon fontSize="small" />
              Deep Research
            </button>
            <button className="flex items-center gap-2 w-24 font-medium text-sm text-gray-300 px-2 rounded-full hover:bg-[#3a3d3d] transition">
              <PublicIcon fontSize="small" />
              Canvas
            </button>
          </div>

          {/* Right Side Button */}
          <button 
            onClick={fetchHandler}
            disabled={!inpVal.trim()}
            className={`flex items-center justify-center w-10 h-10 text-gray-300 rounded-full transition ${inpVal.trim() ? 'hover:bg-[#3a3d3d]' : 'opacity-50'}`}
          >
            <SendIcon fontSize="small" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection