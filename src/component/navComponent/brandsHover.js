import { ChevronDownIcon } from "@heroicons/react/20/solid";

const solutions = [
  {
    name: "Fender",
    href: "/fender",
  },
  {
    name: "Squier",
    href: "/squier",
  },
  {
    name: "Korg",
    href: "/korg",
  },
  {
    name: "Fender Custom Shop",
    href: "/fenderCS",
  },
];
const callsToAction = [];

export default function BrandsHover() {
  return (
    <div className="relative group py-0 md:py-3">
      <div className={`text-gray-100 group-hover:bg-gray-900 group-hover:shadow-md group-hover:text-white px-3 py-2 rounded-md text-[15px] lg:text-[16px] font-medium`}>
        <div className="inline-flex items-center text-[15px] lg:text-[16px] font-medium gap-x-1 text-sm leading-6 outline-none">
          <span>Brands</span>
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </div>

        <div className="absolute left-1/2 z-10 mt-5 flex w-screen group-hover:max-w-max group-hover:max-h-max max-w-0 max-h-0 -translate-x-1/2 px-4">
          <div className="w-full flex-auto overflow-hidden rounded-[18px] bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4 grid grid-cols-3 gap-x-6 gap-y-1">
              {solutions.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-gray-200"
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
