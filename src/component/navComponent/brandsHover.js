import { ChevronDownIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { useState, useEffect } from "react";

const apiClient = axios.create({
  baseURL: "https://jolly-online-store-3faac26a998e.herokuapp.com",
});

const callsToAction = [];

export default function BrandsHover() {
  const [brandData, setBrandData] = useState([]);

  const solutions = brandData;

  useEffect(() => {
    if (brandData.length === 0) {
      const fetchBrand = async () => {
        try {
          const response = await apiClient.get(`/brand`);
          setBrandData(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchBrand();
    }
  }, [brandData]);

  return (
    <div className="all relative group py-0 md:py-4">
      <div className={`px-2 py-1 rounded-md`}>
        <div className="text-gray-100 text-[15px] lg:text-[16px] font-medium transition-colors ease-linear duration-200 delay-100 group-hover:text-[#ffc052] inline-flex items-center gap-x-1 px-1 py-1 leading-6 outline-none relative">
          <span>Brands</span>
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-0 h-[1px] transition-w duration-300 ease-linear group-hover:bg-[#ffb83e] group-hover:w-full"></div>
        </div>

        <div className="absolute left-1/2 z-10 mt-5 flex w-screen group-hover:max-w-max group-hover:max-h-max max-w-0 max-h-0 -translate-x-1/2 px-4">
          {brandData && (
            <div className="w-full flex-auto overflow-hidden rounded-[18px] bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4 grid grid-cols-3 gap-x-6 gap-y-2">
                {solutions.map((item) => (
                  <div
                    key={item.Name}
                    className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-gray-200 min-w-36"
                  >
                    <div>
                      <a
                        href={"/"+item.Name}
                        className="font-semibold text-gray-900"
                      >
                        {item.Name}
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
          )}
        </div>
      </div>
    </div>
  );
}
