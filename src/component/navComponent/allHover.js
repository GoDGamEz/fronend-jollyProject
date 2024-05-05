import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function AllHover() {
  const [active, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const url = location.pathname; // Get the current pathname from the location object
    const parts = url.split("/");
    if (parts.includes("all")) setActive(true);
  }, [active]);

  return (
    <div className="relative group py-3">
      <div
        className={`${
          active
            ? "bg-gray-900 text-white shadow-md"
            : "text-gray-100 hover:bg-gray-900 hover:shadow-md hover:text-white"
        } px-3 py-2 rounded-md text-[15px] lg:text-[16px] font-medium`}
      >
        <div className="inline-flex items-center text-[15px] lg:text-[16px] font-medium gap-x-1 text-sm leading-6 outline-none">
          <span>All</span>
        </div>
      </div>
    </div>
  );
}
