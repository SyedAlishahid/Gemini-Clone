import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SortIcon from '@mui/icons-material/Sort';
import DiamondIcon from '@mui/icons-material/Diamond';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
  const [visibility, setVisibility] = useState(false);

  return (
    <div className={`h-screen transition-all duration-300 ${visibility ? 'w-20' : 'w-84'} flex flex-col p-6 bg-[#282a2c]`}>
      {/* Hamburger Icon */}
      <div className='mt-3 mb-10 flex justify-start text-lg cursor-pointer text-white items-center w-full'>
        <MenuIcon
          onClick={() => setVisibility(prev => !prev)}
          className="hover:rounded-full hover:bg-gray-700 transition-all duration-300 p-2 " 
          sx={{height: '40px', width: '40px'}}
        />
      </div>

      <button className={`h-10 w-32 font-medium text-sm text-white hover:transition hover:ease-in-out hover:bg-[#202122] rounded-4xl ${visibility ? 'hidden' : ''}`}>
        + New Chat
      </button>

      {/* Recent Section */}
      <div className={`${visibility ? 'hidden' : ''}`}>
        <h4 className={`font-semibold mt-10 text-md mb-4 text-white`}>Recent</h4>
        <p className={`text-[#9ba0a8] mt-4 text-sm`}>
          <SortIcon /> React JS latest Features
        </p>
        <p className={`text-[#9ba0a8] mt-4 text-sm`}>
          <SortIcon /> Pakistan Stock Market Decline
        </p>
        <p className={`text-[#9ba0a8] mt-4 text-sm`}>
          <SortIcon /> JavaScript Array Methods
        </p>
        <p className={`text-[#9ba0a8] mt-4 text-sm`}>
          <SortIcon /> Fastest Way to Learn Machine Learn...
        </p>
        <p className={`text-[#9ba0a8] mt-4 text-sm`}>
          <SortIcon /> First Made-in-Pakistan Car
        </p>
      </div>

      {/* Bottom Icons - Always Visible */}
      <div className={`absolute bottom-35  ${visibility ? '' : ''}`}>
        <p className={`text-[#9ba0a8] mt-4 flex text-sm`}>
          <DiamondIcon /> <span className={`${visibility ? "hidden " : "pl-2 flex items-center"}`}>Buy Premium</span>
        </p>
      </div>

      <div className={`absolute bottom-25  ${visibility ? '' : ''}`}>
        <p className={`text-[#9ba0a8] mt-4 flex text-sm`}>
          <HelpOutlineIcon /> <span className={`${visibility ? "hidden " : "pl-2 flex items-center"}`}>Help</span>
        </p>
      </div>

      <div className={`absolute bottom-15  ${visibility ? '' : ''}`}>
        <p className={`text-[#9ba0a8] mt-4 flex text-sm`}>
          <HistoryIcon /> <span className={`${visibility ? "hidden " : "pl-2 flex items-center"}`}>Activity</span>
        </p>
      </div>

      <div className={`absolute bottom-5  ${visibility ? '' : ''}`}>
        <p className={`text-[#9ba0a8] mt-4 flex text-sm`}>
          <SettingsIcon /> <span className={`${visibility ? "hidden " : "pl-2 flex items-center"}`}>Settings</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
