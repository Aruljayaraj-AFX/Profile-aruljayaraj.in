import Profile from "../components/Profilecontent";
import Contact from "../components/Contactcontent";

export default function Profile_details({ activeTab }) {
  return (
<div className="h-full w-full flex flex-col overflow-hidden">
  <div className="flex-1 overflow-y-auto no-scrollbar">
    {activeTab === "Profile" && <Profile />}
    {activeTab === "Contact" && <Contact />}
  </div>
</div>
  );
}