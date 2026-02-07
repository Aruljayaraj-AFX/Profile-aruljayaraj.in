import { Link } from "react-router-dom";

export default function Profile_Navbar({toggleProfile,activeTab,setActiveTab}) {
    const tabs = ["Profile", "Contact"];
  return (
    <div className="sticky top-0 z-50 w-full h-7 bg-[#3C3C3C]
flex justify-between items-center border-b border-[#BABABA]/40">

  <div className="flex h-full gap-2">
    {tabs.map((tab, index) => (
      <button
        key={index}
        to={`/${tab.toLowerCase()}`}
        onClick={() => setActiveTab(tab)}
  className={`flex items-center h-full px-2  tracking-wide font-bold code-saverr
    ${activeTab === tab ? "text-[#AEC6F6]" : "text-[#BABABA]"}
    ${activeTab === tab ? "border-b-2 border-[#AEC6F6]" : ""}
  `}
      >
        {tab}
      </button>
    ))}
  </div>
  <div className="flex items-center cursor-pointer hover:bg-white/1 transition p-1 rounded-full"
  onClick={toggleProfile}>
    <svg
    className="w-4 h-4 text-[#BABABA]"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
  </svg>
  </div>
</div>

  );
}
