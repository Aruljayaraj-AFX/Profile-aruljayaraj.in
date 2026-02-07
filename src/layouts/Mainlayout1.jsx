import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Profile_Navbar from "../components/ProfileNavbar";
import Profile from "../pages/Profile_details";
import Project_ads from "../components/Profile_pj_ads";
import { motion, AnimatePresence } from "framer-motion";

export default function MainLayout() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Profile");
  const location = useLocation();
  const [tabs, setTabs] = useState(["Arul_Jayaraj.py"]);

  useEffect(() => {
    const path = location.pathname;
    let pageName = "Arul_Jayaraj.py";

    if (path !== "/") {
      pageName = path.replace("/", "");
      pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
    }

    setTabs((oldTabs) =>
      oldTabs.includes(pageName) ? oldTabs : [...oldTabs, pageName]
    );
  }, [location]);

  return (
    <div className="h-screen flex flex-col lg:flex-row overflow-hidden ">

  {isProfileOpen && (
    <div className=" md:bottom-0 order-2 lg:order-1 h-[60vh] lg:h-full flex flex-col bg-[#282828] border-[#BABABA]/40 border-b lg:border-r ">
      
      <Profile_Navbar
        toggleProfile={() => setIsProfileOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="relative flex-1 overflow-auto no-scrollbar">
        <AnimatePresence mode="wait">
          {["Profile", "Contact"].includes(activeTab) && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute -bottom-2 -right-18 pointer-events-none select-none z-0"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              <span className="font-bodoni text-[225px] text-[#222] font-bold">
                {activeTab}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <Profile activeTab={activeTab} />
      </main>

      <div>
        <Project_ads />
      </div>
    </div>
  )}

  <div className="order-1 lg:order-2 flex flex-col flex-1">
    <Navbar
      tabs={tabs}
      toggleProfile={() => setIsProfileOpen((prev) => !prev)}
      isProfileOpen={isProfileOpen}
    />

    <main className="flex-1 overflow-y-auto no-scrollbar">
      <Outlet />
    </main>
  </div>
</div>

  );
}
