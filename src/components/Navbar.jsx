import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ tabs,toggleProfile,isProfileOpen }) {
  return (
    <div className="sticky top-0 z-50 w-full h-7 bg-[#3C3C3C]
flex justify-between items-center border-b border-[#BABABA]/40">

  <div className="flex h-full gap-4">
    {tabs.map((tab, index) => (
      <Link
        key={index}
        to={tab === "home.py" ? "/" : `/${tab.toLowerCase()}`}
        className="flex items-center h-full text-[#AEC6F6]
        border-b-2 border-[#AEC6F6]
        text-xs px-4 font-bold tracking-wide code-saver"
      >
        {tab}
      </Link>
    ))}
  </div>

  <div className="flex items-center ">
    <button className="p-1.5 rounded-full hover:bg-white/1 transition cursor-pointer select-none">
  <svg
  className="w-4 h-4 transition text-[#BABABA]"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
  </svg>
</button>


<button  
className="p-1.5 rounded-full hover:bg-white/1  transition cursor-pointer "
onClick={toggleProfile}>
  <svg
    className={`w-4 h-4 transition ${
    isProfileOpen ? "text-[#AEC6F6]" : "text-[#BABABA]"
  }`}
    viewBox="0 0 200 200"
    fill="currentColor"
  >
    <path d="M158.33,16.67H41.67c-13.79,0-25,11.21-25,25v116.67c0,13.79,11.21,25,25,25h116.67c13.79,0,25-11.21,25-25V41.67c0-13.79-11.21-25-25-25ZM33.33,158.33V41.67c0-4.59,3.74-8.33,8.33-8.33h25v133.33h-25c-4.59,0-8.33-3.74-8.33-8.33ZM166.67,158.33c0,4.59-3.74,8.33-8.33,8.33h-75V33.33h75c4.59,0,8.33,3.74,8.33,8.33v116.67Z" />
  </svg>
</button>

  </div>
</div>

  );
}
