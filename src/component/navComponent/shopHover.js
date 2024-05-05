import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const solutions = [
  {
    name: "Electric Guitar",
    href: "/electric",
  },
  {
    name: "Acoustic Guitar",
    href: "/acoustic",
  },
  {
    name: "Bass",
    href: "/bass",
  },
  {
    name: "Keyboard",
    href: "/keyboard",
  },
];
const callsToAction = [];

export default function BrandsHover() {
  const [active, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const url = location.pathname; // Get the current pathname from the location object
    const parts = url.split("/");
    if (parts.includes('shop'))
      setActive(true)
  }, [active]);

  return (
    <div className="relative group py-3">
      <div className={`${active ? "bg-gray-900 text-white shadow-md" : "text-gray-100 group-hover:bg-gray-900 group-hover:shadow-md group-hover:text-white" } px-3 py-2 rounded-md text-[15px] lg:text-[16px] font-medium`}>
        <div className="inline-flex items-center text-[15px] lg:text-[16px] font-medium gap-x-1 text-sm leading-6 outline-none">
          <span>Shop</span>
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </div>

        <div className="absolute left-1/2 z-10 mt-5 flex w-screen group-hover:max-w-max group-hover:max-h-max max-w-0 max-h-0 -translate-x-1/2 px-4">
          <div className="w-full flex-auto overflow-hidden rounded-[18px] bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {solutions.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex gap-x-6 rounded-lg px-3 py-2 hover:bg-gray-200"
                >
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <item.icon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
